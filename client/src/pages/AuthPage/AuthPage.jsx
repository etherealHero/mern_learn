import React from "react"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import "./AuthPage.scss"

const AuthPage = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="auth-page">
          <Routes>
            <Route
              path="/login"
              element={
                <>
                  <h3>Авторизация</h3>
                  <div className="form form-login">
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="email" type="email" name="email" className="validate" />
                        <label htmlFor="email">Email</label>
                      </div>

                      <div className="input-field col s12">
                        <input id="password" type="password" name="password" className="validate" />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>

                    <div className="row">
                      <button className="wawes-effect wawes-light btn blue">Войти</button>
                      <Link to="/registration" className="btn-outline btn-reg">
                        Нет аккаунта?
                      </Link>
                    </div>
                  </div>
                </>
              }
            />

            <Route
              path="/registration"
              element={
                <>
                  <h3>Регистрация</h3>
                  <div className="form form-login">
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="email" type="email" name="email" className="validate" />
                        <label htmlFor="email">Email</label>
                      </div>

                      <div className="input-field col s12">
                        <input id="password" type="password" name="password" className="validate" />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>

                    <div className="row">
                      <button className="wawes-effect wawes-light btn blue">Зарегистрироваться</button>
                      <Link to="/login" className="btn-outline btn-reg">
                        Уже есть аккаунт?
                      </Link>
                    </div>
                  </div>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default AuthPage
