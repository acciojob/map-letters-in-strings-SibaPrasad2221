//your JS code here. If required.
const mapString = str => {
   const map = {};
   for(let i = 0; i < str.length; i++){
      if(map.hasOwnProperty(str[i])){
         map[str[i]] = map[str[i]].concat(i);
      }else{
         map[str[i]] = [i];
      };
   };
   return map;
};
