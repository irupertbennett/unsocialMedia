const CapitalizeFirstLetter = (data) => {
    let text = data.word.slice(0,1).toUpperCase() + data.word.slice(1, data.word.length);
    return ( 
        text 
    );
}
 
export default CapitalizeFirstLetter;