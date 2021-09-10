import Hello from './Hello';
import ComponentWithProps from './ComponentWithProps';
import King from './King';


const PropComp = () => {
    const kings = [];
    for(let i=1; i<1; i++) {
      kings.push(<King nm="Samm X" ctry="Bavaria" yrs="20BC-AD40"/>);
      kings.push(<King nm="Sham LXXX" ctry="Scotland" yrs="1992-present"/>);
    }
    return (
        <>
            <Hello name="Tom"/>
            <Hello name="Sham"/>
            <Hello name="Sam"/>
            <ComponentWithProps header="Boo!" content="I bet you're scared." number={20}/>
            {kings}
            
        </>
    );
};

export default PropComp;