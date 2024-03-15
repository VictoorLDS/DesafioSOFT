const ButtonDefault = ({buttonFunction, classStyle, isDelete, Text, codeItem}) => {
    return (
      <>
      {isDelete == true ?
      <button className="deletebutton" onClick={()=>{buttonFunction(codeItem)}}>{Text}</button>
        :
      <button onClick={buttonFunction} className={classStyle}>{Text}</button>
      }
      </>
    )
  }
  
  export default ButtonDefault