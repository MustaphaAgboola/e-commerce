export const UseSetRequest = (setLoginRequest) => {

  const setRequest = (value, key) => {
    setLoginRequest((previously) => {
      return {
        ...previously,
        [key]: value,
      };
    });
  };

 return {setRequest}

}
