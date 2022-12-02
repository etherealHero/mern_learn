import React from "react"
import { Link } from "react-router-dom"
import "./Registration.scss"

const Registration = ({
  changeHandler,
  registerHandler,
}) => {
  return (
    <>
      <h3>Регистрация</h3>
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
          <button
            className="wawes-effect wawes-light btn blue"
            onClick={registerHandler}
          >
            Зарегистрироваться
          </button>
          <Link
            to="/login"
            className="btn-outline btn-reg"
          >
            Уже есть аккаунт?
          </Link>
        </div>
      </form>
    </>
  )
}

export default Registration
