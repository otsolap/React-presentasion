import React from 'react';
import { useSpring, animated} from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <animated.div className="o-card-info" style={style}>
            <p className="o-card-title">{props.title}</p>
            <p className="o-card-subtitle">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Check it out.</a>
        </animated.div>
    );

}

export default CardInfo;