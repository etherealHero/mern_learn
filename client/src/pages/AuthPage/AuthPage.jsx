import axios from "axios"
import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../../components/Login/Login"
import Registration from "../../components/Registration/Registration"
import "./AuthPage.scss"

const AuthPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const registerHandler = async () => {
    try {
      const hostname = window.location.hostname

      // await fetch(`http://${hostname}:4000/api/auth/lol`)
      //   .then((response) => response.json())
      //   .then((data) => console.log(data))

      // const response = await axios.post(
      //   `http://${hostname}:4000/api/auth/registration`,
      //   { ...form },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // )

      const response = await fetch(`http://${hostname}:4000/api/auth/registration`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form }),
      })

      const content = await response.json()

      console.log(content)
    } catch (e) {
      console.log("ERROR", e)
    }
  }

  useEffect(() => {
    // console.log(form)
  }, [form])

  return (
    <BrowserRouter>
      <div className="container">
        <div className="auth-page">
          <Routes>
            <Route path="/login" element={<Login changeHandler={changeHandler} />} />

            <Route
              path="/registration"
              element={
                <Registration
                  changeHandler={changeHandler}
                  registerHandler={registerHandler}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default AuthPage
