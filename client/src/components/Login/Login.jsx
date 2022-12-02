import React from "react"
import { Link } from "react-router-dom"
import "./Login.scss"

const Login = ({ changeHandler }) => {
  return (
    <>
      <h3>Авторизация</h3>
      <form
        className="form form-login"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              name="email"
              className="validate"
              onChange={changeHandler}
            />
            <label htmlFor="email">
              Email
            </label>
          </div>

          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              name="password"
              className="validate"
              onChange={changeHandler}
            />
            <label htmlFor="password">
              Password
            </label>
          </div>
        </div>

        <div className="row">
          <button className="wawes-effect wawes-light btn blue">
            Войти
          </button>
          <Link
            to="/registration"
            className="btn-outline btn-reg"
          >
            Нет аккаунта?
          </Link>
        </div>
      </form>
    </>
  )
}

export default Login
