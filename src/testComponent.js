import { useNavigate } from 'react-router-dom'
const TestComponent = () => {
    const navigate = useNavigate()
    return (<div>
        <h1>Test Area</h1>
        <button onClick={() => {
            navigate('/welcome/Aru')

        }}>Go to Welcome</button>
    </div>)
}

export default TestComponent