const Login = () => {
    return (
        <div id="auth-screen" className="screen active">
        <div className="auth-container">
            <h1 className="casino-title">🎲 [ПРИДУМАЙТЕ НАЗВАНИЕ]</h1>
            <div className="auth-tabs">
                <button className="tab-btn active" onclick="showLogin()">
                    Вход
                </button>
                <button className="tab-btn" onclick="showSignup()">
                    Регистрация
                </button>
            </div>
            <form id="login-form" className="auth-form active">
                <div className="form-group">
                    <label>Имя пользователя</label>
                    <input type="text" placeholder="Введите имя" required="" />
                </div>
                <div className="form-group">
                    <label>Пароль</label>
                    <input
                        type="password"
                        placeholder="Введите пароль"
                        required=""
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Войти
                </button>
            </form>
            <form id="signup-form" className="auth-form">
                <div className="form-group">
                    <label>Имя пользователя</label>
                    <input
                        type="text"
                        placeholder="Придумайте имя"
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Введите email"
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label>Пароль</label>
                    <input
                        type="password"
                        placeholder="Придумайте пароль"
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label>Подтвердите пароль</label>
                    <input
                        type="password"
                        placeholder="Повторите пароль"
                        required=""
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Создать аккаунт
                </button>
            </form>
        </div>
    </div>
    )
}

export default Login    