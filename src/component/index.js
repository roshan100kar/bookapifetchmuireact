{JSON.parse(item?.notes)?.content?.map((item2, indx) => {
    return (
      <>
      {console.log('item2',item2)}
        {item2?.content?.map((item3, indxc) => {
          return (
            <>
              {item3?.content.map((item4) => {
                if (item4?.content) {
                  return(
                    <>{
                      item4?.content.map((item5) => {
                        return (<h5>{item5?.text}</h5>)
                      })
                    }</>
                  )
                  
                }
              })}
            </>
          );
        })}
      </>
    );
  })} 