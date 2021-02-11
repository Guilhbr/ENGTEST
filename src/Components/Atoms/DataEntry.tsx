import React from 'react';

const DataEntry: React.VoidFunctionComponent<{title: string, result: string}> = ({title, result}) => (
    <div className="dataEntry">
        <div className="dataEntryTitle">{title}:</div>
        <div>{result}</div>
    </div>
)


export default DataEntry