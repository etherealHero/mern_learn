import React from 'react'
import './AuthPage.scss'

const AuthPage = () => {

  return (
    <div className="container">
      <div className="auth-page">
        <h3>Авторизация</h3>
        <div className="form form-login">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                name="email"
                className="validate"
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                name="password"
                className="validate"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row">
            <button className="wawes-effect wawes-light btn blue">Войти</button>
            <a href="/" className="btn-outline btn-reg">Нет аккаунта?</a>
          </div>
        </div>





        <h3>Регистрация</h3>
        <div className="form form-login">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                name="email"
                className="validate"
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                name="password"
                className="validate"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row">
            <button className="wawes-effect wawes-light btn blue">Зарегистрироваться</button>
            <a href="/" className="btn-outline btn-reg">Уже есть аккаунт?</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AuthPage
