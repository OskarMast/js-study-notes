console.log('--------------------- instanceof -------------------')
function Player(name) {
  this.name = name
}
const kyrie = new Player('kyrie')
console.log(kyrie)
console.log(kyrie instanceof Player)  // true
console.log(kyrie instanceof Object)  // true

/* Player.prototype = {
  skill() {
    console.log('crossover')
  }
} */
console.log(kyrie instanceof Player)  // false
console.log(kyrie instanceof Object)  // true

// --------- 封装一下 instanceof --------
function checkInstance(instance, constructor) {
  if(typeof instance == null) return false
  if(typeof instance !== 'object' && typeof instance !== 'function') return false
  let a = instance
  while(a){
    if(Object.getPrototypeOf(a) === constructor.prototype) {
      return true
    }else{
      a = Object.getPrototypeOf(a)
    }
  }
  return false
}

console.log(checkInstance(kyrie, Player)) // true
console.log(checkInstance(kyrie, Object)) // true

console.log('123' instanceof Object)  // false
console.log(new String(123) instanceof Object)  // true
console.log(123 instanceof Number)  // false
console.log(true instanceof Boolean)  // false

console.log(new Number(123) instanceof Number)  // true
console.log(new Boolean(false) instanceof Boolean)  // true


function is_instance_of(instance, constructor) {
  if(instance == null) return false
  if(typeof instance !== 'object' && typeof constructor !== 'function') return false
  let proto = instance
  if(Object.getPrototypeOf(proto) === constructor.prototype) {
    return true
  } else {
    proto = Object.getPrototypeOf(proto)
  }
  return false
}

console.log( Object instanceof Function)  // true
console.log( Function instanceof Object)  // true

// ----------------------------- 假阴性和假阳性 --------------------------
const isObject = (val) => val instanceof Object
console.log(isObject(Object.prototype))     // false
console.log(isObject(Object.create(null)))  // false

const isObject_2 = (value) => typeof value === 'object'
console.log(isObject_2(null), isObject_2({name: 'kyrie'}), isObject_2(new Map([['name', 'kyrie'], ['age', 30]])))
// true true true


// -------------- Object -----------------------
console.log(Object(null), Object(undefined))  // {}, {}

const player = {name: 'kyrie'}
console.log(Object(player) === player)  // true

console.log(Object(1))  // Number {1}
