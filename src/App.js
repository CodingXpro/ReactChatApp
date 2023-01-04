import { ChatEngine } from "react-chat-engine";
import LoginForm from './components/loginForm'
import './App.css';
import ChatFeed from './components/ChatFeed';
// const projectID = "1cbf6318-2436-429b-8f07-561f2eaf49ad"

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="1cbf6318-2436-429b-8f07-561f2eaf49ad"

            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}
export default App;