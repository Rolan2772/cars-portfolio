import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";

interface Props {
    model: string,
    version: string
}

const ShortDescription: React.FC<Props> = (props) => {

    return (
        <Typography variant="h6" align={"center"}>
            {props.model} {props.version}
        </Typography>
    );
};

export default ShortDescription;