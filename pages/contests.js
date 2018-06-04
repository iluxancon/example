export default class extends React.Component {
    render() {
        return (
            <>
                <style>{`
                    h1 {
                        background: red;
                       //background: #FF0000;
                       //background: rgb(255, 0, 0);
                    }
                `}</style>
                <link href="/static/base.css" rel = "stylesheet" />
            <a href="/">Home page</a>
        <h1>list of contests!</h1>
        </>
        )
    }

}