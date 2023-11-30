
const HorseView = 
require("horseview");
const horseView =
new HorseView(process.env.REACT_APP_HORSEVIEW,
{ pbkdf2Iterations: parseFloat(process.env.REACT_APP_ITR), 
saltLength: parseFloat(process.env.REACT_APP_SALT) });
const useHorseView = () => {return horseView.decrypt}
export default useHorseView;