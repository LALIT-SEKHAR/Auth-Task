export const SigninUser = ({email, password}) => {
    return fetch(`${process.env.REACT_APP_ENDPOINT}/signin`,{
        method: 'POST',
        body:JSON.stringify({email,password}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then( res => {return res.json()})
    .catch(err => {return err})
}
export const SignupUser = ({name, email, password}) => {
    return fetch(`${process.env.REACT_APP_ENDPOINT}/signup`,{
        method: 'POST',
        body:JSON.stringify({name, email,password}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then( res => {return res.json()})
    .catch(err => {return err})
}

export const SignoutUser = ({token}) => {
    return fetch(`${process.env.REACT_APP_ENDPOINT}/signup`,{
        method: 'POST',
        body:JSON.stringify({token}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then( res => {return res.json()})
    .catch(err => {return err})
}

export const IsSignIn = () => {
    return localStorage.getItem('AccessToken') ? true : false;
}

export const getAccessToken = (token) => {
    return fetch(`${process.env.REACT_APP_ENDPOINT}/token`,{
        method: 'POST',
        body:JSON.stringify({token}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then( res => {return res.json()})
    .catch(err => {return err})
}