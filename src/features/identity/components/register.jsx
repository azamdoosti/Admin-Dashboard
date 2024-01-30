import React from 'react'

const Register = () => {
    return (
        <>
            <div className="main d-flex justify-content-center w-100">
                <main className="content d-flex p-0">
                    <div className="container d-flex flex-column">
                        <div className="row h-100">
                            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                                <div className="d-table-cell align-middle">
                                    <div className="text-center mt-40">
                                        <img src={logo} style={{ height: "100px" }} />
                                        <h1 className="h2">پلتفرم آموزش آنلاین</h1>
                                        <p className="lead">
                                            جهت استفاده از ویژگی های پلتفرم کلاسبن ثبت نام کنید
                                        </p>
                                        <p className="lead">
                                            قبلا ثبت نام کرده اید؟
                                            <Link to="/login" className="me-2"> وارد شوید </Link>
                                        </p>
                                    </div>

                                    <div className="card">
                                        <div className="card-body">
                                            <div className="m-sm-4">
                                                <form>
                                                    <div className="mb-3">
                                                        <label className="form-label">موبایل</label>
                                                        <input className="form-control form-control-lg" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">رمز عبور</label>
                                                        <input
                                                            className="form-control form-control-lg mb-2"
                                                            type="password"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label"> تکرار رمز عبور </label>
                                                        <input
                                                            className="form-control form-control-lg mb-2"
                                                            type="password"
                                                        />
                                                    </div>
                                                    <div className="text-center mt-3">
                                                        <button type="submit" className="btn btn-lg btn-primary">
                                                            ثبت نام کنید
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>


        </>
    )
}

export default Register