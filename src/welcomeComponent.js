import { useParams } from "react-router-dom"

const WelcomeComponent = () => {
    const { name } = useParams()
    return <h1>Welcome {name}</h1>

}

export default WelcomeComponent