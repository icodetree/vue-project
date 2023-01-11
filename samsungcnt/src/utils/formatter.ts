function thousandsCommaFormatter(val: string) {
  console.log("===>",val);
  let str = String(val).split(".");
  let setFormatterNum;
  try {
    // 입력 숫자가 0일경우
    if(parseInt(str[0].replace(/,/g, '')) === 0){
      str[0] = '0'
    }

    if(str.length === 1){
      setFormatterNum = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }else{
      setFormatterNum = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + str[1]
    }

    return setFormatterNum;
  } catch (e) {
    return val;
  }
}

function phoneFormatter(num: string) {
  let setFormatterNum;
  try {
    if (num.length >= 11) {
      setFormatterNum = num.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g, '');
      return setFormatterNum.replace(/([0-9]{3})([0-9]{4})([0-9]{4})$/, '$1-$2-$3');
    } else {
      setFormatterNum = num
      return setFormatterNum.replace(/([0-9]{3})([0-9]{3})([0-9]{4})$/, '$1-$2-$3');
    }
  } catch (e) {
    return num;
  }
}


function specialCharactersRemove(val: string) {
  try {
    return val.replace(/[^0-9]/g,'')
  } catch (e) {
    return val;
  }
}

function specialCharactersRemoveWithoutDot(val: string) {
  try {
    val = val.replace(/[^0-9.]/g,'')
    let str = val.split(".");
    if(str[1].length > 5){
      str[1] = str[1].substring(0, 5)
    }
    val = str[0] + '.' + str[1]

    return val
  } catch (e) {
    return val;
  }
}


export {
  thousandsCommaFormatter,
  phoneFormatter,
  specialCharactersRemove,
  specialCharactersRemoveWithoutDot
}
