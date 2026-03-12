import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase.js';

/**
 * /auth/callback
 *
 * Supabase redirects here after email verification (and magic link clicks).
 * The URL contains auth tokens in either:
 *   - URL hash: #access_token=...&type=signup   (implicit flow)
 *   - URL query: ?code=...                       (PKCE flow)
 *
 * We exchange the code/hash for a session, then show the user a friendly
 * "verification successful" message instead of a blank/error page.
 *
 * This is the correct pattern for cross-device confirmation flows:
 *   PC registers → email sent → user opens link on phone → lands here
 *   → sees "verified! go back to your computer to log in" message.
 */
export default function AuthCallback() {
    const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        async function handleCallback() {
            try {
                // Supabase JS automatically picks up the code from the URL
                // and exchanges it for a session.
                const { error } = await supabase.auth.getSession();
                if (error) throw error;

                // If there's a `code` param (PKCE), exchange it explicitly
                const params = new URLSearchParams(window.location.search);
                const code = params.get('code');
                if (code) {
                    const { error: exchangeErr } = await supabase.auth.exchangeCodeForSession(code);
                    if (exchangeErr) throw exchangeErr;
                }

                setStatus('success');
            } catch (err) {
                console.error('[AuthCallback]', err);
                setErrorMsg(err.message ?? '验证失败，链接可能已过期。');
                setStatus('error');
            }
        }

        handleCallback();
    }, []);

    return (
        <div className="page container" style={{ maxWidth: 480 }}>
            <div className="auth-card" style={{ textAlign: 'center' }}>
                {status === 'loading' && (
                    <>
                        <div className="spinner" style={{ margin: '2rem auto' }} />
                        <p style={{ color: '#888' }}>正在验证中，请稍候…</p>
                    </>
                )}

                {status === 'success' && (
                    <>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                        <h1 className="auth-title" style={{ fontSize: '1.4rem' }}>邮箱验证成功！</h1>
                        <p style={{ color: '#555', lineHeight: 1.7, marginTop: '0.8rem' }}>
                            您的账号已激活。
                        </p>
                        <div className="alert" style={{
                            background: '#fff8e1',
                            border: '1px solid #ffd54f',
                            borderRadius: '12px',
                            padding: '1rem 1.2rem',
                            marginTop: '1.5rem',
                            textAlign: 'left',
                            fontSize: '0.9rem',
                            lineHeight: 1.8,
                            color: '#555'
                        }}>
                            📱 <strong>如果您是在手机上打开此链接：</strong><br />
                            请返回电脑浏览器，使用您注册时的<strong>邮箱和密码登录</strong>即可开始使用。
                        </div>
                        <Link
                            to="/auth"
                            className="btn btn--primary auth-submit"
                            style={{ marginTop: '1.5rem', display: 'block', textDecoration: 'none', textAlign: 'center' }}
                        >
                            🔑 前往登录
                        </Link>
                    </>
                )}

                {status === 'error' && (
                    <>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>❌</div>
                        <h1 className="auth-title" style={{ fontSize: '1.4rem' }}>验证失败</h1>
                        <div className="alert alert--error" style={{ marginTop: '1rem' }}>
                            {errorMsg}
                        </div>
                        <p style={{ color: '#888', marginTop: '1rem', fontSize: '0.9rem' }}>
                            验证链接可能已过期（有效期 24 小时）或已被使用。<br />
                            请返回注册页面重发验证邮件。
                        </p>
                        <Link
                            to="/auth"
                            className="btn btn--outline auth-submit"
                            style={{ marginTop: '1.5rem', display: 'block', textDecoration: 'none', textAlign: 'center' }}
                        >
                            ← 返回注册 / 登录
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
