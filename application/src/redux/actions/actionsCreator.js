// export const actionsCreator = (type) => {
//   return (payload) => {
//     return {
//       type,
//       payload,
//     };
//   };
// };

export const actionCreator = (type) => (payload) => {
  return {
    type,
    payload,
  };
};
