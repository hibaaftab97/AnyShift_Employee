import {Platform} from 'react-native';

export const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const getKits = () => {
  const arr=['12','24','36','60','72','84','96','108','120','15','30','45','60','75','90','105','135','150']
  return arr;
};

export const getUnits = () => {
  const arr=['Objective','Theory']
  return arr;
};

export const getChapter = () => {
  const arr=['Objective','Theory']
  return arr;
};