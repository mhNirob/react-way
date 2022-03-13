import Content from "./Content";
import ContentClass from "./ContentClass";

export default function Section ({theme}) {
    return(
        <div>
            <p>This is a Section </p>
            <Content theme={theme}/>
            <ContentClass/>
        </div>
    );
}