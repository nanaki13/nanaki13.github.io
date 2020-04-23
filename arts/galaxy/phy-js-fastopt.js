let TokenPlayLoad;
(function(){
'use strict';
const $linkingInfo = Object.freeze({
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.0.0",
  "fileLevelThis": this
});
const $imul = Math.imul;
const $fround = Math.fround;
const $clz32 = Math.clz32;
let $L0;
function $propertyName(obj) {
  for (const prop in obj) {
    return prop
  }
}
class $Char {
  constructor(c) {
    this.c = c
  };
  toString() {
    return String.fromCharCode(this.c)
  };
}
function $throwClassCastException(instance, classFullName) {
  throw $ct_Lorg_scalajs_linker_runtime_UndefinedBehaviorError__jl_Throwable__(new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(), $ct_jl_ClassCastException__T__(new $c_jl_ClassCastException(), ((instance + " is not an instance of ") + classFullName)))
}
function $throwArrayCastException(instance, classArrayEncodedName, depth) {
  while ((--depth)) {
    classArrayEncodedName = ("[" + classArrayEncodedName)
  };
  $throwClassCastException(instance, classArrayEncodedName)
}
function $throwArrayIndexOutOfBoundsException(i) {
  throw $ct_Lorg_scalajs_linker_runtime_UndefinedBehaviorError__jl_Throwable__(new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(), $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((i === null) ? null : ("" + i))))
}
function $noIsInstance(instance) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $makeNativeArrayWrapper(arrayClassData, nativeArray) {
  return new arrayClassData.constr(nativeArray)
}
function $newArrayObject(arrayClassData, lengths) {
  return $newArrayObjectInternal(arrayClassData, lengths, 0)
}
function $newArrayObjectInternal(arrayClassData, lengths, lengthIndex) {
  const result = new arrayClassData.constr(lengths[lengthIndex]);
  if ((lengthIndex < (lengths.length - 1))) {
    const subArrayClassData = arrayClassData.componentData;
    const subLengthIndex = (lengthIndex + 1);
    const underlying = result.u;
    for (let i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, lengths, subLengthIndex)
    }
  };
  return result
}
function $objectGetClass(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      const v = (instance | 0);
      if ((v === instance)) {
        if ($isByte(v)) {
          return $d_jl_Byte.getClassOf()
        } else if ($isShort(v)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else {
        return $d_jl_Float.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ((instance instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((instance instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $dp_getClass__jl_Class(instance) {
  return $objectGetClass(instance)
}
function $dp_clone__O(instance) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.clone__O()
  } else {
    throw $ct_jl_CloneNotSupportedException__(new $c_jl_CloneNotSupportedException())
  }
}
function $dp_notify__V(instance) {
  if ((instance === null)) {
    instance.notify__V()
  }
}
function $dp_notifyAll__V(instance) {
  if ((instance === null)) {
    instance.notifyAll__V()
  }
}
function $dp_finalize__V(instance) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    instance.finalize__V()
  }
}
function $dp_equals__O__Z(instance, rhs) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.equals__O__Z(rhs)
  } else if (((typeof instance) === "number")) {
    return $f_jl_Double__equals__O__Z(instance, rhs)
  } else if ((instance instanceof $Char)) {
    return $f_jl_Character__equals__O__Z(instance, rhs)
  } else {
    return (instance === rhs)
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance)
      } else {
        return $systemIdentityHashCode(instance)
      }
    }
  }
}
function $dp_compareTo__O__I(instance, rhs) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__compareTo__O__I(instance, rhs)
    }
    case "number": {
      return $f_jl_Double__compareTo__O__I(instance, rhs)
    }
    case "boolean": {
      return $f_jl_Boolean__compareTo__O__I(instance, rhs)
    }
    default: {
      if ((instance instanceof $Char)) {
        return $f_jl_Character__compareTo__O__I(instance, rhs)
      } else {
        return instance.compareTo__O__I(rhs)
      }
    }
  }
}
function $dp_length__I(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__length__I(instance)
  } else {
    return instance.length__I()
  }
}
function $dp_charAt__I__C(instance, index) {
  if (((typeof instance) === "string")) {
    return $f_T__charAt__I__C(instance, index)
  } else {
    return instance.charAt__I__C(index)
  }
}
function $dp_subSequence__I__I__jl_CharSequence(instance, start, end) {
  if (((typeof instance) === "string")) {
    return $f_T__subSequence__I__I__jl_CharSequence(instance, start, end)
  } else {
    return instance.subSequence__I__I__jl_CharSequence(start, end)
  }
}
function $dp_byteValue__B(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__byteValue__B(instance)
  } else {
    return instance.byteValue__B()
  }
}
function $dp_shortValue__S(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__shortValue__S(instance)
  } else {
    return instance.shortValue__S()
  }
}
function $dp_intValue__I(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__intValue__I(instance)
  } else {
    return instance.intValue__I()
  }
}
function $dp_longValue__J(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__longValue__J(instance)
  } else {
    return instance.longValue__J()
  }
}
function $dp_floatValue__F(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__floatValue__F(instance)
  } else {
    return instance.floatValue__F()
  }
}
function $dp_doubleValue__D(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__doubleValue__D(instance)
  } else {
    return instance.doubleValue__D()
  }
}
function $intDiv(x, y) {
  if ((y === 0)) {
    throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
  } else {
    return ((x / y) | 0)
  }
}
function $intMod(x, y) {
  if ((y === 0)) {
    throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
  } else {
    return ((x % y) | 0)
  }
}
function $doubleToInt(x) {
  return ((x > 2147483647) ? 2147483647 : ((x < (-2147483648)) ? (-2147483648) : (x | 0)))
}
function $newJSObjectWithVarargs(ctor, args) {
  const instance = Object.create(ctor.prototype);
  const result = ctor.apply(instance, args);
  switch ((typeof result)) {
    case "string":
    case "number":
    case "boolean":
    case "undefined":
    case "symbol": {
      return instance
    }
    default: {
      return ((result === null) ? instance : result)
    }
  }
}
function $resolveSuperRef(superClass, propName) {
  const getPrototypeOf = Object.getPrototyeOf;
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  let superProto = superClass.prototype;
  while ((superProto !== null)) {
    const desc = getOwnPropertyDescriptor(superProto, propName);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(superClass, self, propName) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(self) : getter.value)
  }
}
function $superSet(superClass, self, propName, value) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(self, value);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + propName) + "'."))
}
function $systemArraycopy(src, srcPos, dest, destPos, length) {
  const srcu = src.u;
  const destu = dest.u;
  if ((((((srcPos < 0) || (destPos < 0)) || (length < 0)) || (srcPos > ((srcu.length - length) | 0))) || (destPos > ((destu.length - length) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  };
  if ((((srcu !== destu) || (destPos < srcPos)) || (((srcPos + length) | 0) < destPos))) {
    for (let i = 0; (i < length); i = ((i + 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  } else {
    for (let i = ((length - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  }
}
let $lastIDHash = 0;
const $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "undefined": {
      return $dp_hashCode__I(obj)
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        let hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(v) {
  return ((((typeof v) === "number") && (((v << 24) >> 24) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isShort(v) {
  return ((((typeof v) === "number") && (((v << 16) >> 16) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isInt(v) {
  return ((((typeof v) === "number") && ((v | 0) === v)) && ((1 / v) !== (1 / (-0))))
}
function $bC(c) {
  return new $Char(c)
}
const $bC0 = $bC(0);
function $uV(v) {
  return (((v === (void 0)) || (v === null)) ? (void 0) : $throwClassCastException(v, "java.lang.Void"))
}
function $uZ(v) {
  return ((((typeof v) === "boolean") || (v === null)) ? (!(!v)) : $throwClassCastException(v, "java.lang.Boolean"))
}
function $uC(v) {
  return (((v instanceof $Char) || (v === null)) ? ((v === null) ? 0 : v.c) : $throwClassCastException(v, "java.lang.Character"))
}
function $uB(v) {
  return (($isByte(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Byte"))
}
function $uS(v) {
  return (($isShort(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Short"))
}
function $uI(v) {
  return (($isInt(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Integer"))
}
function $uJ(v) {
  return (((v instanceof $c_RTLong) || (v === null)) ? ((v === null) ? $L0 : v) : $throwClassCastException(v, "java.lang.Long"))
}
function $uF(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Float"))
}
function $uD(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Double"))
}
function $uT(v) {
  return ((((typeof v) === "string") || (v === null)) ? ((v === null) ? "" : v) : $throwClassCastException(v, "java.lang.String"))
}
function $byteArray2TypedArray(value) {
  return new Int8Array(value.u)
}
function $typedArray2ByteArray(value) {
  return new ($d_B.getArrayOf().constr)(new Int8Array(value))
}
function $shortArray2TypedArray(value) {
  return new Int16Array(value.u)
}
function $typedArray2ShortArray(value) {
  return new ($d_S.getArrayOf().constr)(new Int16Array(value))
}
function $charArray2TypedArray(value) {
  return new Uint16Array(value.u)
}
function $typedArray2CharArray(value) {
  return new ($d_C.getArrayOf().constr)(new Uint16Array(value))
}
function $intArray2TypedArray(value) {
  return new Int32Array(value.u)
}
function $typedArray2IntArray(value) {
  return new ($d_I.getArrayOf().constr)(new Int32Array(value))
}
function $floatArray2TypedArray(value) {
  return new Float32Array(value.u)
}
function $typedArray2FloatArray(value) {
  return new ($d_F.getArrayOf().constr)(new Float32Array(value))
}
function $doubleArray2TypedArray(value) {
  return new Float64Array(value.u)
}
function $typedArray2DoubleArray(value) {
  return new ($d_D.getArrayOf().constr)(new Float64Array(value))
}
class $TypeData {
  constructor() {
    this.constr = (void 0);
    this.parentData = (void 0);
    this.ancestors = null;
    this.componentData = null;
    this.arrayBase = null;
    this.arrayDepth = 0;
    this.zero = null;
    this.arrayEncodedName = "";
    this._classOf = (void 0);
    this._arrayOf = (void 0);
    this.isArrayOf = (void 0);
    this.name = "";
    this.isPrimitive = false;
    this.isInterface = false;
    this.isArrayClass = false;
    this.isJSClass = false;
    this.isInstance = (void 0)
  };
  initPrim(zero, arrayEncodedName, displayName, isArrayOf) {
    this.ancestors = {};
    this.zero = zero;
    this.arrayEncodedName = arrayEncodedName;
    this.isArrayOf = isArrayOf;
    this.name = displayName;
    this.isPrimitive = true;
    this.isInstance = (function(obj) {
      return false
    });
    return this
  };
  initClass(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance, isArrayOf) {
    const internalName = $propertyName(internalNameObj);
    this.parentData = parentData;
    this.ancestors = ancestors;
    this.arrayEncodedName = (("L" + fullName) + ";");
    this.isArrayOf = (isArrayOf || (function(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors[internalName])))
    }));
    this.isJSType = (!(!isJSType));
    this.name = fullName;
    this.isInterface = isInterface;
    this.isInstance = (isInstance || (function(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))
    }));
    return this
  };
  initArray(componentData) {
    const componentZero = ((componentData.zero === "longZero") ? $L0 : componentData.zero);
    class ArrayClass extends $c_O {
      constructor(arg) {
        super();
        if (((typeof arg) === "number")) {
          this.u = new Array(arg);
          for (let i = 0; (i < arg); (i++)) {
            this.u[i] = componentZero
          }
        } else {
          this.u = arg
        }
      };
      get(i) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOfBoundsException(i)
        };
        return this.u[i]
      };
      set(i, v) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOfBoundsException(i)
        };
        this.u[i] = v
      };
      clone__O() {
        return new ArrayClass(((this.u instanceof Array) ? this.u.slice(0) : new this.u.constructor(this.u)))
      };
    }
    ArrayClass.prototype.$classData = this;
    const encodedName = ("[" + componentData.arrayEncodedName);
    const componentBase = (componentData.arrayBase || componentData);
    const arrayDepth = (componentData.arrayDepth + 1);
    this.constr = ArrayClass;
    this.parentData = $d_O;
    this.ancestors = {
      O: 1,
      jl_Cloneable: 1,
      Ljava_io_Serializable: 1
    };
    this.componentData = componentData;
    this.arrayBase = componentBase;
    this.arrayDepth = arrayDepth;
    this.arrayEncodedName = encodedName;
    this.name = encodedName;
    this.isArrayClass = true;
    this.isInstance = (function(obj) {
      return componentBase.isArrayOf(obj, arrayDepth)
    });
    return this
  };
  getClassOf() {
    if ((!this._classOf)) {
      this._classOf = new $c_jl_Class(this)
    };
    return this._classOf
  };
  getArrayOf() {
    if ((!this._arrayOf)) {
      this._arrayOf = new $TypeData().initArray(this)
    };
    return this._arrayOf
  };
  "isAssignableFrom"(that) {
    if ((this.isPrimitive || that.isPrimitive)) {
      return (this === that)
    } else {
      let thatFakeInstance;
      if ((that === $d_T)) {
        thatFakeInstance = ""
      } else if ((that === $d_jl_Boolean)) {
        thatFakeInstance = false
      } else if ((((((that === $d_jl_Byte) || (that === $d_jl_Short)) || (that === $d_jl_Integer)) || (that === $d_jl_Float)) || (that === $d_jl_Double))) {
        thatFakeInstance = 0
      } else if ((that === $d_jl_Long)) {
        thatFakeInstance = $L0
      } else if ((that === $d_jl_Character)) {
        thatFakeInstance = $bC0
      } else if ((that === $d_jl_Void)) {
        thatFakeInstance = (void 0)
      } else {
        thatFakeInstance = {
          $classData: that
        }
      };
      return this.isInstance(thatFakeInstance)
    }
  };
  "checkCast"(obj) {
    if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
      $throwClassCastException(obj, this.name)
    }
  };
  "getSuperclass"() {
    return (this.parentData ? this.parentData.getClassOf() : null)
  };
  "getComponentType"() {
    return (this.componentData ? this.componentData.getClassOf() : null)
  };
  "newArrayOfThisClass"(lengths) {
    let arrayClassData = this;
    for (let i = 0; (i < lengths.length); (i++)) {
      arrayClassData = arrayClassData.getArrayOf()
    };
    return $newArrayObject(arrayClassData, lengths)
  };
}
function $isArrayOf_V(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_V))))
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_V(obj, depth) {
  if (($isArrayOf_V(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "V", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
const $d_V = new $TypeData().initPrim((void 0), "V", "void", $isArrayOf_V);
const $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $isArrayOf_Z);
const $d_C = new $TypeData().initPrim(0, "C", "char", $isArrayOf_C);
const $d_B = new $TypeData().initPrim(0, "B", "byte", $isArrayOf_B);
const $d_S = new $TypeData().initPrim(0, "S", "short", $isArrayOf_S);
const $d_I = new $TypeData().initPrim(0, "I", "int", $isArrayOf_I);
const $d_J = new $TypeData().initPrim("longZero", "J", "long", $isArrayOf_J);
const $d_F = new $TypeData().initPrim(0.0, "F", "float", $isArrayOf_F);
const $d_D = new $TypeData().initPrim(0.0, "D", "double", $isArrayOf_D);
const $ct_O__ = (function($thiz) {
  return $thiz
});
class $c_O {
  hashCode__I() {
    return $systemIdentityHashCode(this)
  };
  equals__O__Z(that) {
    return (this === that)
  };
  toString__T() {
    const $$x1 = $objectGetClass(this).getName__T();
    const i = this.hashCode__I();
    return (($$x1 + "@") + $as_T($uD((i >>> 0)).toString(16)))
  };
  "toString"() {
    return this.toString__T()
  };
}
function $is_O(obj) {
  return (obj !== null)
}
function $as_O(obj) {
  return obj
}
function $isArrayOf_O(obj, depth) {
  const data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    const arrayDepth = (data.arrayDepth || 0);
    return ((!(arrayDepth < depth)) && ((arrayDepth > depth) || (!data.arrayBase.isPrimitive)))
  }
}
function $asArrayOf_O(obj, depth) {
  return (($isArrayOf_O(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Object;", depth))
}
const $d_O = new $TypeData().initClass({
  O: 0
}, false, "java.lang.Object", {
  O: 1
}, (void 0), (void 0), $is_O, $isArrayOf_O);
$c_O.prototype.$classData = $d_O;
class $c_Lbon_jo_app_TokenPlayLoad$ extends $c_O {
}
const $d_Lbon_jo_app_TokenPlayLoad$ = new $TypeData().initClass({
  Lbon_jo_app_TokenPlayLoad$: 0
}, false, "bon.jo.app.TokenPlayLoad$", {
  Lbon_jo_app_TokenPlayLoad$: 1,
  O: 1
});
$c_Lbon_jo_app_TokenPlayLoad$.prototype.$classData = $d_Lbon_jo_app_TokenPlayLoad$;
let $n_Lbon_jo_app_TokenPlayLoad$ = (void 0);
function $m_Lbon_jo_app_TokenPlayLoad$() {
  if ((!$n_Lbon_jo_app_TokenPlayLoad$)) {
    $n_Lbon_jo_app_TokenPlayLoad$ = new $c_Lbon_jo_app_TokenPlayLoad$()
  };
  return $n_Lbon_jo_app_TokenPlayLoad$
}
class $c_Lbon_jo_html_DomShell$$$ extends $c_O {
  apply__T__Lorg_scalajs_dom_raw_Element(id) {
    const ret = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(id);
    return ((ret !== null) ? ret : null)
  };
}
const $d_Lbon_jo_html_DomShell$$$ = new $TypeData().initClass({
  Lbon_jo_html_DomShell$$$: 0
}, false, "bon.jo.html.DomShell$$$", {
  Lbon_jo_html_DomShell$$$: 1,
  O: 1
});
$c_Lbon_jo_html_DomShell$$$.prototype.$classData = $d_Lbon_jo_html_DomShell$$$;
let $n_Lbon_jo_html_DomShell$$$ = (void 0);
function $m_Lbon_jo_html_DomShell$$$() {
  if ((!$n_Lbon_jo_html_DomShell$$$)) {
    $n_Lbon_jo_html_DomShell$$$ = new $c_Lbon_jo_html_DomShell$$$()
  };
  return $n_Lbon_jo_html_DomShell$$$
}
class $c_Lbon_jo_html_DomShell$$c$ extends $c_O {
  withInner__T__Lorg_scalajs_dom_raw_HTMLDivElement(html) {
    const ret = $m_Lbon_jo_html_DomShell$$c$().apply__Lorg_scalajs_dom_raw_HTMLDivElement();
    ret.innerHTML = html;
    return ret
  };
  apply__Lorg_scalajs_dom_raw_HTMLDivElement() {
    return $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().createElement("div")
  };
  apply__T__Lorg_scalajs_dom_raw_Element(html) {
    return $m_Lbon_jo_html_DomShell$$c$().withInner__T__Lorg_scalajs_dom_raw_HTMLDivElement(html).children[0]
  };
}
const $d_Lbon_jo_html_DomShell$$c$ = new $TypeData().initClass({
  Lbon_jo_html_DomShell$$c$: 0
}, false, "bon.jo.html.DomShell$$c$", {
  Lbon_jo_html_DomShell$$c$: 1,
  O: 1
});
$c_Lbon_jo_html_DomShell$$c$.prototype.$classData = $d_Lbon_jo_html_DomShell$$c$;
let $n_Lbon_jo_html_DomShell$$c$ = (void 0);
function $m_Lbon_jo_html_DomShell$$c$() {
  if ((!$n_Lbon_jo_html_DomShell$$c$)) {
    $n_Lbon_jo_html_DomShell$$c$ = new $c_Lbon_jo_html_DomShell$$c$()
  };
  return $n_Lbon_jo_html_DomShell$$c$
}
function $is_Lbon_jo_html_IdView(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lbon_jo_html_IdView)))
}
function $as_Lbon_jo_html_IdView(obj) {
  return (($is_Lbon_jo_html_IdView(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "bon.jo.html.IdView"))
}
function $isArrayOf_Lbon_jo_html_IdView(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lbon_jo_html_IdView)))
}
function $asArrayOf_Lbon_jo_html_IdView(obj, depth) {
  return (($isArrayOf_Lbon_jo_html_IdView(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lbon.jo.html.IdView;", depth))
}
const $f_Lbon_jo_html_InDom__me__Lorg_scalajs_dom_raw_HTMLElement = (function($thiz) {
  return $m_Lbon_jo_html_DomShell$$$().apply__T__Lorg_scalajs_dom_raw_Element($as_Lbon_jo_html_IdView($thiz).id__T())
});
class $c_Lbon_jo_phy_Phy$ extends $c_O {
  constructor() {
    super();
    this.Lbon_jo_phy_Phy$__f_pfact = null;
    this.Lbon_jo_phy_Phy$__f_vfact = null;
    this.Lbon_jo_phy_Phy$__f_afact = null;
    this.Lbon_jo_phy_Phy$__f_pdfact = null;
    $n_Lbon_jo_phy_Phy$ = this;
    this.Lbon_jo_phy_Phy$__f_pfact = new $c_Lbon_jo_phy_Phy$$$Lambda$1(((this$1) => ((x$1$2, x$2$2) => {
      const x$1 = $uF(x$1$2);
      const x$2 = $uF(x$2$2);
      return new $c_Lbon_jo_phy_Phy$P(x$1, x$2, 0.0)
    }))(this));
    this.Lbon_jo_phy_Phy$__f_vfact = new $c_Lbon_jo_phy_Phy$$$Lambda$2(((this$2) => ((x$3$2, x$4$2) => {
      const x$3 = $uF(x$3$2);
      const x$4 = $uF(x$4$2);
      return new $c_Lbon_jo_phy_Phy$V(x$3, x$4, 0.0)
    }))(this));
    this.Lbon_jo_phy_Phy$__f_afact = new $c_Lbon_jo_phy_Phy$$$Lambda$3(((this$3) => ((x$5$2, x$6$2) => {
      const x$5 = $uF(x$5$2);
      const x$6 = $uF(x$6$2);
      return new $c_Lbon_jo_phy_Phy$A(x$5, x$6, 0.0)
    }))(this));
    this.Lbon_jo_phy_Phy$__f_pdfact = new $c_Lbon_jo_phy_Phy$$$Lambda$4(((this$4) => ((a$2, b$2) => {
      const a = $uF(a$2);
      const b = $uF(b$2);
      return $ct_Lbon_jo_phy_Phy$PointDynamicImpl__Lbon_jo_phy_Phy$P__Lbon_jo_phy_Phy$V__Lbon_jo_phy_Phy$A__(new $c_Lbon_jo_phy_Phy$PointDynamicImpl(), new $c_Lbon_jo_phy_Phy$P(a, b, 0.0), new $c_Lbon_jo_phy_Phy$V(0.0, 0.0, 0.0), new $c_Lbon_jo_phy_Phy$A(0.0, 0.0, 0.0))
    }))(this))
  };
}
const $d_Lbon_jo_phy_Phy$ = new $TypeData().initClass({
  Lbon_jo_phy_Phy$: 0
}, false, "bon.jo.phy.Phy$", {
  Lbon_jo_phy_Phy$: 1,
  O: 1
});
$c_Lbon_jo_phy_Phy$.prototype.$classData = $d_Lbon_jo_phy_Phy$;
let $n_Lbon_jo_phy_Phy$ = (void 0);
function $m_Lbon_jo_phy_Phy$() {
  if ((!$n_Lbon_jo_phy_Phy$)) {
    $n_Lbon_jo_phy_Phy$ = new $c_Lbon_jo_phy_Phy$()
  };
  return $n_Lbon_jo_phy_Phy$
}
const $s_Lbon_jo_phy_Test__main__AT__V = (function(args) {
  const this$1 = $m_Lbon_jo_phy_Test$();
  $f_s_App__main__AT__V(this$1, args)
});
class $c_jl_Class extends $c_O {
  constructor(data0) {
    super();
    this.jl_Class__f_data = null;
    this.jl_Class__f_data = data0
  };
  toString__T() {
    return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
  };
  isAssignableFrom__jl_Class__Z(that) {
    return $uZ(this.jl_Class__f_data.isAssignableFrom(that.jl_Class__f_data))
  };
  isInterface__Z() {
    return $uZ(this.jl_Class__f_data.isInterface)
  };
  isArray__Z() {
    return $uZ(this.jl_Class__f_data.isArrayClass)
  };
  isPrimitive__Z() {
    return $uZ(this.jl_Class__f_data.isPrimitive)
  };
  getName__T() {
    return $as_T(this.jl_Class__f_data.name)
  };
  getSimpleName__T() {
    const name = $as_T(this.jl_Class__f_data.name);
    let idx = (((-1) + $uI(name.length)) | 0);
    while (true) {
      let $$x1;
      if ((idx >= 0)) {
        const index = idx;
        $$x1 = ((65535 & $uI(name.charCodeAt(index))) === 36)
      } else {
        $$x1 = false
      };
      if ($$x1) {
        idx = (((-1) + idx) | 0)
      } else {
        break
      }
    };
    while (true) {
      let $$x2;
      if ((idx >= 0)) {
        const index$1 = idx;
        const currChar = (65535 & $uI(name.charCodeAt(index$1)));
        $$x2 = ((currChar !== 46) && (currChar !== 36))
      } else {
        $$x2 = false
      };
      if ($$x2) {
        idx = (((-1) + idx) | 0)
      } else {
        break
      }
    };
    const beginIndex = ((1 + idx) | 0);
    return $as_T(name.substring(beginIndex))
  };
  getComponentType__jl_Class() {
    return $as_jl_Class(this.jl_Class__f_data.getComponentType())
  };
  newArrayOfThisClass__O__O(dimensions) {
    return this.jl_Class__f_data.newArrayOfThisClass(dimensions)
  };
}
function $as_jl_Class(obj) {
  return (((obj instanceof $c_jl_Class) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Class"))
}
function $isArrayOf_jl_Class(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Class)))
}
function $asArrayOf_jl_Class(obj, depth) {
  return (($isArrayOf_jl_Class(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Class;", depth))
}
const $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
class $c_jl_FloatingPointBits$ extends $c_O {
  constructor() {
    super();
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
    this.jl_FloatingPointBits$__f_arrayBuffer = null;
    this.jl_FloatingPointBits$__f_int32Array = null;
    this.jl_FloatingPointBits$__f_float32Array = null;
    this.jl_FloatingPointBits$__f_float64Array = null;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
    this.jl_FloatingPointBits$__f_highOffset = 0;
    this.jl_FloatingPointBits$__f_lowOffset = 0;
    $n_jl_FloatingPointBits$ = this;
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
    this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
    this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float32Array = new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
    this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
    this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
    this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0)
  };
  numberHashCode__D__I(value) {
    const iv = $uI((value | 0));
    if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
      return iv
    } else {
      const t = this.doubleToLongBits__D__J(value);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return (lo ^ hi)
    }
  };
  doubleToLongBits__D__J(value) {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    const value$1 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_highOffset]);
    const value$2 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_lowOffset]);
    return new $c_RTLong(value$2, value$1)
  };
}
const $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
let $n_jl_FloatingPointBits$ = (void 0);
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
const $p_jl_System$SystemProperties$__loadSystemProperties__O = (function($thiz) {
  const result = {};
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  const value = $as_T($linkingInfo.linkerVersion);
  result["java.vm.version"] = value;
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result
});
class $c_jl_System$SystemProperties$ extends $c_O {
  constructor() {
    super();
    this.jl_System$SystemProperties$__f_dict = null;
    this.jl_System$SystemProperties$__f_properties = null;
    $n_jl_System$SystemProperties$ = this;
    this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
    this.jl_System$SystemProperties$__f_properties = null
  };
  getProperty__T__T__T(key, default$1) {
    return ((this.jl_System$SystemProperties$__f_dict !== null) ? $as_T($m_jl_Utils$().dictGetOrElse__O__T__O__O(this.jl_System$SystemProperties$__f_dict, key, default$1)) : this.jl_System$SystemProperties$__f_properties.getProperty__T__T__T(key, default$1))
  };
}
const $d_jl_System$SystemProperties$ = new $TypeData().initClass({
  jl_System$SystemProperties$: 0
}, false, "java.lang.System$SystemProperties$", {
  jl_System$SystemProperties$: 1,
  O: 1
});
$c_jl_System$SystemProperties$.prototype.$classData = $d_jl_System$SystemProperties$;
let $n_jl_System$SystemProperties$ = (void 0);
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$()
  };
  return $n_jl_System$SystemProperties$
}
class $c_jl_Utils$ extends $c_O {
  dictGetOrElse__O__T__O__O(dict, key, default$1) {
    return ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1)
  };
}
const $d_jl_Utils$ = new $TypeData().initClass({
  jl_Utils$: 0
}, false, "java.lang.Utils$", {
  jl_Utils$: 1,
  O: 1
});
$c_jl_Utils$.prototype.$classData = $d_jl_Utils$;
let $n_jl_Utils$ = (void 0);
function $m_jl_Utils$() {
  if ((!$n_jl_Utils$)) {
    $n_jl_Utils$ = new $c_jl_Utils$()
  };
  return $n_jl_Utils$
}
class $c_jl_Utils$Cache$ extends $c_O {
  constructor() {
    super();
    this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
    $n_jl_Utils$Cache$ = this;
    this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty
  };
}
const $d_jl_Utils$Cache$ = new $TypeData().initClass({
  jl_Utils$Cache$: 0
}, false, "java.lang.Utils$Cache$", {
  jl_Utils$Cache$: 1,
  O: 1
});
$c_jl_Utils$Cache$.prototype.$classData = $d_jl_Utils$Cache$;
let $n_jl_Utils$Cache$ = (void 0);
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$()
  };
  return $n_jl_Utils$Cache$
}
const $f_jl_Void__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_jl_Void__hashCode__I = (function($thiz) {
  return 0
});
const $f_jl_Void__toString__T = (function($thiz) {
  return "undefined"
});
function $as_jl_Void(obj) {
  return (((obj === (void 0)) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Void"))
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)))
}
function $asArrayOf_jl_Void(obj, depth) {
  return (($isArrayOf_jl_Void(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Void;", depth))
}
const $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
class $c_jl_reflect_Array$ extends $c_O {
  newInstance__jl_Class__I__O(componentType, length) {
    return componentType.newArrayOfThisClass__O__O([length])
  };
  getLength__O__I(array) {
    if ($isArrayOf_O(array, 1)) {
      const x2 = $asArrayOf_O(array, 1);
      return x2.u.length
    } else if ($isArrayOf_Z(array, 1)) {
      const x3 = $asArrayOf_Z(array, 1);
      return x3.u.length
    } else if ($isArrayOf_C(array, 1)) {
      const x4 = $asArrayOf_C(array, 1);
      return x4.u.length
    } else if ($isArrayOf_B(array, 1)) {
      const x5 = $asArrayOf_B(array, 1);
      return x5.u.length
    } else if ($isArrayOf_S(array, 1)) {
      const x6 = $asArrayOf_S(array, 1);
      return x6.u.length
    } else if ($isArrayOf_I(array, 1)) {
      const x7 = $asArrayOf_I(array, 1);
      return x7.u.length
    } else if ($isArrayOf_J(array, 1)) {
      const x8 = $asArrayOf_J(array, 1);
      return x8.u.length
    } else if ($isArrayOf_F(array, 1)) {
      const x9 = $asArrayOf_F(array, 1);
      return x9.u.length
    } else if ($isArrayOf_D(array, 1)) {
      const x10 = $asArrayOf_D(array, 1);
      return x10.u.length
    } else {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch")
    }
  };
}
const $d_jl_reflect_Array$ = new $TypeData().initClass({
  jl_reflect_Array$: 0
}, false, "java.lang.reflect.Array$", {
  jl_reflect_Array$: 1,
  O: 1
});
$c_jl_reflect_Array$.prototype.$classData = $d_jl_reflect_Array$;
let $n_jl_reflect_Array$ = (void 0);
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$()
  };
  return $n_jl_reflect_Array$
}
class $c_ju_Arrays$ extends $c_O {
  binarySearch__AI__I__I(a, key) {
    let startIndex = 0;
    let endIndex = a.u.length;
    while (true) {
      if ((startIndex === endIndex)) {
        return (((-1) - startIndex) | 0)
      } else {
        const mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
        const elem = a.get(mid);
        if ((key < elem)) {
          endIndex = mid
        } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, elem)) {
          return mid
        } else {
          startIndex = ((1 + mid) | 0)
        }
      }
    }
  };
  equals__AI__AI__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  fill__AO__I__I__O__V(a, fromIndex, toIndex, value) {
    if ((fromIndex > toIndex)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"))
    };
    if ((fromIndex < 0)) {
      a.get(fromIndex)
    };
    if ((toIndex > 0)) {
      a.get((((-1) + toIndex) | 0))
    };
    let i = fromIndex;
    while ((i !== toIndex)) {
      a.set(i, value);
      i = ((1 + i) | 0)
    }
  };
  copyOf__AO__I__AO(original, newLength) {
    const tagT = $m_s_reflect_ClassTag$().apply__jl_Class__s_reflect_ClassTag($objectGetClass(original).getComponentType__jl_Class());
    if ((newLength < 0)) {
      throw new $c_jl_NegativeArraySizeException()
    };
    const b = original.u.length;
    const copyLength = ((newLength < b) ? newLength : b);
    const ret = tagT.newArray__I__O(newLength);
    $systemArraycopy(original, 0, ret, 0, copyLength);
    return $asArrayOf_O(ret, 1)
  };
}
const $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
let $n_ju_Arrays$ = (void 0);
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
function $is_ju_Formattable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.ju_Formattable)))
}
function $as_ju_Formattable(obj) {
  return (($is_ju_Formattable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.util.Formattable"))
}
function $isArrayOf_ju_Formattable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.ju_Formattable)))
}
function $asArrayOf_ju_Formattable(obj, depth) {
  return (($isArrayOf_ju_Formattable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.util.Formattable;", depth))
}
class $c_ju_Formatter$ extends $c_O {
  constructor() {
    super();
    this.ju_Formatter$__f_java$util$Formatter$$FormatSpecifier = null;
    $n_ju_Formatter$ = this;
    this.ju_Formatter$__f_java$util$Formatter$$FormatSpecifier = new RegExp("(?:(\\d+)\\$)?([-#+ 0,\\(<]*)(\\d+)?(?:\\.(\\d+))?[%A-Za-z]", "g")
  };
}
const $d_ju_Formatter$ = new $TypeData().initClass({
  ju_Formatter$: 0
}, false, "java.util.Formatter$", {
  ju_Formatter$: 1,
  O: 1
});
$c_ju_Formatter$.prototype.$classData = $d_ju_Formatter$;
let $n_ju_Formatter$ = (void 0);
function $m_ju_Formatter$() {
  if ((!$n_ju_Formatter$)) {
    $n_ju_Formatter$ = new $c_ju_Formatter$()
  };
  return $n_ju_Formatter$
}
const $p_Lorg_scalajs_dom_package$__window$lzycompute__Lorg_scalajs_dom_raw_Window = (function($thiz) {
  if (((33554432 & $thiz.Lorg_scalajs_dom_package$__f_bitmap$0) === 0)) {
    $thiz.Lorg_scalajs_dom_package$__f_window = window;
    $thiz.Lorg_scalajs_dom_package$__f_bitmap$0 = (33554432 | $thiz.Lorg_scalajs_dom_package$__f_bitmap$0)
  };
  return $thiz.Lorg_scalajs_dom_package$__f_window
});
const $p_Lorg_scalajs_dom_package$__document$lzycompute__Lorg_scalajs_dom_raw_HTMLDocument = (function($thiz) {
  if (((67108864 & $thiz.Lorg_scalajs_dom_package$__f_bitmap$0) === 0)) {
    $thiz.Lorg_scalajs_dom_package$__f_document = $thiz.window__Lorg_scalajs_dom_raw_Window().document;
    $thiz.Lorg_scalajs_dom_package$__f_bitmap$0 = (67108864 | $thiz.Lorg_scalajs_dom_package$__f_bitmap$0)
  };
  return $thiz.Lorg_scalajs_dom_package$__f_document
});
class $c_Lorg_scalajs_dom_package$ extends $c_O {
  constructor() {
    super();
    this.Lorg_scalajs_dom_package$__f_ApplicationCache = null;
    this.Lorg_scalajs_dom_package$__f_Blob = null;
    this.Lorg_scalajs_dom_package$__f_BlobPropertyBag = null;
    this.Lorg_scalajs_dom_package$__f_DOMException = null;
    this.Lorg_scalajs_dom_package$__f_Event = null;
    this.Lorg_scalajs_dom_package$__f_EventException = null;
    this.Lorg_scalajs_dom_package$__f_EventSource = null;
    this.Lorg_scalajs_dom_package$__f_FileReader = null;
    this.Lorg_scalajs_dom_package$__f_FormData = null;
    this.Lorg_scalajs_dom_package$__f_KeyboardEvent = null;
    this.Lorg_scalajs_dom_package$__f_MediaError = null;
    this.Lorg_scalajs_dom_package$__f_MutationObserverInit = null;
    this.Lorg_scalajs_dom_package$__f_Node = null;
    this.Lorg_scalajs_dom_package$__f_NodeFilter = null;
    this.Lorg_scalajs_dom_package$__f_PerformanceNavigation = null;
    this.Lorg_scalajs_dom_package$__f_PositionError = null;
    this.Lorg_scalajs_dom_package$__f_Range = null;
    this.Lorg_scalajs_dom_package$__f_TextEvent = null;
    this.Lorg_scalajs_dom_package$__f_TextTrack = null;
    this.Lorg_scalajs_dom_package$__f_URL = null;
    this.Lorg_scalajs_dom_package$__f_VisibilityState = null;
    this.Lorg_scalajs_dom_package$__f_WebSocket = null;
    this.Lorg_scalajs_dom_package$__f_WheelEvent = null;
    this.Lorg_scalajs_dom_package$__f_XMLHttpRequest = null;
    this.Lorg_scalajs_dom_package$__f_XPathResult = null;
    this.Lorg_scalajs_dom_package$__f_window = null;
    this.Lorg_scalajs_dom_package$__f_document = null;
    this.Lorg_scalajs_dom_package$__f_console = null;
    this.Lorg_scalajs_dom_package$__f_bitmap$0 = 0
  };
  window__Lorg_scalajs_dom_raw_Window() {
    return (((33554432 & this.Lorg_scalajs_dom_package$__f_bitmap$0) === 0) ? $p_Lorg_scalajs_dom_package$__window$lzycompute__Lorg_scalajs_dom_raw_Window(this) : this.Lorg_scalajs_dom_package$__f_window)
  };
  document__Lorg_scalajs_dom_raw_HTMLDocument() {
    return (((67108864 & this.Lorg_scalajs_dom_package$__f_bitmap$0) === 0) ? $p_Lorg_scalajs_dom_package$__document$lzycompute__Lorg_scalajs_dom_raw_HTMLDocument(this) : this.Lorg_scalajs_dom_package$__f_document)
  };
}
const $d_Lorg_scalajs_dom_package$ = new $TypeData().initClass({
  Lorg_scalajs_dom_package$: 0
}, false, "org.scalajs.dom.package$", {
  Lorg_scalajs_dom_package$: 1,
  O: 1
});
$c_Lorg_scalajs_dom_package$.prototype.$classData = $d_Lorg_scalajs_dom_package$;
let $n_Lorg_scalajs_dom_package$ = (void 0);
function $m_Lorg_scalajs_dom_package$() {
  if ((!$n_Lorg_scalajs_dom_package$)) {
    $n_Lorg_scalajs_dom_package$ = new $c_Lorg_scalajs_dom_package$()
  };
  return $n_Lorg_scalajs_dom_package$
}
class $c_s_Array$EmptyArrays$ extends $c_O {
  constructor() {
    super();
    this.s_Array$EmptyArrays$__f_emptyBooleanArray = null;
    this.s_Array$EmptyArrays$__f_emptyByteArray = null;
    this.s_Array$EmptyArrays$__f_emptyCharArray = null;
    this.s_Array$EmptyArrays$__f_emptyDoubleArray = null;
    this.s_Array$EmptyArrays$__f_emptyFloatArray = null;
    this.s_Array$EmptyArrays$__f_emptyIntArray = null;
    this.s_Array$EmptyArrays$__f_emptyLongArray = null;
    this.s_Array$EmptyArrays$__f_emptyShortArray = null;
    this.s_Array$EmptyArrays$__f_emptyObjectArray = null;
    $n_s_Array$EmptyArrays$ = this;
    this.s_Array$EmptyArrays$__f_emptyBooleanArray = $newArrayObject($d_Z.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyByteArray = $newArrayObject($d_B.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyCharArray = $newArrayObject($d_C.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyDoubleArray = $newArrayObject($d_D.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyFloatArray = $newArrayObject($d_F.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyIntArray = $newArrayObject($d_I.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyLongArray = $newArrayObject($d_J.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyShortArray = $newArrayObject($d_S.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyObjectArray = $newArrayObject($d_O.getArrayOf(), [0])
  };
}
const $d_s_Array$EmptyArrays$ = new $TypeData().initClass({
  s_Array$EmptyArrays$: 0
}, false, "scala.Array$EmptyArrays$", {
  s_Array$EmptyArrays$: 1,
  O: 1
});
$c_s_Array$EmptyArrays$.prototype.$classData = $d_s_Array$EmptyArrays$;
let $n_s_Array$EmptyArrays$ = (void 0);
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$()
  };
  return $n_s_Array$EmptyArrays$
}
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F0)))
}
function $as_F0(obj) {
  return (($is_F0(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function0"))
}
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F0)))
}
function $asArrayOf_F0(obj, depth) {
  return (($isArrayOf_F0(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function0;", depth))
}
class $c_s_LowPriorityImplicits2 extends $c_O {
}
class $c_sc_ArrayOps$ extends $c_O {
  last$extension__O__O(this$) {
    try {
      return $m_sr_ScalaRunTime$().array_apply__O__I__O(this$, (((-1) + $m_sr_ScalaRunTime$().array_length__O__I(this$)) | 0))
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "last of empty array")
      } else {
        throw e
      }
    }
  };
  copyToArray$extension__O__O__I__I__I(this$, xs, start, len) {
    const srcLen = $m_sr_ScalaRunTime$().array_length__O__I(this$);
    const destLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
    const x = ((len < srcLen) ? len : srcLen);
    const y = ((destLen - start) | 0);
    const x$1 = ((x < y) ? x : y);
    const copied = ((x$1 > 0) ? x$1 : 0);
    if ((copied > 0)) {
      $m_s_Array$().copy__O__I__O__I__I__V(this$, 0, xs, start, copied)
    };
    return copied
  };
}
const $d_sc_ArrayOps$ = new $TypeData().initClass({
  sc_ArrayOps$: 0
}, false, "scala.collection.ArrayOps$", {
  sc_ArrayOps$: 1,
  O: 1
});
$c_sc_ArrayOps$.prototype.$classData = $d_sc_ArrayOps$;
let $n_sc_ArrayOps$ = (void 0);
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$()
  };
  return $n_sc_ArrayOps$
}
class $c_sc_Hashing$ extends $c_O {
  improve__I__I(hcode) {
    let h = ((hcode + (~(hcode << 9))) | 0);
    h = (h ^ ((h >>> 14) | 0));
    h = ((h + (h << 4)) | 0);
    return (h ^ ((h >>> 10) | 0))
  };
}
const $d_sc_Hashing$ = new $TypeData().initClass({
  sc_Hashing$: 0
}, false, "scala.collection.Hashing$", {
  sc_Hashing$: 1,
  O: 1
});
$c_sc_Hashing$.prototype.$classData = $d_sc_Hashing$;
let $n_sc_Hashing$ = (void 0);
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$()
  };
  return $n_sc_Hashing$
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)))
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"))
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)))
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth))
}
const $f_sc_IterableOnceOps__foreach__F1__V = (function($thiz, f) {
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    f.apply__O__O(it.next__O())
  }
});
const $f_sc_IterableOnceOps__forall__F1__Z = (function($thiz, p) {
  let res = true;
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  while ((res && it.hasNext__Z())) {
    res = $uZ(p.apply__O__O(it.next__O()))
  };
  return res
});
const $f_sc_IterableOnceOps__exists__F1__Z = (function($thiz, p) {
  let res = false;
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  while (((!res) && it.hasNext__Z())) {
    res = $uZ(p.apply__O__O(it.next__O()))
  };
  return res
});
const $f_sc_IterableOnceOps__isEmpty__Z = (function($thiz) {
  return (!$as_sc_IterableOnce($thiz).iterator__sc_Iterator().hasNext__Z())
});
const $f_sc_IterableOnceOps__copyToArray__O__I__I = (function($thiz, xs, start) {
  const xsLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  let i = start;
  while (((i < xsLen) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
});
const $f_sc_IterableOnceOps__copyToArray__O__I__I__I = (function($thiz, xs, start, len) {
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  let i = start;
  const y = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  const end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
});
const $f_sc_IterableOnceOps__mkString__T__T__T__T = (function($thiz, start, sep, end) {
  if ($thiz.isEmpty__Z()) {
    return (("" + start) + end)
  } else {
    const this$1 = $thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end);
    return this$1.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
});
const $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function($thiz, b, start, sep, end) {
  const jsb = b.scm_StringBuilder__f_underlying;
  if (($uI(start.length) !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  if (it.hasNext__Z()) {
    const obj = it.next__O();
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while (it.hasNext__Z()) {
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      const obj$1 = it.next__O();
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1)
    }
  };
  if (($uI(end.length) !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return b
});
const $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O = (function($thiz, evidence$2) {
  if (($as_sc_IterableOnce($thiz).knownSize__I() >= 0)) {
    const destination = evidence$2.newArray__I__O($as_sc_IterableOnce($thiz).knownSize__I());
    $thiz.copyToArray__O__I__I(destination, 0);
    return destination
  } else {
    let capacity = 0;
    let size = 0;
    let jsElems = null;
    const elementClass = evidence$2.runtimeClass__jl_Class();
    capacity = 0;
    size = 0;
    const isCharArrayBuilder = (elementClass === $d_C.getClassOf());
    jsElems = [];
    const xs = $as_sc_IterableOnce($thiz);
    const it = xs.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      const elem = it.next__O();
      const unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.jl_Class__f_data.zero : elem));
      jsElems.push(unboxedElem)
    };
    const elemRuntimeClass = ((elementClass === $d_V.getClassOf()) ? $d_jl_Void.getClassOf() : (((elementClass === $d_sr_Null$.getClassOf()) || (elementClass === $d_sr_Nothing$.getClassOf())) ? $d_O.getClassOf() : elementClass));
    return $makeNativeArrayWrapper(elemRuntimeClass.jl_Class__f_data.getArrayOf(), jsElems)
  }
});
function $is_sc_IterableOnceOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnceOps)))
}
function $as_sc_IterableOnceOps(obj) {
  return (($is_sc_IterableOnceOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnceOps"))
}
function $isArrayOf_sc_IterableOnceOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnceOps)))
}
function $asArrayOf_sc_IterableOnceOps(obj, depth) {
  return (($isArrayOf_sc_IterableOnceOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnceOps;", depth))
}
class $c_sc_Iterator$ConcatIteratorCell extends $c_O {
  constructor(head, tail) {
    super();
    this.sc_Iterator$ConcatIteratorCell__f_head = null;
    this.sc_Iterator$ConcatIteratorCell__f_tail = null;
    this.sc_Iterator$ConcatIteratorCell__f_head = head;
    this.sc_Iterator$ConcatIteratorCell__f_tail = tail
  };
  headIterator__sc_Iterator() {
    return $as_sc_IterableOnce(this.sc_Iterator$ConcatIteratorCell__f_head.apply__O()).iterator__sc_Iterator()
  };
}
const $d_sc_Iterator$ConcatIteratorCell = new $TypeData().initClass({
  sc_Iterator$ConcatIteratorCell: 0
}, false, "scala.collection.Iterator$ConcatIteratorCell", {
  sc_Iterator$ConcatIteratorCell: 1,
  O: 1
});
$c_sc_Iterator$ConcatIteratorCell.prototype.$classData = $d_sc_Iterator$ConcatIteratorCell;
const $p_sc_LinearSeqIterator$LazyCell__v$lzycompute__sc_LinearSeqOps = (function($thiz) {
  if ((!$thiz.sc_LinearSeqIterator$LazyCell__f_bitmap$0)) {
    $thiz.sc_LinearSeqIterator$LazyCell__f_v = $as_sc_LinearSeqOps($thiz.sc_LinearSeqIterator$LazyCell__f_st.apply__O());
    $thiz.sc_LinearSeqIterator$LazyCell__f_bitmap$0 = true
  };
  $thiz.sc_LinearSeqIterator$LazyCell__f_st = null;
  return $thiz.sc_LinearSeqIterator$LazyCell__f_v
});
class $c_sc_LinearSeqIterator$LazyCell extends $c_O {
  constructor(outer, st) {
    super();
    this.sc_LinearSeqIterator$LazyCell__f_v = null;
    this.sc_LinearSeqIterator$LazyCell__f_st = null;
    this.sc_LinearSeqIterator$LazyCell__f_bitmap$0 = false;
    this.sc_LinearSeqIterator$LazyCell__f_st = st
  };
  v__sc_LinearSeqOps() {
    return ((!this.sc_LinearSeqIterator$LazyCell__f_bitmap$0) ? $p_sc_LinearSeqIterator$LazyCell__v$lzycompute__sc_LinearSeqOps(this) : this.sc_LinearSeqIterator$LazyCell__f_v)
  };
}
const $d_sc_LinearSeqIterator$LazyCell = new $TypeData().initClass({
  sc_LinearSeqIterator$LazyCell: 0
}, false, "scala.collection.LinearSeqIterator$LazyCell", {
  sc_LinearSeqIterator$LazyCell: 1,
  O: 1
});
$c_sc_LinearSeqIterator$LazyCell.prototype.$classData = $d_sc_LinearSeqIterator$LazyCell;
class $c_sc_StringOps$ extends $c_O {
  contains$extension__T__C__Z(this$, elem) {
    return ($f_T__indexOf__I__I(this$, elem) >= 0)
  };
  slice$extension__T__I__I__T(this$, from, until) {
    const start = ((from > 0) ? from : 0);
    const that = $uI(this$.length);
    const end = ((until < that) ? until : that);
    return ((start >= end) ? "" : $as_T(this$.substring(start, end)))
  };
  stripSuffix$extension__T__T__T(this$, suffix) {
    if ($f_T__endsWith__T__Z(this$, suffix)) {
      const endIndex = (($uI(this$.length) - $uI(suffix.length)) | 0);
      return $as_T(this$.substring(0, endIndex))
    } else {
      return this$
    }
  };
  escape$extension__T__C__T(this$, ch) {
    return (((((ch >= 97) && (ch <= 122)) || ((ch >= 65) && (ch <= 90))) || ((ch >= 48) && (ch <= 57))) ? $as_T(String.fromCharCode(ch)) : ("\\" + $bC(ch)))
  };
  split$extension__T__C__AT(this$, separator) {
    const regex = $m_sc_StringOps$().escape$extension__T__C__T(this$, separator);
    return $f_T__split__T__I__AT(this$, regex, 0)
  };
  unwrapArg$extension__T__O__O(this$, arg) {
    if ((arg instanceof $c_s_math_ScalaNumber)) {
      const x2 = $as_s_math_ScalaNumber(arg);
      return x2.underlying__O()
    } else {
      return arg
    }
  };
  format$extension__T__sci_Seq__T(this$, args) {
    const args$1 = $asArrayOf_O($as_sc_IterableOnceOps(args.map__F1__O(new $c_sjsr_AnonFunction1(((this$1, this$$1) => ((arg$2) => $m_sc_StringOps$().unwrapArg$extension__T__O__O(this$$1, arg$2)))(this, this$)))).toArray__s_reflect_ClassTag__O($m_s_reflect_ManifestFactory$ObjectManifest$()), 1);
    return $m_jl_String$().format__T__AO__T(this$, args$1)
  };
  head$extension__T__C(this$) {
    if ((this$ === "")) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty String")
    } else {
      return (65535 & $uI(this$.charCodeAt(0)))
    }
  };
  drop$extension__T__I__T(this$, n) {
    const $$x1 = $m_sc_StringOps$();
    const y = $uI(this$.length);
    return $$x1.slice$extension__T__I__I__T(this$, ((n < y) ? n : y), $uI(this$.length))
  };
}
const $d_sc_StringOps$ = new $TypeData().initClass({
  sc_StringOps$: 0
}, false, "scala.collection.StringOps$", {
  sc_StringOps$: 1,
  O: 1
});
$c_sc_StringOps$.prototype.$classData = $d_sc_StringOps$;
let $n_sc_StringOps$ = (void 0);
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$()
  };
  return $n_sc_StringOps$
}
const $p_sci_ChampBaseIterator__initNodes__V = (function($thiz) {
  if (($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths === null)) {
    $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths = $newArrayObject($d_I.getArrayOf(), [($m_sci_Node$().sci_Node$__f_MaxDepth << 1)]);
    $thiz.sci_ChampBaseIterator__f_nodes = $newArrayObject($d_sci_Node.getArrayOf(), [$m_sci_Node$().sci_Node$__f_MaxDepth])
  }
});
const $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V = (function($thiz, node) {
  $thiz.sci_ChampBaseIterator__f_currentValueNode = node;
  $thiz.sci_ChampBaseIterator__f_currentValueCursor = 0;
  $thiz.sci_ChampBaseIterator__f_currentValueLength = node.payloadArity__I()
});
const $p_sci_ChampBaseIterator__pushNode__sci_Node__V = (function($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = ((1 + $thiz.sci_ChampBaseIterator__f_currentStackLevel) | 0);
  const cursorIndex = ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1);
  const lengthIndex = ((1 + ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1)) | 0);
  $thiz.sci_ChampBaseIterator__f_nodes.set($thiz.sci_ChampBaseIterator__f_currentStackLevel, node);
  $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.set(cursorIndex, 0);
  $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.set(lengthIndex, node.nodeArity__I())
});
const $p_sci_ChampBaseIterator__popNode__V = (function($thiz) {
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = (((-1) + $thiz.sci_ChampBaseIterator__f_currentStackLevel) | 0)
});
const $p_sci_ChampBaseIterator__searchNextValueNode__Z = (function($thiz) {
  while (($thiz.sci_ChampBaseIterator__f_currentStackLevel >= 0)) {
    const cursorIndex = ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1);
    const lengthIndex = ((1 + ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1)) | 0);
    const nodeCursor = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.get(cursorIndex);
    const nodeLength = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.get(lengthIndex);
    if ((nodeCursor < nodeLength)) {
      const ev$1 = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths;
      ev$1.set(cursorIndex, ((1 + ev$1.get(cursorIndex)) | 0));
      const nextNode = $thiz.sci_ChampBaseIterator__f_nodes.get($thiz.sci_ChampBaseIterator__f_currentStackLevel).getNode__I__sci_Node(nodeCursor);
      if (nextNode.hasNodes__Z()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode)
      };
      if (nextNode.hasPayload__Z()) {
        $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, nextNode);
        return true
      }
    } else {
      $p_sci_ChampBaseIterator__popNode__V($thiz)
    }
  };
  return false
});
const $ct_sci_ChampBaseIterator__ = (function($thiz) {
  $thiz.sci_ChampBaseIterator__f_currentValueCursor = 0;
  $thiz.sci_ChampBaseIterator__f_currentValueLength = 0;
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = (-1);
  return $thiz
});
const $ct_sci_ChampBaseIterator__sci_Node__ = (function($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.hasNodes__Z()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode)
  };
  if (rootNode.hasPayload__Z()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode)
  };
  return $thiz
});
class $c_sci_ChampBaseIterator extends $c_O {
  constructor() {
    super();
    this.sci_ChampBaseIterator__f_currentValueCursor = 0;
    this.sci_ChampBaseIterator__f_currentValueLength = 0;
    this.sci_ChampBaseIterator__f_currentValueNode = null;
    this.sci_ChampBaseIterator__f_currentStackLevel = 0;
    this.sci_ChampBaseIterator__f_nodeCursorsAndLengths = null;
    this.sci_ChampBaseIterator__f_nodes = null
  };
  hasNext__Z() {
    return ((this.sci_ChampBaseIterator__f_currentValueCursor < this.sci_ChampBaseIterator__f_currentValueLength) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this))
  };
}
const $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V = (function($thiz, node) {
  $thiz.sci_ChampBaseReverseIterator__f_currentValueNode = node;
  $thiz.sci_ChampBaseReverseIterator__f_currentValueCursor = (((-1) + node.payloadArity__I()) | 0)
});
const $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V = (function($thiz, node) {
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = ((1 + $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel) | 0);
  $thiz.sci_ChampBaseReverseIterator__f_nodeStack.set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, node);
  $thiz.sci_ChampBaseReverseIterator__f_nodeIndex.set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, (((-1) + node.nodeArity__I()) | 0))
});
const $p_sci_ChampBaseReverseIterator__popNode__V = (function($thiz) {
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = (((-1) + $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel) | 0)
});
const $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z = (function($thiz) {
  while (($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel >= 0)) {
    const nodeCursor = $thiz.sci_ChampBaseReverseIterator__f_nodeIndex.get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel);
    $thiz.sci_ChampBaseReverseIterator__f_nodeIndex.set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, (((-1) + nodeCursor) | 0));
    if ((nodeCursor >= 0)) {
      const nextNode = $thiz.sci_ChampBaseReverseIterator__f_nodeStack.get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel).getNode__I__sci_Node(nodeCursor);
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, nextNode)
    } else {
      const currNode = $thiz.sci_ChampBaseReverseIterator__f_nodeStack.get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel);
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.hasPayload__Z()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true
      }
    }
  };
  return false
});
const $ct_sci_ChampBaseReverseIterator__ = (function($thiz) {
  $thiz.sci_ChampBaseReverseIterator__f_currentValueCursor = (-1);
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = (-1);
  $thiz.sci_ChampBaseReverseIterator__f_nodeIndex = $newArrayObject($d_I.getArrayOf(), [((1 + $m_sci_Node$().sci_Node$__f_MaxDepth) | 0)]);
  $thiz.sci_ChampBaseReverseIterator__f_nodeStack = $newArrayObject($d_sci_Node.getArrayOf(), [((1 + $m_sci_Node$().sci_Node$__f_MaxDepth) | 0)]);
  return $thiz
});
const $ct_sci_ChampBaseReverseIterator__sci_Node__ = (function($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz
});
class $c_sci_ChampBaseReverseIterator extends $c_O {
  constructor() {
    super();
    this.sci_ChampBaseReverseIterator__f_currentValueCursor = 0;
    this.sci_ChampBaseReverseIterator__f_currentValueNode = null;
    this.sci_ChampBaseReverseIterator__f_currentStackLevel = 0;
    this.sci_ChampBaseReverseIterator__f_nodeIndex = null;
    this.sci_ChampBaseReverseIterator__f_nodeStack = null
  };
  hasNext__Z() {
    return ((this.sci_ChampBaseReverseIterator__f_currentValueCursor >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this))
  };
}
const $p_sci_IndexedSeqDefaults$__liftedTree1$1__I = (function($thiz) {
  try {
    const x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
    const this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if ((e instanceof $c_jl_SecurityException)) {
      return 64
    } else {
      throw e
    }
  }
});
class $c_sci_IndexedSeqDefaults$ extends $c_O {
  constructor() {
    super();
    this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
    $n_sci_IndexedSeqDefaults$ = this;
    this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $p_sci_IndexedSeqDefaults$__liftedTree1$1__I(this)
  };
}
const $d_sci_IndexedSeqDefaults$ = new $TypeData().initClass({
  sci_IndexedSeqDefaults$: 0
}, false, "scala.collection.immutable.IndexedSeqDefaults$", {
  sci_IndexedSeqDefaults$: 1,
  O: 1
});
$c_sci_IndexedSeqDefaults$.prototype.$classData = $d_sci_IndexedSeqDefaults$;
let $n_sci_IndexedSeqDefaults$ = (void 0);
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$()
  };
  return $n_sci_IndexedSeqDefaults$
}
class $c_sci_LazyList$LazyBuilder$DeferredState extends $c_O {
  constructor() {
    super();
    this.sci_LazyList$LazyBuilder$DeferredState__f__state = null
  };
  eval__sci_LazyList$State() {
    const state = this.sci_LazyList$LazyBuilder$DeferredState__f__state;
    if ((state === null)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "uninitialized")
    };
    return $as_sci_LazyList$State(state.apply__O())
  };
  init__F0__V(state) {
    if ((this.sci_LazyList$LazyBuilder$DeferredState__f__state !== null)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "already initialized")
    };
    this.sci_LazyList$LazyBuilder$DeferredState__f__state = state
  };
}
const $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().initClass({
  sci_LazyList$LazyBuilder$DeferredState: 0
}, false, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", {
  sci_LazyList$LazyBuilder$DeferredState: 1,
  O: 1
});
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.$classData = $d_sci_LazyList$LazyBuilder$DeferredState;
class $c_sci_MapKeyValueTupleHashIterator$$anon$1 extends $c_O {
  constructor(outer) {
    super();
    this.sci_MapKeyValueTupleHashIterator$$anon$1__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sci_MapKeyValueTupleHashIterator$$anon$1__f_$outer = outer
    }
  };
  hashCode__I() {
    return this.sci_MapKeyValueTupleHashIterator$$anon$1__f_$outer.sci_MapKeyValueTupleHashIterator__f_scala$collection$immutable$MapKeyValueTupleHashIterator$$hash
  };
}
const $d_sci_MapKeyValueTupleHashIterator$$anon$1 = new $TypeData().initClass({
  sci_MapKeyValueTupleHashIterator$$anon$1: 0
}, false, "scala.collection.immutable.MapKeyValueTupleHashIterator$$anon$1", {
  sci_MapKeyValueTupleHashIterator$$anon$1: 1,
  O: 1
});
$c_sci_MapKeyValueTupleHashIterator$$anon$1.prototype.$classData = $d_sci_MapKeyValueTupleHashIterator$$anon$1;
class $c_sci_MapNode$ extends $c_O {
  constructor() {
    super();
    this.sci_MapNode$__f_EmptyMapNode = null;
    $n_sci_MapNode$ = this;
    this.sci_MapNode$__f_EmptyMapNode = new $c_sci_BitmapIndexedMapNode(0, 0, ($m_s_reflect_ManifestFactory$AnyManifest$(), $newArrayObject($d_O.getArrayOf(), [0])), ($m_s_reflect_ManifestFactory$IntManifest$(), $newArrayObject($d_I.getArrayOf(), [0])), 0, 0)
  };
}
const $d_sci_MapNode$ = new $TypeData().initClass({
  sci_MapNode$: 0
}, false, "scala.collection.immutable.MapNode$", {
  sci_MapNode$: 1,
  O: 1
});
$c_sci_MapNode$.prototype.$classData = $d_sci_MapNode$;
let $n_sci_MapNode$ = (void 0);
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$()
  };
  return $n_sci_MapNode$
}
const $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException = (function($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_sr_ScalaRunTime$().array_length__O__I(as)) | 0)))
});
class $c_sci_Node extends $c_O {
  removeElement__AI__I__AI(as, ix) {
    if ((ix < 0)) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    if ((ix > (((-1) + as.u.length) | 0))) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    const result = $newArrayObject($d_I.getArrayOf(), [(((-1) + as.u.length) | 0)]);
    $systemArraycopy(as, 0, result, 0, ix);
    const srcPos = ((1 + ix) | 0);
    const length = (((-1) + ((as.u.length - ix) | 0)) | 0);
    $systemArraycopy(as, srcPos, result, ix, length);
    return result
  };
  insertElement__AI__I__I__AI(as, ix, elem) {
    if ((ix < 0)) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    if ((ix > as.u.length)) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    const result = $newArrayObject($d_I.getArrayOf(), [((1 + as.u.length) | 0)]);
    $systemArraycopy(as, 0, result, 0, ix);
    result.set(ix, elem);
    const destPos = ((1 + ix) | 0);
    const length = ((as.u.length - ix) | 0);
    $systemArraycopy(as, ix, result, destPos, length);
    return result
  };
}
const $d_sci_Node = new $TypeData().initClass({
  sci_Node: 0
}, false, "scala.collection.immutable.Node", {
  sci_Node: 1,
  O: 1
});
$c_sci_Node.prototype.$classData = $d_sci_Node;
class $c_sci_Node$ extends $c_O {
  constructor() {
    super();
    this.sci_Node$__f_MaxDepth = 0;
    $n_sci_Node$ = this;
    this.sci_Node$__f_MaxDepth = $doubleToInt($uD(Math.ceil(6.4)))
  };
  maskFrom__I__I__I(hash, shift) {
    return (31 & ((hash >>> shift) | 0))
  };
  bitposFrom__I__I(mask) {
    return (1 << mask)
  };
  indexFrom__I__I__I(bitmap, bitpos) {
    const i = (bitmap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  indexFrom__I__I__I__I(bitmap, mask, bitpos) {
    return ((bitmap === (-1)) ? mask : this.indexFrom__I__I__I(bitmap, bitpos))
  };
}
const $d_sci_Node$ = new $TypeData().initClass({
  sci_Node$: 0
}, false, "scala.collection.immutable.Node$", {
  sci_Node$: 1,
  O: 1
});
$c_sci_Node$.prototype.$classData = $d_sci_Node$;
let $n_sci_Node$ = (void 0);
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$()
  };
  return $n_sci_Node$
}
class $c_sci_SetNode$ extends $c_O {
  constructor() {
    super();
    this.sci_SetNode$__f_EmptySetNode = null;
    $n_sci_SetNode$ = this;
    this.sci_SetNode$__f_EmptySetNode = new $c_sci_BitmapIndexedSetNode(0, 0, ($m_s_reflect_ManifestFactory$AnyManifest$(), $newArrayObject($d_O.getArrayOf(), [0])), ($m_s_reflect_ManifestFactory$IntManifest$(), $newArrayObject($d_I.getArrayOf(), [0])), 0, 0)
  };
}
const $d_sci_SetNode$ = new $TypeData().initClass({
  sci_SetNode$: 0
}, false, "scala.collection.immutable.SetNode$", {
  sci_SetNode$: 1,
  O: 1
});
$c_sci_SetNode$.prototype.$classData = $d_sci_SetNode$;
let $n_sci_SetNode$ = (void 0);
function $m_sci_SetNode$() {
  if ((!$n_sci_SetNode$)) {
    $n_sci_SetNode$ = new $c_sci_SetNode$()
  };
  return $n_sci_SetNode$
}
const $f_sci_VectorPointer__preClean__I__V = (function($thiz, depth) {
  $thiz.depth_$eq__I__V(depth);
  const x1 = (((-1) + depth) | 0);
  switch (x1) {
    case 0: {
      $thiz.display1_$eq__AAO__V(null);
      $thiz.display2_$eq__AAAO__V(null);
      $thiz.display3_$eq__AAAAO__V(null);
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 1: {
      $thiz.display2_$eq__AAAO__V(null);
      $thiz.display3_$eq__AAAAO__V(null);
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 2: {
      $thiz.display3_$eq__AAAAO__V(null);
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 3: {
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 4: {
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 5: {
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V = (function($thiz, that, depth) {
  $thiz.depth_$eq__I__V(depth);
  const x1 = (((-1) + depth) | 0);
  switch (x1) {
    case (-1): {
      break
    }
    case 0: {
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 1: {
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 2: {
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 3: {
      $thiz.display3_$eq__AAAAO__V(that.display3__AAAAO());
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 4: {
      $thiz.display4_$eq__AAAAAO__V(that.display4__AAAAAO());
      $thiz.display3_$eq__AAAAO__V(that.display3__AAAAO());
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 5: {
      $thiz.display5_$eq__AAAAAAO__V(that.display5__AAAAAAO());
      $thiz.display4_$eq__AAAAAO__V(that.display4__AAAAAO());
      $thiz.display3_$eq__AAAAO__V(that.display3__AAAAO());
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__gotoPos__I__I__V = (function($thiz, index, xor) {
  if ((xor >= 32)) {
    if ((xor < 1024)) {
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else if ((xor < 32768)) {
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else if ((xor < 1048576)) {
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))));
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else if ((xor < 33554432)) {
      $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((index >>> 20) | 0))));
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))));
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else if ((xor < 1073741824)) {
      $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().get((31 & ((index >>> 25) | 0))));
      $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((index >>> 20) | 0))));
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))));
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else {
      throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
    }
  }
});
const $f_sci_VectorPointer__gotoNextBlockStart__I__I__V = (function($thiz, index, xor) {
  if ((xor < 1024)) {
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
  } else if ((xor < 32768)) {
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get(0))
  } else if ((xor < 1048576)) {
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))));
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get(0));
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get(0))
  } else if ((xor < 33554432)) {
    $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((index >>> 20) | 0))));
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get(0));
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get(0));
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get(0))
  } else if ((xor < 1073741824)) {
    $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().get((31 & ((index >>> 25) | 0))));
    $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get(0));
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get(0));
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get(0));
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get(0))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $f_sci_VectorPointer__gotoNewBlockStart__I__I__V = (function($thiz, index, depth) {
  if ((depth > 5)) {
    $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().get((31 & ((index >>> 25) | 0))))
  };
  if ((depth > 4)) {
    $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((index >>> 20) | 0))))
  };
  if ((depth > 3)) {
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))))
  };
  if ((depth > 2)) {
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))))
  };
  if ((depth > 1)) {
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
  }
});
const $f_sci_VectorPointer__gotoNextBlockStartWritable__I__I__V = (function($thiz, index, xor) {
  if ((xor < 1024)) {
    if (($thiz.depth__I() === 1)) {
      $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
      $thiz.display1__AAO().set(0, $thiz.display0__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO())
  } else if ((xor < 32768)) {
    if (($thiz.depth__I() === 2)) {
      $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display2__AAAO().set(0, $thiz.display1__AAO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO())
  } else if ((xor < 1048576)) {
    if (($thiz.depth__I() === 3)) {
      $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display3__AAAAO().set(0, $thiz.display2__AAAO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO())
  } else if ((xor < 33554432)) {
    if (($thiz.depth__I() === 4)) {
      $thiz.display4_$eq__AAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display4__AAAAAO().set(0, $thiz.display3__AAAAO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
    $thiz.display4__AAAAAO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AAAAO())
  } else if ((xor < 1073741824)) {
    if (($thiz.depth__I() === 5)) {
      $thiz.display5_$eq__AAAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display5__AAAAAAO().set(0, $thiz.display4__AAAAAO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display4_$eq__AAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
    $thiz.display4__AAAAAO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AAAAO());
    $thiz.display5__AAAAAAO().set((31 & ((index >>> 25) | 0)), $thiz.display4__AAAAAO())
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO = (function($thiz, array, index) {
  const x = array.get(index);
  array.set(index, null);
  return $asArrayOf_O(x.clone__O(), 1)
});
const $f_sci_VectorPointer__stabilize__I__V = (function($thiz, index) {
  const x1 = (((-1) + $thiz.depth__I()) | 0);
  switch (x1) {
    case 5: {
      $thiz.display5_$eq__AAAAAAO__V($asArrayOf_O($thiz.display5__AAAAAAO().clone__O(), 6));
      $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display5__AAAAAAO().set((31 & ((index >>> 25) | 0)), $thiz.display4__AAAAAO());
      $thiz.display4__AAAAAO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AAAAO());
      $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
      $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 4: {
      $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display4__AAAAAO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AAAAO());
      $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
      $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 3: {
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
      $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 2: {
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 1: {
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 0: {
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__gotoPosWritable0__I__I__V = (function($thiz, newIndex, xor) {
  const x1 = (((-1) + $thiz.depth__I()) | 0);
  switch (x1) {
    case 5: {
      $thiz.display5_$eq__AAAAAAO__V($asArrayOf_O($thiz.display5__AAAAAAO().clone__O(), 6));
      const array = $thiz.display5__AAAAAAO();
      const index = (31 & ((newIndex >>> 25) | 0));
      $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array, index), 5));
      const array$1 = $thiz.display4__AAAAAO();
      const index$1 = (31 & ((newIndex >>> 20) | 0));
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$1, index$1), 4));
      const array$2 = $thiz.display3__AAAAO();
      const index$2 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$2, index$2), 3));
      const array$3 = $thiz.display2__AAAO();
      const index$3 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$3, index$3), 2));
      const array$4 = $thiz.display1__AAO();
      const index$4 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$4, index$4));
      break
    }
    case 4: {
      $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
      const array$5 = $thiz.display4__AAAAAO();
      const index$5 = (31 & ((newIndex >>> 20) | 0));
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$5, index$5), 4));
      const array$6 = $thiz.display3__AAAAO();
      const index$6 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$6, index$6), 3));
      const array$7 = $thiz.display2__AAAO();
      const index$7 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$7, index$7), 2));
      const array$8 = $thiz.display1__AAO();
      const index$8 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$8, index$8));
      break
    }
    case 3: {
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
      const array$9 = $thiz.display3__AAAAO();
      const index$9 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$9, index$9), 3));
      const array$10 = $thiz.display2__AAAO();
      const index$10 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$10, index$10), 2));
      const array$11 = $thiz.display1__AAO();
      const index$11 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$11, index$11));
      break
    }
    case 2: {
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      const array$12 = $thiz.display2__AAAO();
      const index$12 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$12, index$12), 2));
      const array$13 = $thiz.display1__AAO();
      const index$13 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$13, index$13));
      break
    }
    case 1: {
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      const array$14 = $thiz.display1__AAO();
      const index$14 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$14, index$14));
      break
    }
    case 0: {
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display0__AO().clone__O(), 1));
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__gotoPosWritable1__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  if ((xor < 32)) {
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display0__AO().clone__O(), 1))
  } else if ((xor < 1024)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    const array = $thiz.display1__AAO();
    const index = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array, index))
  } else if ((xor < 32768)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AAO());
    const array$1 = $thiz.display2__AAAO();
    const index$1 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$1, index$1), 2));
    const array$2 = $thiz.display1__AAO();
    const index$2 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$2, index$2))
  } else if ((xor < 1048576)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AAAO());
    const array$3 = $thiz.display3__AAAAO();
    const index$3 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$3, index$3), 3));
    const array$4 = $thiz.display2__AAAO();
    const index$4 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$4, index$4), 2));
    const array$5 = $thiz.display1__AAO();
    const index$5 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$5, index$5))
  } else if ((xor < 33554432)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
    $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AAAO());
    $thiz.display4__AAAAAO().set((31 & ((oldIndex >>> 20) | 0)), $thiz.display3__AAAAO());
    const array$6 = $thiz.display4__AAAAAO();
    const index$6 = (31 & ((newIndex >>> 20) | 0));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$6, index$6), 4));
    const array$7 = $thiz.display3__AAAAO();
    const index$7 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$7, index$7), 3));
    const array$8 = $thiz.display2__AAAO();
    const index$8 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$8, index$8), 2));
    const array$9 = $thiz.display1__AAO();
    const index$9 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$9, index$9))
  } else if ((xor < 1073741824)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
    $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
    $thiz.display5_$eq__AAAAAAO__V($asArrayOf_O($thiz.display5__AAAAAAO().clone__O(), 6));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AAAO());
    $thiz.display4__AAAAAO().set((31 & ((oldIndex >>> 20) | 0)), $thiz.display3__AAAAO());
    $thiz.display5__AAAAAAO().set((31 & ((oldIndex >>> 25) | 0)), $thiz.display4__AAAAAO());
    const array$10 = $thiz.display5__AAAAAAO();
    const index$10 = (31 & ((newIndex >>> 25) | 0));
    $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$10, index$10), 5));
    const array$11 = $thiz.display4__AAAAAO();
    const index$11 = (31 & ((newIndex >>> 20) | 0));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$11, index$11), 4));
    const array$12 = $thiz.display3__AAAAO();
    const index$12 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$12, index$12), 3));
    const array$13 = $thiz.display2__AAAO();
    const index$13 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$13, index$13), 2));
    const array$14 = $thiz.display1__AAO();
    const index$14 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$14, index$14))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $f_sci_VectorPointer__copyRange__AO__I__I__AO = (function($thiz, array, oldLeft, newLeft) {
  const componentType = $objectGetClass(array).getComponentType__jl_Class();
  const elems = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, 32), 1);
  const length = ((32 - ((newLeft > oldLeft) ? newLeft : oldLeft)) | 0);
  $systemArraycopy(array, oldLeft, elems, newLeft, length);
  return elems
});
const $f_sci_VectorPointer__gotoFreshPosWritable0__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  if ((xor >= 32)) {
    if ((xor < 1024)) {
      if (($thiz.depth__I() === 1)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
        $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else if ((xor < 32768)) {
      if (($thiz.depth__I() === 2)) {
        $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
        $thiz.display2__AAAO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AAO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((newIndex >>> 10) | 0))));
      if (($thiz.display1__AAO() === null)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else if ((xor < 1048576)) {
      if (($thiz.depth__I() === 3)) {
        $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
        $thiz.display3__AAAAO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AAAO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((newIndex >>> 15) | 0))));
      if (($thiz.display2__AAAO() === null)) {
        $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((newIndex >>> 10) | 0))));
      if (($thiz.display1__AAO() === null)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else if ((xor < 33554432)) {
      if (($thiz.depth__I() === 4)) {
        $thiz.display4_$eq__AAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
        $thiz.display4__AAAAAO().set((31 & ((oldIndex >>> 20) | 0)), $thiz.display3__AAAAO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((newIndex >>> 20) | 0))));
      if (($thiz.display3__AAAAO() === null)) {
        $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((newIndex >>> 15) | 0))));
      if (($thiz.display2__AAAO() === null)) {
        $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((newIndex >>> 10) | 0))));
      if (($thiz.display1__AAO() === null)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else if ((xor < 1073741824)) {
      if (($thiz.depth__I() === 5)) {
        $thiz.display5_$eq__AAAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
        $thiz.display5__AAAAAAO().set((31 & ((oldIndex >>> 25) | 0)), $thiz.display4__AAAAAO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().get((31 & ((newIndex >>> 25) | 0))));
      if (($thiz.display4__AAAAAO() === null)) {
        $thiz.display4_$eq__AAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((newIndex >>> 20) | 0))));
      if (($thiz.display3__AAAAO() === null)) {
        $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((newIndex >>> 15) | 0))));
      if (($thiz.display2__AAAO() === null)) {
        $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((newIndex >>> 10) | 0))));
      if (($thiz.display1__AAO() === null)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else {
      throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
    }
  }
});
const $f_sci_VectorPointer__gotoFreshPosWritable1__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  $f_sci_VectorPointer__stabilize__I__V($thiz, oldIndex);
  $f_sci_VectorPointer__gotoFreshPosWritable0__I__I__I__V($thiz, oldIndex, newIndex, xor)
});
class $c_scm_HashMap$Node extends $c_O {
  constructor(_key, _hash, _value, _next) {
    super();
    this.scm_HashMap$Node__f__key = null;
    this.scm_HashMap$Node__f__hash = 0;
    this.scm_HashMap$Node__f__value = null;
    this.scm_HashMap$Node__f__next = null;
    this.scm_HashMap$Node__f__key = _key;
    this.scm_HashMap$Node__f__hash = _hash;
    this.scm_HashMap$Node__f__value = _value;
    this.scm_HashMap$Node__f__next = _next
  };
  findNode__O__I__scm_HashMap$Node(k, h) {
    let _$this = this;
    while (true) {
      if (((h === _$this.scm_HashMap$Node__f__hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(k, _$this.scm_HashMap$Node__f__key))) {
        return _$this
      } else if (((_$this.scm_HashMap$Node__f__next === null) || (_$this.scm_HashMap$Node__f__hash > h))) {
        return null
      } else {
        _$this = _$this.scm_HashMap$Node__f__next
      }
    }
  };
  toString__T() {
    return ((((((("Node(" + this.scm_HashMap$Node__f__key) + ", ") + this.scm_HashMap$Node__f__value) + ", ") + this.scm_HashMap$Node__f__hash) + ") -> ") + this.scm_HashMap$Node__f__next)
  };
}
function $as_scm_HashMap$Node(obj) {
  return (((obj instanceof $c_scm_HashMap$Node) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.HashMap$Node"))
}
function $isArrayOf_scm_HashMap$Node(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashMap$Node)))
}
function $asArrayOf_scm_HashMap$Node(obj, depth) {
  return (($isArrayOf_scm_HashMap$Node(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.HashMap$Node;", depth))
}
const $d_scm_HashMap$Node = new $TypeData().initClass({
  scm_HashMap$Node: 0
}, false, "scala.collection.mutable.HashMap$Node", {
  scm_HashMap$Node: 1,
  O: 1
});
$c_scm_HashMap$Node.prototype.$classData = $d_scm_HashMap$Node;
class $c_sc_package$$colon$plus$ extends $c_O {
}
const $d_sc_package$$colon$plus$ = new $TypeData().initClass({
  sc_package$$colon$plus$: 0
}, false, "scala.collection.package$$colon$plus$", {
  sc_package$$colon$plus$: 1,
  O: 1
});
$c_sc_package$$colon$plus$.prototype.$classData = $d_sc_package$$colon$plus$;
let $n_sc_package$$colon$plus$ = (void 0);
function $m_sc_package$$colon$plus$() {
  if ((!$n_sc_package$$colon$plus$)) {
    $n_sc_package$$colon$plus$ = new $c_sc_package$$colon$plus$()
  };
  return $n_sc_package$$colon$plus$
}
class $c_sc_package$$plus$colon$ extends $c_O {
}
const $d_sc_package$$plus$colon$ = new $TypeData().initClass({
  sc_package$$plus$colon$: 0
}, false, "scala.collection.package$$plus$colon$", {
  sc_package$$plus$colon$: 1,
  O: 1
});
$c_sc_package$$plus$colon$.prototype.$classData = $d_sc_package$$plus$colon$;
let $n_sc_package$$plus$colon$ = (void 0);
function $m_sc_package$$plus$colon$() {
  if ((!$n_sc_package$$plus$colon$)) {
    $n_sc_package$$plus$colon$ = new $c_sc_package$$plus$colon$()
  };
  return $n_sc_package$$plus$colon$
}
class $c_s_math_Ordered$ extends $c_O {
}
const $d_s_math_Ordered$ = new $TypeData().initClass({
  s_math_Ordered$: 0
}, false, "scala.math.Ordered$", {
  s_math_Ordered$: 1,
  O: 1
});
$c_s_math_Ordered$.prototype.$classData = $d_s_math_Ordered$;
let $n_s_math_Ordered$ = (void 0);
function $m_s_math_Ordered$() {
  if ((!$n_s_math_Ordered$)) {
    $n_s_math_Ordered$ = new $c_s_math_Ordered$()
  };
  return $n_s_math_Ordered$
}
class $c_s_package$ extends $c_O {
  constructor() {
    super();
    this.s_package$__f_BigDecimal = null;
    this.s_package$__f_BigInt = null;
    this.s_package$__f_AnyRef = null;
    this.s_package$__f_Traversable = null;
    this.s_package$__f_Iterable = null;
    this.s_package$__f_Seq = null;
    this.s_package$__f_IndexedSeq = null;
    this.s_package$__f_Iterator = null;
    this.s_package$__f_List = null;
    this.s_package$__f_Nil = null;
    this.s_package$__f_$colon$colon = null;
    this.s_package$__f_$plus$colon = null;
    this.s_package$__f_$colon$plus = null;
    this.s_package$__f_Stream = null;
    this.s_package$__f_LazyList = null;
    this.s_package$__f_Vector = null;
    this.s_package$__f_StringBuilder = null;
    this.s_package$__f_Range = null;
    this.s_package$__f_Equiv = null;
    this.s_package$__f_Fractional = null;
    this.s_package$__f_Integral = null;
    this.s_package$__f_Numeric = null;
    this.s_package$__f_Ordered = null;
    this.s_package$__f_Ordering = null;
    this.s_package$__f_Either = null;
    this.s_package$__f_Left = null;
    this.s_package$__f_Right = null;
    this.s_package$__f_bitmap$0 = 0;
    $n_s_package$ = this;
    this.s_package$__f_AnyRef = new $c_s_package$$anon$1();
    this.s_package$__f_Traversable = $m_sc_Iterable$();
    this.s_package$__f_Iterable = $m_sc_Iterable$();
    this.s_package$__f_Seq = $m_sci_Seq$();
    this.s_package$__f_IndexedSeq = $m_sci_IndexedSeq$();
    this.s_package$__f_Iterator = $m_sc_Iterator$();
    this.s_package$__f_List = $m_sci_List$();
    this.s_package$__f_Nil = $m_sci_Nil$();
    this.s_package$__f_$colon$colon = $m_sci_$colon$colon$();
    this.s_package$__f_$plus$colon = $m_sc_package$$plus$colon$();
    this.s_package$__f_$colon$plus = $m_sc_package$$colon$plus$();
    this.s_package$__f_Stream = $m_sci_Stream$();
    this.s_package$__f_LazyList = $m_sci_LazyList$();
    this.s_package$__f_Vector = $m_sci_Vector$();
    this.s_package$__f_StringBuilder = $m_scm_StringBuilder$();
    this.s_package$__f_Range = $m_sci_Range$();
    this.s_package$__f_Equiv = $m_s_math_Equiv$();
    this.s_package$__f_Fractional = $m_s_math_Fractional$();
    this.s_package$__f_Integral = $m_s_math_Integral$();
    this.s_package$__f_Numeric = $m_s_math_Numeric$();
    this.s_package$__f_Ordered = $m_s_math_Ordered$();
    this.s_package$__f_Ordering = $m_s_math_Ordering$();
    this.s_package$__f_Either = $m_s_util_Either$();
    this.s_package$__f_Left = $m_s_util_Left$();
    this.s_package$__f_Right = $m_s_util_Right$()
  };
}
const $d_s_package$ = new $TypeData().initClass({
  s_package$: 0
}, false, "scala.package$", {
  s_package$: 1,
  O: 1
});
$c_s_package$.prototype.$classData = $d_s_package$;
let $n_s_package$ = (void 0);
function $m_s_package$() {
  if ((!$n_s_package$)) {
    $n_s_package$ = new $c_s_package$()
  };
  return $n_s_package$
}
class $c_sr_BoxesRunTime$ extends $c_O {
  equals__O__O__Z(x, y) {
    if ((x === y)) {
      return true
    } else if ($is_jl_Number(x)) {
      const x2 = $as_jl_Number(x);
      return this.equalsNumObject__jl_Number__O__Z(x2, y)
    } else if ((x instanceof $Char)) {
      const x3 = $as_jl_Character(x);
      return this.equalsCharObject__jl_Character__O__Z(x3, y)
    } else {
      return ((x === null) ? (y === null) : $dp_equals__O__Z(x, y))
    }
  };
  equalsNumObject__jl_Number__O__Z(xn, y) {
    if ($is_jl_Number(y)) {
      const x2 = $as_jl_Number(y);
      return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
    } else if ((y instanceof $Char)) {
      const x3 = $as_jl_Character(y);
      if (((typeof xn) === "number")) {
        const x2$1 = $uD(xn);
        return (x2$1 === $uC(x3))
      } else if ((xn instanceof $c_RTLong)) {
        const t = $uJ(xn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(x3);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((xn === null) ? (x3 === null) : $dp_equals__O__Z(xn, x3))
      }
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y))
    }
  };
  equalsNumNum__jl_Number__jl_Number__Z(xn, yn) {
    if (((typeof xn) === "number")) {
      const x2 = $uD(xn);
      if (((typeof yn) === "number")) {
        const x2$2 = $uD(yn);
        return (x2 === x2$2)
      } else if ((yn instanceof $c_RTLong)) {
        const t = $uJ(yn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4 = $as_s_math_ScalaNumber(yn);
        return x4.equals__O__Z(x2)
      } else {
        return false
      }
    } else if ((xn instanceof $c_RTLong)) {
      const t$1 = $uJ(xn);
      const lo$1 = t$1.RTLong__f_lo;
      const hi$1 = t$1.RTLong__f_hi;
      if ((yn instanceof $c_RTLong)) {
        const t$2 = $uJ(yn);
        const lo$2 = t$2.RTLong__f_lo;
        const hi$2 = t$2.RTLong__f_hi;
        return ((lo$1 === lo$2) && (hi$1 === hi$2))
      } else if (((typeof yn) === "number")) {
        const x3$3 = $uD(yn);
        return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4$2 = $as_s_math_ScalaNumber(yn);
        return x4$2.equals__O__Z(new $c_RTLong(lo$1, hi$1))
      } else {
        return false
      }
    } else {
      return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn))
    }
  };
  equalsCharObject__jl_Character__O__Z(xc, y) {
    if ((y instanceof $Char)) {
      const x2 = $as_jl_Character(y);
      return ($uC(xc) === $uC(x2))
    } else if ($is_jl_Number(y)) {
      const x3 = $as_jl_Number(y);
      if (((typeof x3) === "number")) {
        const x2$1 = $uD(x3);
        return (x2$1 === $uC(xc))
      } else if ((x3 instanceof $c_RTLong)) {
        const t = $uJ(x3);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(xc);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((x3 === null) ? (xc === null) : $dp_equals__O__Z(x3, xc))
      }
    } else {
      return ((xc === null) && (y === null))
    }
  };
}
const $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
let $n_sr_BoxesRunTime$ = (void 0);
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
const $d_sr_Null$ = new $TypeData().initClass({
  sr_Null$: 0
}, false, "scala.runtime.Null$", {
  sr_Null$: 1,
  O: 1
});
class $c_sr_ScalaRunTime$ extends $c_O {
  array_apply__O__I__O(xs, idx) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      return x2.get(idx)
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = $asArrayOf_I(xs, 1);
      return x3.get(idx)
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      return x4.get(idx)
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      return x5.get(idx)
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      return x6.get(idx)
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      return $bC(x7.get(idx))
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      return x8.get(idx)
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      return x9.get(idx)
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      return x10.get(idx)
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = $asArrayOf_jl_Void(xs, 1);
      return x11.get(idx)
    } else if ((xs === null)) {
      throw new $c_jl_NullPointerException()
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  array_update__O__I__O__V(xs, idx, value) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      x2.set(idx, value)
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = $asArrayOf_I(xs, 1);
      x3.set(idx, $uI(value))
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      x4.set(idx, $uD(value))
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      x5.set(idx, $uJ(value))
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      x6.set(idx, $uF(value))
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      x7.set(idx, $uC(value))
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      x8.set(idx, $uB(value))
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      x9.set(idx, $uS(value))
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      x10.set(idx, $uZ(value))
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = $asArrayOf_jl_Void(xs, 1);
      x11.set(idx, (void 0))
    } else if ((xs === null)) {
      throw new $c_jl_NullPointerException()
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  array_length__O__I(xs) {
    return $m_jl_reflect_Array$().getLength__O__I(xs)
  };
  _toString__s_Product__T(x) {
    const this$1 = x.productIterator__sc_Iterator();
    const start = (x.productPrefix__T() + "(");
    return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")")
  };
}
const $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
let $n_sr_ScalaRunTime$ = (void 0);
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
class $c_sr_Statics$ extends $c_O {
  mix__I__I__I(hash, data) {
    let h = this.mixLast__I__I__I(hash, data);
    const i = h;
    h = ((i << 13) | ((i >>> 19) | 0));
    return (((-430675100) + $imul(5, h)) | 0)
  };
  mixLast__I__I__I(hash, data) {
    let k = data;
    k = $imul((-862048943), k);
    const i = k;
    k = ((i << 15) | ((i >>> 17) | 0));
    k = $imul(461845907, k);
    return (hash ^ k)
  };
  finalizeHash__I__I__I(hash, length) {
    return this.avalanche__I__I((hash ^ length))
  };
  avalanche__I__I(h0) {
    let h = h0;
    h = (h ^ ((h >>> 16) | 0));
    h = $imul((-2048144789), h);
    h = (h ^ ((h >>> 13) | 0));
    h = $imul((-1028477387), h);
    h = (h ^ ((h >>> 16) | 0));
    return h
  };
  longHash__J__I(lv) {
    const lo = lv.RTLong__f_lo;
    const lo$1 = lv.RTLong__f_hi;
    return ((lo$1 === (lo >> 31)) ? lo : (lo ^ lo$1))
  };
  doubleHash__D__I(dv) {
    const iv = $doubleToInt(dv);
    if ((iv === dv)) {
      return iv
    } else {
      const this$1 = $m_RTLong$();
      const lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
      const hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
    }
  };
  anyHash__O__I(x) {
    if ((x === null)) {
      return 0
    } else if (((typeof x) === "number")) {
      const x3 = $uD(x);
      return this.doubleHash__D__I(x3)
    } else if ((x instanceof $c_RTLong)) {
      const t = $uJ(x);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return this.longHash__J__I(new $c_RTLong(lo, hi))
    } else {
      return $dp_hashCode__I(x)
    }
  };
  ioobe__I__O(n) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
}
const $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
let $n_sr_Statics$ = (void 0);
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
class $c_sr_Statics$PFMarker$ extends $c_O {
}
const $d_sr_Statics$PFMarker$ = new $TypeData().initClass({
  sr_Statics$PFMarker$: 0
}, false, "scala.runtime.Statics$PFMarker$", {
  sr_Statics$PFMarker$: 1,
  O: 1
});
$c_sr_Statics$PFMarker$.prototype.$classData = $d_sr_Statics$PFMarker$;
let $n_sr_Statics$PFMarker$ = (void 0);
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$()
  };
  return $n_sr_Statics$PFMarker$
}
class $c_sjsr_package$ extends $c_O {
  wrapJavaScriptException__O__jl_Throwable(e) {
    if ((e instanceof $c_jl_Throwable)) {
      const x2 = $as_jl_Throwable(e);
      return x2
    } else {
      return new $c_sjs_js_JavaScriptException(e)
    }
  };
  unwrapJavaScriptException__jl_Throwable__O(th) {
    if ((th instanceof $c_sjs_js_JavaScriptException)) {
      const x2 = $as_sjs_js_JavaScriptException(th);
      const e = x2.sjs_js_JavaScriptException__f_exception;
      return e
    } else {
      return th
    }
  };
}
const $d_sjsr_package$ = new $TypeData().initClass({
  sjsr_package$: 0
}, false, "scala.scalajs.runtime.package$", {
  sjsr_package$: 1,
  O: 1
});
$c_sjsr_package$.prototype.$classData = $d_sjsr_package$;
let $n_sjsr_package$ = (void 0);
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$()
  };
  return $n_sjsr_package$
}
class $c_s_util_hashing_MurmurHash3 extends $c_O {
  mix__I__I__I(hash, data) {
    let h = this.mixLast__I__I__I(hash, data);
    const i = h;
    h = ((i << 13) | ((i >>> 19) | 0));
    return (((-430675100) + $imul(5, h)) | 0)
  };
  mixLast__I__I__I(hash, data) {
    let k = data;
    k = $imul((-862048943), k);
    const i = k;
    k = ((i << 15) | ((i >>> 17) | 0));
    k = $imul(461845907, k);
    return (hash ^ k)
  };
  finalizeHash__I__I__I(hash, length) {
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length))
  };
  scala$util$hashing$MurmurHash3$$avalanche__I__I(hash) {
    let h = hash;
    h = (h ^ ((h >>> 16) | 0));
    h = $imul((-2048144789), h);
    h = (h ^ ((h >>> 13) | 0));
    h = $imul((-1028477387), h);
    h = (h ^ ((h >>> 16) | 0));
    return h
  };
  productHash__s_Product__I__Z__I(x, seed, ignorePrefix) {
    const arr = x.productArity__I();
    if ((arr === 0)) {
      return $f_T__hashCode__I(x.productPrefix__T())
    } else {
      let h = seed;
      if ((!ignorePrefix)) {
        h = this.mix__I__I__I(h, $f_T__hashCode__I(x.productPrefix__T()))
      };
      let i = 0;
      while ((i < arr)) {
        const $$x1 = h;
        const x$1 = x.productElement__I__O(i);
        h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, arr)
    }
  };
  unorderedHash__sc_IterableOnce__I__I(xs, seed) {
    let elem = 0;
    elem = 0;
    let elem$1 = 0;
    elem$1 = 0;
    let elem$2 = 0;
    elem$2 = 0;
    let elem$3 = 0;
    elem$3 = 1;
    const this$5 = xs.iterator__sc_Iterator();
    while (this$5.hasNext__Z()) {
      const arg1 = this$5.next__O();
      const h = $m_sr_Statics$().anyHash__O__I(arg1);
      elem = ((elem + h) | 0);
      elem$1 = (elem$1 ^ h);
      elem$3 = $imul(elem$3, (1 | h));
      elem$2 = ((1 + elem$2) | 0)
    };
    let h$1 = seed;
    h$1 = this.mix__I__I__I(h$1, elem);
    h$1 = this.mix__I__I__I(h$1, elem$1);
    h$1 = this.mixLast__I__I__I(h$1, elem$3);
    return this.finalizeHash__I__I__I(h$1, elem$2)
  };
  orderedHash__sc_IterableOnce__I__I(xs, seed) {
    const it = xs.iterator__sc_Iterator();
    let h = seed;
    if ((!it.hasNext__Z())) {
      return this.finalizeHash__I__I__I(h, 0)
    };
    const x0 = it.next__O();
    if ((!it.hasNext__Z())) {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1)
    };
    const x1 = it.next__O();
    const initial = $m_sr_Statics$().anyHash__O__I(x0);
    h = this.mix__I__I__I(h, initial);
    const h0 = h;
    let prev = $m_sr_Statics$().anyHash__O__I(x1);
    const rangeDiff = ((prev - initial) | 0);
    let i = 2;
    while (it.hasNext__Z()) {
      h = this.mix__I__I__I(h, prev);
      const x = it.next__O();
      const hash = $m_sr_Statics$().anyHash__O__I(x);
      if ((rangeDiff !== ((hash - prev) | 0))) {
        h = this.mix__I__I__I(h, hash);
        i = ((1 + i) | 0);
        while (it.hasNext__Z()) {
          const $$x1 = h;
          const x$1 = it.next__O();
          h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
          i = ((1 + i) | 0)
        };
        return this.finalizeHash__I__I__I(h, i)
      };
      prev = hash;
      i = ((1 + i) | 0)
    };
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
  };
  rangeHash__I__I__I__I__I(start, step, last, seed) {
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last))
  };
  indexedSeqHash__sc_IndexedSeq__I__I(a, seed) {
    let h = seed;
    const l = a.length__I();
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const x = a.apply__I__O(0);
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
        break
      }
      default: {
        const x$1 = a.apply__I__O(0);
        const initial = $m_sr_Statics$().anyHash__O__I(x$1);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const x$2 = a.apply__I__O(1);
        let prev = $m_sr_Statics$().anyHash__O__I(x$2);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const x$3 = a.apply__I__O(i);
          const hash = $m_sr_Statics$().anyHash__O__I(x$3);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const x$4 = a.apply__I__O(i);
              h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  listHash__sci_List__I__I(xs, seed) {
    let n = 0;
    let h = seed;
    let rangeState = 0;
    let rangeDiff = 0;
    let prev = 0;
    let initial = 0;
    let elems = xs;
    while ((!elems.isEmpty__Z())) {
      const head = elems.head__O();
      const tail = $as_sci_List(elems.tail__O());
      const hash = $m_sr_Statics$().anyHash__O__I(head);
      h = this.mix__I__I__I(h, hash);
      const x1 = rangeState;
      switch (x1) {
        case 0: {
          initial = hash;
          rangeState = 1;
          break
        }
        case 1: {
          rangeDiff = ((hash - prev) | 0);
          rangeState = 2;
          break
        }
        case 2: {
          if ((rangeDiff !== ((hash - prev) | 0))) {
            rangeState = 3
          };
          break
        }
      };
      prev = hash;
      n = ((1 + n) | 0);
      elems = tail
    };
    return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n))
  };
}
const $f_s_xml_Attribute__remove__T__s_xml_MetaData = (function($thiz, key) {
  if (((!$f_s_xml_Attribute__isPrefixed__Z($thiz)) && ($thiz.s_xml_UnprefixedAttribute__f_key === key))) {
    return $thiz.s_xml_UnprefixedAttribute__f_next
  } else {
    const next = $thiz.s_xml_UnprefixedAttribute__f_next.remove__T__s_xml_MetaData(key);
    return $ct_s_xml_UnprefixedAttribute__T__sc_Seq__s_xml_MetaData__(new $c_s_xml_UnprefixedAttribute(), $thiz.s_xml_UnprefixedAttribute__f_key, $thiz.s_xml_UnprefixedAttribute__f_value, next)
  }
});
const $f_s_xml_Attribute__isPrefixed__Z = (function($thiz) {
  return false
});
const $f_s_xml_Attribute__iterator__sc_Iterator = (function($thiz) {
  if (($thiz.s_xml_UnprefixedAttribute__f_value === null)) {
    return $thiz.s_xml_UnprefixedAttribute__f_next.iterator__sc_Iterator()
  } else {
    $m_s_package$();
    const this$3 = new $c_sc_Iterator$$anon$20($thiz);
    const xs = new $c_sjsr_AnonFunction0(((this$2) => (() => this$2.s_xml_UnprefixedAttribute__f_next.iterator__sc_Iterator()))($thiz));
    return $f_sc_Iterator__concat__F0__sc_Iterator(this$3, xs)
  }
});
const $f_s_xml_Attribute__toString1__scm_StringBuilder__V = (function($thiz, sb) {
  _return: {
    if (($thiz.s_xml_UnprefixedAttribute__f_value === null)) {
      break _return
    };
    if ($f_s_xml_Attribute__isPrefixed__Z($thiz)) {
      sb.append__T__scm_StringBuilder(null).append__C__scm_StringBuilder(58)
    };
    sb.append__T__scm_StringBuilder($thiz.s_xml_UnprefixedAttribute__f_key).append__C__scm_StringBuilder(61);
    const sb2 = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
    $m_s_xml_Utility$().sequenceToXML__sc_Seq__s_xml_NamespaceBinding__scm_StringBuilder__Z__Z__Z__s_Enumeration$Value__V($thiz.s_xml_UnprefixedAttribute__f_value, $m_s_xml_TopScope$(), sb2, true, true, false, $m_s_xml_MinimizeMode$().s_xml_MinimizeMode$__f_Default);
    $m_s_xml_Utility$().appendQuoted__T__scm_StringBuilder__scm_StringBuilder(sb2.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content, sb)
  }
});
function $is_s_xml_Attribute(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_xml_Attribute)))
}
function $as_s_xml_Attribute(obj) {
  return (($is_s_xml_Attribute(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.xml.Attribute"))
}
function $isArrayOf_s_xml_Attribute(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_xml_Attribute)))
}
function $asArrayOf_s_xml_Attribute(obj, depth) {
  return (($isArrayOf_s_xml_Attribute(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.xml.Attribute;", depth))
}
class $c_s_xml_Equality$ extends $c_O {
  compareBlithely__O__T__Z(x1, x2) {
    if ((x1 instanceof $c_s_xml_Atom)) {
      const x2$2 = $as_s_xml_Atom(x1);
      const x = x2$2.s_xml_Atom__f_data;
      return ((x === null) ? (x2 === null) : $dp_equals__O__Z(x, x2))
    } else if ((x1 instanceof $c_s_xml_NodeSeq)) {
      const x3 = $as_s_xml_NodeSeq(x1);
      return (x3.text__T() === x2)
    } else {
      return false
    }
  };
  compareBlithely__O__s_xml_Node__Z(x1, x2) {
    if ((x1 instanceof $c_s_xml_NodeSeq)) {
      const x2$2 = $as_s_xml_NodeSeq(x1);
      if ((x2$2.theSeq__sc_Seq().length__I() === 1)) {
        const x$2 = $as_s_xml_Node(x2$2.theSeq__sc_Seq().apply__I__O(0));
        return ((x2 === null) ? (x$2 === null) : $p_s_xml_Equality__doComparison__O__Z__Z(x2, x$2, false))
      }
    };
    return false
  };
  compareBlithely__O__O__Z(x1, x2) {
    if (((x1 === null) || (x2 === null))) {
      return Object.is(x1, x2)
    };
    if (((typeof x2) === "string")) {
      const x2$2 = $as_T(x2);
      return this.compareBlithely__O__T__Z(x1, x2$2)
    } else if ((x2 instanceof $c_s_xml_Node)) {
      const x3 = $as_s_xml_Node(x2);
      return this.compareBlithely__O__s_xml_Node__Z(x1, x3)
    } else {
      return false
    }
  };
}
const $d_s_xml_Equality$ = new $TypeData().initClass({
  s_xml_Equality$: 0
}, false, "scala.xml.Equality$", {
  s_xml_Equality$: 1,
  O: 1
});
$c_s_xml_Equality$.prototype.$classData = $d_s_xml_Equality$;
let $n_s_xml_Equality$ = (void 0);
function $m_s_xml_Equality$() {
  if ((!$n_s_xml_Equality$)) {
    $n_s_xml_Equality$ = new $c_s_xml_Equality$()
  };
  return $n_s_xml_Equality$
}
class $c_s_xml_Utility$Escapes$ extends $c_O {
  constructor() {
    super();
    this.s_xml_Utility$Escapes$__f_pairs = null;
    this.s_xml_Utility$Escapes$__f_escMap = null;
    this.s_xml_Utility$Escapes$__f_unescMap = null;
    $n_s_xml_Utility$Escapes$ = this;
    const this$14 = $m_s_Predef$().s_Predef$__f_Map;
    const array = [new $c_T2("lt", $bC(60)), new $c_T2("gt", $bC(62)), new $c_T2("amp", $bC(38)), new $c_T2("quot", $bC(34)), new $c_T2("apos", $bC(39))];
    const elems = new $c_sjsr_WrappedVarArgs(array);
    this.s_xml_Utility$Escapes$__f_pairs = this$14.from__sc_IterableOnce__sci_Map(elems);
    const this$15 = this.s_xml_Utility$Escapes$__f_pairs;
    this.s_xml_Utility$Escapes$__f_escMap = $as_sci_Map(this$15.removed__O__sci_MapOps("apos").map__F1__sc_IterableOps(new $c_sjsr_AnonFunction1(((this$16) => ((x0$1$2) => {
      const x0$1 = $as_T2(x0$1$2);
      if ((x0$1 !== null)) {
        const s = $as_T(x0$1.T2__f__1);
        const c = $uC(x0$1.T2__f__2);
        const $$x1 = $m_sc_StringOps$();
        const array$1 = [s];
        const y = $$x1.format$extension__T__sci_Seq__T("&%s;", new $c_sjsr_WrappedVarArgs(array$1));
        return new $c_T2($bC(c), y)
      } else {
        throw new $c_s_MatchError(x0$1)
      }
    }))(this))));
    this.s_xml_Utility$Escapes$__f_unescMap = this.s_xml_Utility$Escapes$__f_pairs
  };
}
const $d_s_xml_Utility$Escapes$ = new $TypeData().initClass({
  s_xml_Utility$Escapes$: 0
}, false, "scala.xml.Utility$Escapes$", {
  s_xml_Utility$Escapes$: 1,
  O: 1
});
$c_s_xml_Utility$Escapes$.prototype.$classData = $d_s_xml_Utility$Escapes$;
let $n_s_xml_Utility$Escapes$ = (void 0);
function $m_s_xml_Utility$Escapes$() {
  if ((!$n_s_xml_Utility$Escapes$)) {
    $n_s_xml_Utility$Escapes$ = new $c_s_xml_Utility$Escapes$()
  };
  return $n_s_xml_Utility$Escapes$
}
const $f_s_xml_parsing_TokenTests__isNameStart__C__Z = (function($thiz, ch) {
  const this$1 = $m_jl_Character$();
  const x1 = ((this$1.getType__I__I(ch) << 24) >> 24);
  switch (x1) {
    case 2:
    case 1:
    case 5:
    case 3:
    case 10: {
      return true;
      break
    }
    default: {
      return $m_sc_StringOps$().contains$extension__T__C__Z(":_", ch)
    }
  }
});
class $c_Lbon_jo_phy_Phy$$$Lambda$1 extends $c_O {
  constructor(f) {
    super();
    this.Lbon_jo_phy_Phy$$$Lambda$1__f_f = null;
    this.Lbon_jo_phy_Phy$$$Lambda$1__f_f = f
  };
  create__F__F__O(x, y) {
    return (0, this.Lbon_jo_phy_Phy$$$Lambda$1__f_f)(x, y)
  };
}
const $d_Lbon_jo_phy_Phy$$$Lambda$1 = new $TypeData().initClass({
  Lbon_jo_phy_Phy$$$Lambda$1: 0
}, false, "bon.jo.phy.Phy$$$Lambda$1", {
  Lbon_jo_phy_Phy$$$Lambda$1: 1,
  O: 1,
  Lbon_jo_phy_Phy$Fact: 1
});
$c_Lbon_jo_phy_Phy$$$Lambda$1.prototype.$classData = $d_Lbon_jo_phy_Phy$$$Lambda$1;
class $c_Lbon_jo_phy_Phy$$$Lambda$2 extends $c_O {
  constructor(f) {
    super();
    this.Lbon_jo_phy_Phy$$$Lambda$2__f_f = null;
    this.Lbon_jo_phy_Phy$$$Lambda$2__f_f = f
  };
  create__F__F__O(x, y) {
    return (0, this.Lbon_jo_phy_Phy$$$Lambda$2__f_f)(x, y)
  };
}
const $d_Lbon_jo_phy_Phy$$$Lambda$2 = new $TypeData().initClass({
  Lbon_jo_phy_Phy$$$Lambda$2: 0
}, false, "bon.jo.phy.Phy$$$Lambda$2", {
  Lbon_jo_phy_Phy$$$Lambda$2: 1,
  O: 1,
  Lbon_jo_phy_Phy$Fact: 1
});
$c_Lbon_jo_phy_Phy$$$Lambda$2.prototype.$classData = $d_Lbon_jo_phy_Phy$$$Lambda$2;
class $c_Lbon_jo_phy_Phy$$$Lambda$3 extends $c_O {
  constructor(f) {
    super();
    this.Lbon_jo_phy_Phy$$$Lambda$3__f_f = null;
    this.Lbon_jo_phy_Phy$$$Lambda$3__f_f = f
  };
  create__F__F__O(x, y) {
    return (0, this.Lbon_jo_phy_Phy$$$Lambda$3__f_f)(x, y)
  };
}
const $d_Lbon_jo_phy_Phy$$$Lambda$3 = new $TypeData().initClass({
  Lbon_jo_phy_Phy$$$Lambda$3: 0
}, false, "bon.jo.phy.Phy$$$Lambda$3", {
  Lbon_jo_phy_Phy$$$Lambda$3: 1,
  O: 1,
  Lbon_jo_phy_Phy$Fact: 1
});
$c_Lbon_jo_phy_Phy$$$Lambda$3.prototype.$classData = $d_Lbon_jo_phy_Phy$$$Lambda$3;
class $c_Lbon_jo_phy_Phy$$$Lambda$4 extends $c_O {
  constructor(f) {
    super();
    this.Lbon_jo_phy_Phy$$$Lambda$4__f_f = null;
    this.Lbon_jo_phy_Phy$$$Lambda$4__f_f = f
  };
  create__F__F__O(x, y) {
    return (0, this.Lbon_jo_phy_Phy$$$Lambda$4__f_f)(x, y)
  };
}
const $d_Lbon_jo_phy_Phy$$$Lambda$4 = new $TypeData().initClass({
  Lbon_jo_phy_Phy$$$Lambda$4: 0
}, false, "bon.jo.phy.Phy$$$Lambda$4", {
  Lbon_jo_phy_Phy$$$Lambda$4: 1,
  O: 1,
  Lbon_jo_phy_Phy$Fact: 1
});
$c_Lbon_jo_phy_Phy$$$Lambda$4.prototype.$classData = $d_Lbon_jo_phy_Phy$$$Lambda$4;
const $ct_Lbon_jo_phy_Phy$XYT__Lbon_jo_phy_Phy$Fact__ = (function($thiz, fact) {
  $thiz.Lbon_jo_phy_Phy$XYT__f_fact = fact;
  return $thiz
});
class $c_Lbon_jo_phy_Phy$XYT extends $c_O {
  constructor() {
    super();
    this.Lbon_jo_phy_Phy$XYT__f_fact = null
  };
  $plus__Lbon_jo_phy_Phy$XYT__Lbon_jo_phy_Phy$XYT(other) {
    return $as_Lbon_jo_phy_Phy$XYT(this.Lbon_jo_phy_Phy$XYT__f_fact.create__F__F__O($fround((this.x__F() + other.x__F())), $fround((this.y__F() + other.y__F()))))
  };
  $minus__Lbon_jo_phy_Phy$XYT__Lbon_jo_phy_Phy$XYT(other) {
    return $as_Lbon_jo_phy_Phy$XYT(this.Lbon_jo_phy_Phy$XYT__f_fact.create__F__F__O($fround((this.x__F() - other.x__F())), $fround((this.y__F() - other.y__F()))))
  };
  carre__Lbon_jo_phy_Phy$XYT() {
    return $as_Lbon_jo_phy_Phy$XYT(this.Lbon_jo_phy_Phy$XYT__f_fact.create__F__F__O($fround((this.x__F() * this.x__F())), $fround((this.y__F() * this.y__F()))))
  };
  n2__Lbon_jo_phy_Phy$XYT__Lbon_jo_phy_Phy$XYT(other) {
    return other.$minus__Lbon_jo_phy_Phy$XYT__Lbon_jo_phy_Phy$XYT(this).carre__Lbon_jo_phy_Phy$XYT()
  };
  r2__Lbon_jo_phy_Phy$XYT__F(other) {
    const nn = this.n2__Lbon_jo_phy_Phy$XYT__Lbon_jo_phy_Phy$XYT(other);
    return $fround((nn.x__F() + nn.y__F()))
  };
  dx__Lbon_jo_phy_Phy$XYT__F(other) {
    return $fround((this.x__F() - other.x__F()))
  };
  dy__Lbon_jo_phy_Phy$XYT__F(other) {
    return $fround((this.y__F() - other.y__F()))
  };
}
function $as_Lbon_jo_phy_Phy$XYT(obj) {
  return (((obj instanceof $c_Lbon_jo_phy_Phy$XYT) || (obj === null)) ? obj : $throwClassCastException(obj, "bon.jo.phy.Phy$XYT"))
}
function $isArrayOf_Lbon_jo_phy_Phy$XYT(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lbon_jo_phy_Phy$XYT)))
}
function $asArrayOf_Lbon_jo_phy_Phy$XYT(obj, depth) {
  return (($isArrayOf_Lbon_jo_phy_Phy$XYT(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lbon.jo.phy.Phy$XYT;", depth))
}
function $is_Ljava_io_Closeable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljava_io_Closeable)))
}
function $as_Ljava_io_Closeable(obj) {
  return (($is_Ljava_io_Closeable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.Closeable"))
}
function $isArrayOf_Ljava_io_Closeable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_Closeable)))
}
function $asArrayOf_Ljava_io_Closeable(obj, depth) {
  return (($isArrayOf_Ljava_io_Closeable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.Closeable;", depth))
}
const $p_jl_Character$__getTypeGE256__I__I = (function($thiz, codePoint) {
  const a = $p_jl_Character$__charTypeIndices__AI($thiz);
  const idx = ((1 + $m_ju_Arrays$().binarySearch__AI__I__I(a, codePoint)) | 0);
  return $p_jl_Character$__charTypes__AI($thiz).get(((idx < 0) ? ((-idx) | 0) : idx))
});
const $p_jl_Character$__java$lang$Character$$charTypesFirst256$lzycompute__AI = (function($thiz) {
  if (((((1 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_java$lang$Character$$charTypesFirst256 = $makeNativeArrayWrapper($d_I.getArrayOf(), [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 12, 24, 24, 24, 26, 24, 24, 24, 21, 22, 24, 25, 24, 20, 24, 24, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 24, 24, 25, 25, 25, 24, 24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21, 24, 22, 27, 23, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 21, 25, 22, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 12, 24, 26, 26, 26, 26, 28, 24, 27, 28, 5, 29, 25, 16, 28, 27, 28, 25, 11, 11, 27, 2, 24, 24, 27, 11, 5, 30, 11, 11, 11, 24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 25, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 25, 2, 2, 2, 2, 2, 2, 2, 2]);
    $thiz.jl_Character$__f_bitmap$0 = (((1 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_java$lang$Character$$charTypesFirst256
});
const $p_jl_Character$__charTypeIndices$lzycompute__AI = (function($thiz) {
  if (((((2 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    const deltas = $makeNativeArrayWrapper($d_I.getArrayOf(), [257, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3, 2, 1, 1, 1, 2, 1, 3, 2, 4, 1, 2, 1, 3, 3, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 3, 1, 1, 1, 2, 2, 1, 1, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 2, 1, 2, 2, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 69, 1, 27, 18, 4, 12, 14, 5, 7, 1, 1, 1, 17, 112, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 3, 1, 5, 2, 1, 1, 3, 1, 1, 1, 2, 1, 17, 1, 9, 35, 1, 2, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 2, 2, 51, 48, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 38, 2, 1, 6, 1, 39, 1, 1, 1, 4, 1, 1, 45, 1, 1, 1, 2, 1, 2, 1, 1, 8, 27, 5, 3, 2, 11, 5, 1, 3, 2, 1, 2, 2, 11, 1, 2, 2, 32, 1, 10, 21, 10, 4, 2, 1, 99, 1, 1, 7, 1, 1, 6, 2, 2, 1, 4, 2, 10, 3, 2, 1, 14, 1, 1, 1, 1, 30, 27, 2, 89, 11, 1, 14, 10, 33, 9, 2, 1, 3, 1, 5, 22, 4, 1, 9, 1, 3, 1, 5, 2, 15, 1, 25, 3, 2, 1, 65, 1, 1, 11, 55, 27, 1, 3, 1, 54, 1, 1, 1, 1, 3, 8, 4, 1, 2, 1, 7, 10, 2, 2, 10, 1, 1, 6, 1, 7, 1, 1, 2, 1, 8, 2, 2, 2, 22, 1, 7, 1, 1, 3, 4, 2, 1, 1, 3, 4, 2, 2, 2, 2, 1, 1, 8, 1, 4, 2, 1, 3, 2, 2, 10, 2, 2, 6, 1, 1, 5, 2, 1, 1, 6, 4, 2, 2, 22, 1, 7, 1, 2, 1, 2, 1, 2, 2, 1, 1, 3, 2, 4, 2, 2, 3, 3, 1, 7, 4, 1, 1, 7, 10, 2, 3, 1, 11, 2, 1, 1, 9, 1, 3, 1, 22, 1, 7, 1, 2, 1, 5, 2, 1, 1, 3, 5, 1, 2, 1, 1, 2, 1, 2, 1, 15, 2, 2, 2, 10, 1, 1, 15, 1, 2, 1, 8, 2, 2, 2, 22, 1, 7, 1, 2, 1, 5, 2, 1, 1, 1, 1, 1, 4, 2, 2, 2, 2, 1, 8, 1, 1, 4, 2, 1, 3, 2, 2, 10, 1, 1, 6, 10, 1, 1, 1, 6, 3, 3, 1, 4, 3, 2, 1, 1, 1, 2, 3, 2, 3, 3, 3, 12, 4, 2, 1, 2, 3, 3, 1, 3, 1, 2, 1, 6, 1, 14, 10, 3, 6, 1, 1, 6, 3, 1, 8, 1, 3, 1, 23, 1, 10, 1, 5, 3, 1, 3, 4, 1, 3, 1, 4, 7, 2, 1, 2, 6, 2, 2, 2, 10, 8, 7, 1, 2, 2, 1, 8, 1, 3, 1, 23, 1, 10, 1, 5, 2, 1, 1, 1, 1, 5, 1, 1, 2, 1, 2, 2, 7, 2, 7, 1, 1, 2, 2, 2, 10, 1, 2, 15, 2, 1, 8, 1, 3, 1, 41, 2, 1, 3, 4, 1, 3, 1, 3, 1, 1, 8, 1, 8, 2, 2, 2, 10, 6, 3, 1, 6, 2, 2, 1, 18, 3, 24, 1, 9, 1, 1, 2, 7, 3, 1, 4, 3, 3, 1, 1, 1, 8, 18, 2, 1, 12, 48, 1, 2, 7, 4, 1, 6, 1, 8, 1, 10, 2, 37, 2, 1, 1, 2, 2, 1, 1, 2, 1, 6, 4, 1, 7, 1, 3, 1, 1, 1, 1, 2, 2, 1, 4, 1, 2, 6, 1, 2, 1, 2, 5, 1, 1, 1, 6, 2, 10, 2, 4, 32, 1, 3, 15, 1, 1, 3, 2, 6, 10, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 8, 1, 36, 4, 14, 1, 5, 1, 2, 5, 11, 1, 36, 1, 8, 1, 6, 1, 2, 5, 4, 2, 37, 43, 2, 4, 1, 6, 1, 2, 2, 2, 1, 10, 6, 6, 2, 2, 4, 3, 1, 3, 2, 7, 3, 4, 13, 1, 2, 2, 6, 1, 1, 1, 10, 3, 1, 2, 38, 1, 1, 5, 1, 2, 43, 1, 1, 332, 1, 4, 2, 7, 1, 1, 1, 4, 2, 41, 1, 4, 2, 33, 1, 4, 2, 7, 1, 1, 1, 4, 2, 15, 1, 57, 1, 4, 2, 67, 2, 3, 9, 20, 3, 16, 10, 6, 85, 11, 1, 620, 2, 17, 1, 26, 1, 1, 3, 75, 3, 3, 15, 13, 1, 4, 3, 11, 18, 3, 2, 9, 18, 2, 12, 13, 1, 3, 1, 2, 12, 52, 2, 1, 7, 8, 1, 2, 11, 3, 1, 3, 1, 1, 1, 2, 10, 6, 10, 6, 6, 1, 4, 3, 1, 1, 10, 6, 35, 1, 52, 8, 41, 1, 1, 5, 70, 10, 29, 3, 3, 4, 2, 3, 4, 2, 1, 6, 3, 4, 1, 3, 2, 10, 30, 2, 5, 11, 44, 4, 17, 7, 2, 6, 10, 1, 3, 34, 23, 2, 3, 2, 2, 53, 1, 1, 1, 7, 1, 1, 1, 1, 2, 8, 6, 10, 2, 1, 10, 6, 10, 6, 7, 1, 6, 82, 4, 1, 47, 1, 1, 5, 1, 1, 5, 1, 2, 7, 4, 10, 7, 10, 9, 9, 3, 2, 1, 30, 1, 4, 2, 2, 1, 1, 2, 2, 10, 44, 1, 1, 2, 3, 1, 1, 3, 2, 8, 4, 36, 8, 8, 2, 2, 3, 5, 10, 3, 3, 10, 30, 6, 2, 64, 8, 8, 3, 1, 13, 1, 7, 4, 1, 4, 2, 1, 2, 9, 44, 63, 13, 1, 34, 37, 39, 21, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 8, 6, 2, 6, 2, 8, 8, 8, 8, 6, 2, 6, 2, 8, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 14, 2, 8, 8, 8, 8, 8, 8, 5, 1, 2, 4, 1, 1, 1, 3, 3, 1, 2, 4, 1, 3, 4, 2, 2, 4, 1, 3, 8, 5, 3, 2, 3, 1, 2, 4, 1, 2, 1, 11, 5, 6, 2, 1, 1, 1, 2, 1, 1, 1, 8, 1, 1, 5, 1, 9, 1, 1, 4, 2, 3, 1, 1, 1, 11, 1, 1, 1, 10, 1, 5, 5, 6, 1, 1, 2, 6, 3, 1, 1, 1, 10, 3, 1, 1, 1, 13, 3, 32, 16, 13, 4, 1, 3, 12, 15, 2, 1, 4, 1, 2, 1, 3, 2, 3, 1, 1, 1, 2, 1, 5, 6, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 4, 1, 2, 2, 2, 5, 1, 4, 1, 1, 2, 1, 1, 16, 35, 1, 1, 4, 1, 6, 5, 5, 2, 4, 1, 2, 1, 2, 1, 7, 1, 31, 2, 2, 1, 1, 1, 31, 268, 8, 4, 20, 2, 7, 1, 1, 81, 1, 30, 25, 40, 6, 18, 12, 39, 25, 11, 21, 60, 78, 22, 183, 1, 9, 1, 54, 8, 111, 1, 144, 1, 103, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 30, 44, 5, 1, 1, 31, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 256, 131, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 63, 1, 1, 1, 1, 32, 1, 1, 258, 48, 21, 2, 6, 3, 10, 166, 47, 1, 47, 1, 1, 1, 3, 2, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 1, 6, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 6, 1, 1, 1, 1, 3, 1, 1, 5, 4, 1, 2, 38, 1, 1, 5, 1, 2, 56, 7, 1, 1, 14, 1, 23, 9, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 32, 2, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 9, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 10, 2, 68, 26, 1, 89, 12, 214, 26, 12, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 9, 4, 2, 1, 5, 2, 3, 1, 1, 1, 2, 1, 86, 2, 2, 2, 2, 1, 1, 90, 1, 3, 1, 5, 41, 3, 94, 1, 2, 4, 10, 27, 5, 36, 12, 16, 31, 1, 10, 30, 8, 1, 15, 32, 10, 39, 15, 320, 6582, 10, 64, 20941, 51, 21, 1, 1143, 3, 55, 9, 40, 6, 2, 268, 1, 3, 16, 10, 2, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 70, 10, 2, 6, 8, 23, 9, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 77, 2, 1, 7, 1, 3, 1, 4, 1, 23, 2, 2, 1, 4, 4, 6, 2, 1, 1, 6, 52, 4, 8, 2, 50, 16, 1, 9, 2, 10, 6, 18, 6, 3, 1, 4, 10, 28, 8, 2, 23, 11, 2, 11, 1, 29, 3, 3, 1, 47, 1, 2, 4, 2, 1, 4, 13, 1, 1, 10, 4, 2, 32, 41, 6, 2, 2, 2, 2, 9, 3, 1, 8, 1, 1, 2, 10, 2, 4, 16, 1, 6, 3, 1, 1, 4, 48, 1, 1, 3, 2, 2, 5, 2, 1, 1, 1, 24, 2, 1, 2, 11, 1, 2, 2, 2, 1, 2, 1, 1, 10, 6, 2, 6, 2, 6, 9, 7, 1, 7, 145, 35, 2, 1, 2, 1, 2, 1, 1, 1, 2, 10, 6, 11172, 12, 23, 4, 49, 4, 2048, 6400, 366, 2, 106, 38, 7, 12, 5, 5, 1, 1, 10, 1, 13, 1, 5, 1, 1, 1, 2, 1, 2, 1, 108, 16, 17, 363, 1, 1, 16, 64, 2, 54, 40, 12, 1, 1, 2, 16, 7, 1, 1, 1, 6, 7, 9, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 4, 3, 3, 1, 4, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 2, 4, 5, 1, 135, 2, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 2, 10, 2, 3, 2, 26, 1, 1, 1, 1, 1, 1, 26, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 10, 1, 45, 2, 31, 3, 6, 2, 6, 2, 6, 2, 3, 3, 2, 1, 1, 1, 2, 1, 1, 4, 2, 10, 3, 2, 2, 12, 1, 26, 1, 19, 1, 2, 1, 15, 2, 14, 34, 123, 5, 3, 4, 45, 3, 9, 53, 4, 17, 1, 5, 12, 52, 45, 1, 130, 29, 3, 49, 47, 31, 1, 4, 12, 17, 1, 8, 1, 53, 30, 1, 1, 36, 4, 8, 1, 5, 42, 40, 40, 78, 2, 10, 854, 6, 2, 1, 1, 44, 1, 2, 3, 1, 2, 23, 1, 1, 8, 160, 22, 6, 3, 1, 26, 5, 1, 64, 56, 6, 2, 64, 1, 3, 1, 2, 5, 4, 4, 1, 3, 1, 27, 4, 3, 4, 1, 8, 8, 9, 7, 29, 2, 1, 128, 54, 3, 7, 22, 2, 8, 19, 5, 8, 128, 73, 535, 31, 385, 1, 1, 1, 53, 15, 7, 4, 20, 10, 16, 2, 1, 45, 3, 4, 2, 2, 2, 1, 4, 14, 25, 7, 10, 6, 3, 36, 5, 1, 8, 1, 10, 4, 60, 2, 1, 48, 3, 9, 2, 4, 4, 7, 10, 1190, 43, 1, 1, 1, 2, 6, 1, 1, 8, 10, 2358, 879, 145, 99, 13, 4, 2956, 1071, 13265, 569, 1223, 69, 11, 1, 46, 16, 4, 13, 16480, 2, 8190, 246, 10, 39, 2, 60, 2, 3, 3, 6, 8, 8, 2, 7, 30, 4, 48, 34, 66, 3, 1, 186, 87, 9, 18, 142, 26, 26, 26, 7, 1, 18, 26, 26, 1, 1, 2, 2, 1, 2, 2, 2, 4, 1, 8, 4, 1, 1, 1, 7, 1, 11, 26, 26, 2, 1, 4, 2, 8, 1, 7, 1, 26, 2, 1, 4, 1, 5, 1, 1, 3, 7, 1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 28, 2, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 1, 1, 2, 50, 5632, 4, 1, 27, 1, 2, 1, 1, 2, 1, 1, 10, 1, 4, 1, 1, 1, 1, 6, 1, 4, 1, 1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 4, 1, 7, 1, 4, 1, 4, 1, 1, 1, 10, 1, 17, 5, 3, 1, 5, 1, 17, 52, 2, 270, 44, 4, 100, 12, 15, 2, 14, 2, 15, 1, 15, 32, 11, 5, 31, 1, 60, 4, 43, 75, 29, 13, 43, 5, 9, 7, 2, 174, 33, 15, 6, 1, 70, 3, 20, 12, 37, 1, 5, 21, 17, 15, 63, 1, 1, 1, 182, 1, 4, 3, 62, 2, 4, 12, 24, 147, 70, 4, 11, 48, 70, 58, 116, 2188, 42711, 41, 4149, 11, 222, 16354, 542, 722403, 1, 30, 96, 128, 240, 65040, 65534, 2, 65534]);
    $thiz.jl_Character$__f_charTypeIndices = $p_jl_Character$__uncompressDeltas__AI__AI($thiz, deltas);
    $thiz.jl_Character$__f_bitmap$0 = (((2 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_charTypeIndices
});
const $p_jl_Character$__charTypeIndices__AI = (function($thiz) {
  return (((((2 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__charTypeIndices$lzycompute__AI($thiz) : $thiz.jl_Character$__f_charTypeIndices)
});
const $p_jl_Character$__charTypes$lzycompute__AI = (function($thiz) {
  if (((((4 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_charTypes = $makeNativeArrayWrapper($d_I.getArrayOf(), [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 1, 2, 5, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 4, 27, 4, 27, 4, 27, 4, 27, 4, 27, 6, 1, 2, 1, 2, 4, 27, 1, 2, 0, 4, 2, 24, 0, 27, 1, 24, 1, 0, 1, 0, 1, 2, 1, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 25, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 28, 6, 7, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 0, 4, 24, 0, 2, 0, 24, 20, 0, 26, 0, 6, 20, 6, 24, 6, 24, 6, 24, 6, 0, 5, 0, 5, 24, 0, 16, 0, 25, 24, 26, 24, 28, 6, 24, 0, 24, 5, 4, 5, 6, 9, 24, 5, 6, 5, 24, 5, 6, 16, 28, 6, 4, 6, 28, 6, 5, 9, 5, 28, 5, 24, 0, 16, 5, 6, 5, 6, 0, 5, 6, 5, 0, 9, 5, 6, 4, 28, 24, 4, 0, 5, 6, 4, 6, 4, 6, 4, 6, 0, 24, 0, 5, 6, 0, 24, 0, 5, 0, 5, 0, 6, 0, 6, 8, 5, 6, 8, 6, 5, 8, 6, 8, 6, 8, 5, 6, 5, 6, 24, 9, 24, 4, 5, 0, 5, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 0, 8, 0, 8, 6, 5, 0, 8, 0, 5, 0, 5, 6, 0, 9, 5, 26, 11, 28, 26, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 0, 8, 6, 0, 6, 0, 6, 0, 6, 0, 5, 0, 5, 0, 9, 6, 5, 6, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 0, 6, 8, 0, 8, 6, 0, 5, 0, 5, 6, 0, 9, 24, 26, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 8, 6, 0, 8, 0, 8, 6, 0, 6, 8, 0, 5, 0, 5, 6, 0, 9, 28, 5, 11, 0, 6, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 8, 6, 8, 0, 8, 0, 8, 6, 0, 5, 0, 8, 0, 9, 11, 28, 26, 28, 0, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 6, 8, 0, 6, 0, 6, 0, 6, 0, 5, 0, 5, 6, 0, 9, 0, 11, 28, 0, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 8, 0, 6, 8, 0, 8, 6, 0, 8, 0, 5, 0, 5, 6, 0, 9, 0, 5, 0, 8, 0, 5, 0, 5, 0, 5, 0, 5, 8, 6, 0, 8, 0, 8, 6, 5, 0, 8, 0, 5, 6, 0, 9, 11, 0, 28, 5, 0, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 0, 8, 6, 0, 6, 0, 8, 0, 8, 24, 0, 5, 6, 5, 6, 0, 26, 5, 4, 6, 24, 9, 24, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 6, 5, 6, 0, 6, 5, 0, 5, 0, 4, 0, 6, 0, 9, 0, 5, 0, 5, 28, 24, 28, 24, 28, 6, 28, 9, 11, 28, 6, 28, 6, 28, 6, 21, 22, 21, 22, 8, 5, 0, 5, 0, 6, 8, 6, 24, 6, 5, 6, 0, 6, 0, 28, 6, 28, 0, 28, 24, 28, 24, 0, 5, 8, 6, 8, 6, 8, 6, 8, 6, 5, 9, 24, 5, 8, 6, 5, 6, 5, 8, 5, 8, 5, 6, 5, 6, 8, 6, 8, 6, 5, 8, 9, 8, 6, 28, 1, 0, 1, 0, 1, 0, 5, 24, 4, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 24, 11, 0, 5, 28, 0, 5, 0, 20, 5, 24, 5, 12, 5, 21, 22, 0, 5, 24, 10, 0, 5, 0, 5, 6, 0, 5, 6, 24, 0, 5, 6, 0, 5, 0, 5, 0, 6, 0, 5, 6, 8, 6, 8, 6, 8, 6, 24, 4, 24, 26, 5, 6, 0, 9, 0, 11, 0, 24, 20, 24, 6, 12, 0, 9, 0, 5, 4, 5, 0, 5, 6, 5, 0, 5, 0, 5, 0, 6, 8, 6, 8, 0, 8, 6, 8, 6, 0, 28, 0, 24, 9, 5, 0, 5, 0, 5, 0, 8, 5, 8, 0, 9, 11, 0, 28, 5, 6, 8, 0, 24, 5, 8, 6, 8, 6, 0, 6, 8, 6, 8, 6, 8, 6, 0, 6, 9, 0, 9, 0, 24, 4, 24, 0, 6, 8, 5, 6, 8, 6, 8, 6, 8, 6, 8, 5, 0, 9, 24, 28, 6, 28, 0, 6, 8, 5, 8, 6, 8, 6, 8, 6, 8, 5, 9, 5, 6, 8, 6, 8, 6, 8, 6, 8, 0, 24, 5, 8, 6, 8, 6, 0, 24, 9, 0, 5, 9, 5, 4, 24, 0, 24, 0, 6, 24, 6, 8, 6, 5, 6, 5, 8, 6, 5, 0, 2, 4, 2, 4, 2, 4, 6, 0, 6, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 0, 2, 1, 2, 1, 2, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 2, 0, 2, 3, 2, 3, 2, 3, 2, 0, 2, 1, 3, 27, 2, 27, 2, 0, 2, 1, 3, 27, 2, 0, 2, 1, 0, 27, 2, 1, 27, 0, 2, 0, 2, 1, 3, 27, 0, 12, 16, 20, 24, 29, 30, 21, 29, 30, 21, 29, 24, 13, 14, 16, 12, 24, 29, 30, 24, 23, 24, 25, 21, 22, 24, 25, 24, 23, 24, 12, 16, 0, 16, 11, 4, 0, 11, 25, 21, 22, 4, 11, 25, 21, 22, 0, 4, 0, 26, 0, 6, 7, 6, 7, 6, 0, 28, 1, 28, 1, 28, 2, 1, 2, 1, 2, 28, 1, 28, 25, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 2, 1, 2, 5, 2, 28, 2, 1, 25, 1, 2, 28, 25, 28, 2, 28, 11, 10, 1, 2, 10, 11, 0, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 21, 22, 28, 25, 28, 25, 28, 25, 28, 0, 28, 0, 28, 0, 11, 28, 11, 28, 25, 28, 25, 28, 25, 28, 25, 28, 0, 28, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 11, 28, 25, 21, 22, 25, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 25, 28, 25, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 25, 21, 22, 21, 22, 25, 21, 22, 25, 28, 25, 28, 25, 0, 28, 0, 1, 0, 2, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 28, 1, 2, 1, 2, 6, 1, 2, 0, 24, 11, 24, 2, 0, 2, 0, 2, 0, 5, 0, 4, 24, 0, 6, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 24, 29, 30, 29, 30, 24, 29, 30, 24, 29, 30, 24, 20, 24, 20, 24, 29, 30, 24, 29, 30, 21, 22, 21, 22, 21, 22, 21, 22, 24, 4, 24, 20, 0, 28, 0, 28, 0, 28, 0, 28, 0, 12, 24, 28, 4, 5, 10, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 28, 21, 22, 21, 22, 21, 22, 21, 22, 20, 21, 22, 28, 10, 6, 8, 20, 4, 28, 10, 4, 5, 24, 28, 0, 5, 0, 6, 27, 4, 5, 20, 5, 24, 4, 5, 0, 5, 0, 5, 0, 28, 11, 28, 5, 0, 28, 0, 5, 28, 0, 11, 28, 11, 28, 11, 28, 11, 28, 11, 28, 5, 0, 28, 5, 0, 5, 4, 5, 0, 28, 0, 5, 4, 24, 5, 4, 24, 5, 9, 5, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 6, 7, 24, 6, 24, 4, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 6, 5, 10, 6, 24, 0, 27, 4, 27, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 27, 1, 2, 1, 2, 0, 1, 2, 1, 2, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 4, 2, 5, 6, 5, 6, 5, 6, 5, 8, 6, 8, 28, 0, 11, 28, 26, 28, 0, 5, 24, 0, 8, 5, 8, 6, 0, 24, 9, 0, 6, 5, 24, 5, 0, 9, 5, 6, 24, 5, 6, 8, 0, 24, 5, 0, 6, 8, 5, 6, 8, 6, 8, 6, 8, 24, 0, 4, 9, 0, 24, 0, 5, 6, 8, 6, 8, 6, 0, 5, 6, 5, 6, 8, 0, 9, 0, 24, 5, 4, 5, 28, 5, 8, 0, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 0, 5, 4, 24, 5, 8, 6, 8, 24, 5, 4, 8, 6, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 8, 6, 8, 6, 8, 24, 8, 6, 0, 9, 0, 5, 0, 5, 0, 5, 0, 19, 18, 5, 0, 5, 0, 2, 0, 2, 0, 5, 6, 5, 25, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 27, 0, 5, 21, 22, 0, 5, 0, 5, 0, 5, 26, 28, 0, 6, 24, 21, 22, 24, 0, 6, 0, 24, 20, 23, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 24, 21, 22, 24, 23, 24, 0, 24, 20, 21, 22, 21, 22, 21, 22, 24, 25, 20, 25, 0, 24, 26, 24, 0, 5, 0, 5, 0, 16, 0, 24, 26, 24, 21, 22, 24, 25, 24, 20, 24, 9, 24, 25, 24, 1, 21, 24, 22, 27, 23, 27, 2, 21, 25, 22, 25, 21, 22, 24, 21, 22, 24, 5, 4, 5, 4, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 26, 25, 27, 28, 26, 0, 28, 25, 28, 0, 16, 28, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 24, 0, 11, 0, 28, 10, 11, 28, 11, 0, 28, 0, 28, 6, 0, 5, 0, 5, 0, 5, 0, 11, 0, 5, 10, 5, 10, 0, 5, 0, 24, 5, 0, 5, 24, 10, 0, 1, 2, 5, 0, 9, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 24, 11, 0, 5, 11, 0, 24, 5, 0, 24, 0, 5, 0, 5, 0, 5, 6, 0, 6, 0, 6, 5, 0, 5, 0, 5, 0, 6, 0, 6, 11, 0, 24, 0, 5, 11, 24, 0, 5, 0, 24, 5, 0, 11, 5, 0, 11, 0, 5, 0, 11, 0, 8, 6, 8, 5, 6, 24, 0, 11, 9, 0, 6, 8, 5, 8, 6, 8, 6, 24, 16, 24, 0, 5, 0, 9, 0, 6, 5, 6, 8, 6, 0, 9, 24, 0, 6, 8, 5, 8, 6, 8, 5, 24, 0, 9, 0, 5, 6, 8, 6, 8, 6, 8, 6, 0, 9, 0, 5, 0, 10, 0, 24, 0, 5, 0, 5, 0, 5, 0, 5, 8, 0, 6, 4, 0, 5, 0, 28, 0, 28, 0, 28, 8, 6, 28, 8, 16, 6, 28, 6, 28, 6, 28, 0, 28, 6, 28, 0, 28, 0, 11, 0, 1, 2, 1, 2, 0, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 2, 0, 2, 0, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 2, 0, 9, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 25, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 11, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 5, 0, 5, 0, 5, 0, 5, 0, 16, 0, 16, 0, 6, 0, 18, 0, 18, 0]);
    $thiz.jl_Character$__f_bitmap$0 = (((4 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_charTypes
});
const $p_jl_Character$__charTypes__AI = (function($thiz) {
  return (((((4 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__charTypes$lzycompute__AI($thiz) : $thiz.jl_Character$__f_charTypes)
});
const $p_jl_Character$__uncompressDeltas__AI__AI = (function($thiz, deltas) {
  let acc = deltas.get(0);
  let i = 1;
  const len = deltas.u.length;
  while ((i !== len)) {
    acc = ((acc + deltas.get(i)) | 0);
    deltas.set(i, acc);
    i = ((1 + i) | 0)
  };
  return deltas
});
const $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI = (function($thiz) {
  if (((((16 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = $makeNativeArrayWrapper($d_I.getArrayOf(), [1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]);
    $thiz.jl_Character$__f_bitmap$0 = (((16 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints
});
const $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI = (function($thiz) {
  return (((((16 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints)
});
class $c_jl_Character$ extends $c_O {
  constructor() {
    super();
    this.jl_Character$__f_java$lang$Character$$charTypesFirst256 = null;
    this.jl_Character$__f_charTypeIndices = null;
    this.jl_Character$__f_charTypes = null;
    this.jl_Character$__f_isMirroredIndices = null;
    this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
    this.jl_Character$__f_bitmap$0 = 0
  };
  getType__I__I(codePoint) {
    return ((codePoint < 0) ? 0 : ((codePoint < 256) ? this.java$lang$Character$$charTypesFirst256__AI().get(codePoint) : $p_jl_Character$__getTypeGE256__I__I(this, codePoint)))
  };
  digitWithValidRadix__I__I__I(codePoint, radix) {
    let value;
    if ((codePoint < 256)) {
      value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))))
    } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
      value = (((-65303) + codePoint) | 0)
    } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
      value = (((-65335) + codePoint) | 0)
    } else {
      const a = $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this);
      const p = $m_ju_Arrays$().binarySearch__AI__I__I(a, codePoint);
      const zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
      if ((zeroCodePointIndex < 0)) {
        value = (-1)
      } else {
        const v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).get(zeroCodePointIndex)) | 0);
        value = ((v > 9) ? (-1) : v)
      }
    };
    return ((value < radix) ? value : (-1))
  };
  java$lang$Character$$charTypesFirst256__AI() {
    return (((((1 & this.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__java$lang$Character$$charTypesFirst256$lzycompute__AI(this) : this.jl_Character$__f_java$lang$Character$$charTypesFirst256)
  };
}
const $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
let $n_jl_Character$ = (void 0);
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
const $p_jl_Integer$__fail$1__T__E = (function($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
});
class $c_jl_Integer$ extends $c_O {
  parseInt__T__I__I(s, radix) {
    const len = ((s === null) ? 0 : $uI(s.length));
    if ((((len === 0) || (radix < 2)) || (radix > 36))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    const firstChar = (65535 & $uI(s.charCodeAt(0)));
    const negative = (firstChar === 45);
    const maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
    let i = ((negative || (firstChar === 43)) ? 1 : 0);
    if ((i >= $uI(s.length))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    let result = 0.0;
    while ((i !== len)) {
      const $$x1 = $m_jl_Character$();
      const index = i;
      const digit = $$x1.digitWithValidRadix__I__I__I((65535 & $uI(s.charCodeAt(index))), radix);
      result = ((result * radix) + digit);
      if (((digit === (-1)) || (result > maxAbsValue))) {
        $p_jl_Integer$__fail$1__T__E(this, s)
      };
      i = ((1 + i) | 0)
    };
    if (negative) {
      const n = (-result);
      return $uI((n | 0))
    } else {
      const n$1 = result;
      return $uI((n$1 | 0))
    }
  };
  bitCount__I__I(i) {
    const t1 = ((i - (1431655765 & (i >> 1))) | 0);
    const t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
    return ($imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24)
  };
}
const $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
let $n_jl_Integer$ = (void 0);
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
class $c_jl_Long$ extends $c_O {
  constructor() {
    super();
    this.jl_Long$__f_StringRadixInfos = null;
    this.jl_Long$__f_bitmap$0 = false
  };
  java$lang$Long$$toHexString__I__I__T(lo, hi) {
    if ((hi !== 0)) {
      const $$x1 = $as_T($uD((hi >>> 0)).toString(16));
      const s = $as_T($uD((lo >>> 0)).toString(16));
      const beginIndex = $uI(s.length);
      return ($$x1 + (("" + $as_T("00000000".substring(beginIndex))) + s))
    } else {
      return $as_T($uD((lo >>> 0)).toString(16))
    }
  };
  java$lang$Long$$toOctalString__I__I__T(lo, hi) {
    const lp = (1073741823 & lo);
    const mp = (1073741823 & ((((lo >>> 30) | 0) + (hi << 2)) | 0));
    const hp = ((hi >>> 28) | 0);
    if ((hp !== 0)) {
      const $$x2 = $as_T($uD((hp >>> 0)).toString(8));
      const s = $as_T($uD((mp >>> 0)).toString(8));
      const beginIndex = $uI(s.length);
      const $$x1 = $as_T("0000000000".substring(beginIndex));
      const s$1 = $as_T($uD((lp >>> 0)).toString(8));
      const beginIndex$1 = $uI(s$1.length);
      return (($$x2 + (("" + $$x1) + s)) + (("" + $as_T("0000000000".substring(beginIndex$1))) + s$1))
    } else if ((mp !== 0)) {
      const $$x3 = $as_T($uD((mp >>> 0)).toString(8));
      const s$2 = $as_T($uD((lp >>> 0)).toString(8));
      const beginIndex$2 = $uI(s$2.length);
      return ($$x3 + (("" + $as_T("0000000000".substring(beginIndex$2))) + s$2))
    } else {
      return $as_T($uD((lp >>> 0)).toString(8))
    }
  };
}
const $d_jl_Long$ = new $TypeData().initClass({
  jl_Long$: 0
}, false, "java.lang.Long$", {
  jl_Long$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Long$.prototype.$classData = $d_jl_Long$;
let $n_jl_Long$ = (void 0);
function $m_jl_Long$() {
  if ((!$n_jl_Long$)) {
    $n_jl_Long$ = new $c_jl_Long$()
  };
  return $n_jl_Long$
}
class $c_jl_Number extends $c_O {
}
function $is_jl_Number(obj) {
  return ((obj instanceof $c_jl_Number) || ((typeof obj) === "number"))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
class $c_jl_String$ extends $c_O {
  constructor() {
    super();
    this.jl_String$__f_CASE_INSENSITIVE_ORDER = null;
    this.jl_String$__f_bitmap$0 = false
  };
  new__AC__I__I__T(value, offset, count) {
    const end = ((offset + count) | 0);
    if ((((offset < 0) || (end < offset)) || (end > value.u.length))) {
      throw $ct_jl_StringIndexOutOfBoundsException__(new $c_jl_StringIndexOutOfBoundsException())
    };
    let result = "";
    let i = offset;
    while ((i !== end)) {
      const $$x1 = result;
      const this$1 = value.get(i);
      result = (("" + $$x1) + $as_T(String.fromCharCode(this$1)));
      i = ((1 + i) | 0)
    };
    return result
  };
  format__T__AO__T(format, args) {
    const frm = $ct_ju_Formatter__(new $c_ju_Formatter());
    const res = frm.format__T__AO__ju_Formatter(format, args).toString__T();
    frm.close__V();
    return res
  };
  java$lang$_String$$fromCodePoint__I__T(codePoint) {
    if ((((-65536) & codePoint) === 0)) {
      return $as_T(String.fromCharCode(codePoint))
    } else if (((codePoint < 0) || (codePoint > 1114111))) {
      throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
    } else {
      const offsetCp = (((-65536) + codePoint) | 0);
      return $as_T(String.fromCharCode((55296 | (offsetCp >> 10)), (56320 | (1023 & offsetCp))))
    }
  };
}
const $d_jl_String$ = new $TypeData().initClass({
  jl_String$: 0
}, false, "java.lang.String$", {
  jl_String$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_String$.prototype.$classData = $d_jl_String$;
let $n_jl_String$ = (void 0);
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$()
  };
  return $n_jl_String$
}
const $ct_jl_Throwable__T__jl_Throwable__Z__Z__ = (function($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_e = e;
  $thiz.jl_Throwable__f_enableSuppression = enableSuppression;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
});
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
    this.jl_Throwable__f_e = null;
    this.jl_Throwable__f_enableSuppression = false;
    this.jl_Throwable__f_writableStackTrace = false;
    this.jl_Throwable__f_stackTraceStateInternal = null;
    this.jl_Throwable__f_stackTrace = null;
    this.jl_Throwable__f_suppressed = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    const identifyingString = Object.prototype.toString.call(this);
    if ((identifyingString === "[object Error]")) {
      this.jl_Throwable__f_stackTraceStateInternal = this
    } else {
      const x = Error.captureStackTrace;
      if ((x === (void 0))) {
        const e = new Error();
        this.jl_Throwable__f_stackTraceStateInternal = e
      } else {
        Error.captureStackTrace(this);
        this.jl_Throwable__f_stackTraceStateInternal = this
      }
    };
    return this
  };
  toString__T() {
    const className = $objectGetClass(this).getName__T();
    const message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  $js$exported$meth$toString__O() {
    return this.toString__T()
  };
  $js$exported$prop$name__O() {
    return $objectGetClass(this).getName__T()
  };
  $js$exported$prop$message__O() {
    const m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    return this.$js$exported$prop$message__O()
  };
  get "name"() {
    return this.$js$exported$prop$name__O()
  };
  "toString"() {
    return this.$js$exported$meth$toString__O()
  };
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
}
const $p_ju_Random__loop$1__I__I = (function($thiz, n$1) {
  while (true) {
    const bits = $thiz.next__I__I(31);
    const value = $intMod(bits, n$1);
    if ((((((bits - value) | 0) + (((-1) + n$1) | 0)) | 0) < 0)) {
      /*<skip>*/
    } else {
      return value
    }
  }
});
const $ct_ju_Random__J__ = (function($thiz, seed_in) {
  $thiz.ju_Random__f_haveNextNextGaussian = false;
  $thiz.setSeed__J__V(seed_in);
  return $thiz
});
const $ct_ju_Random__ = (function($thiz) {
  $ct_ju_Random__J__($thiz, $m_ju_Random$().java$util$Random$$randomSeed__J());
  return $thiz
});
class $c_ju_Random extends $c_O {
  constructor() {
    super();
    this.ju_Random__f_seedHi = 0;
    this.ju_Random__f_seedLo = 0;
    this.ju_Random__f_nextNextGaussian = 0.0;
    this.ju_Random__f_haveNextNextGaussian = false
  };
  setSeed__J__V(seed_in) {
    const lo = ((-554899859) ^ seed_in.RTLong__f_lo);
    const hi = (5 ^ seed_in.RTLong__f_hi);
    const hi$1 = (65535 & hi);
    const lo$1 = (((lo >>> 24) | 0) | (hi$1 << 8));
    this.ju_Random__f_seedHi = lo$1;
    this.ju_Random__f_seedLo = (16777215 & lo);
    this.ju_Random__f_haveNextNextGaussian = false
  };
  next__I__I(bits) {
    const oldSeedHi = this.ju_Random__f_seedHi;
    const oldSeedLo = this.ju_Random__f_seedLo;
    const loProd = (11.0 + (1.5525485E7 * oldSeedLo));
    const hiProd = ((1502.0 * oldSeedLo) + (1.5525485E7 * oldSeedHi));
    const x = (loProd / 1.6777216E7);
    const newSeedHi = (16777215 & (($uI((x | 0)) + (16777215 & $uI((hiProd | 0)))) | 0));
    const newSeedLo = (16777215 & $uI((loProd | 0)));
    this.ju_Random__f_seedHi = newSeedHi;
    this.ju_Random__f_seedLo = newSeedLo;
    const result32 = ((newSeedHi << 8) | (newSeedLo >> 16));
    return ((result32 >>> ((32 - bits) | 0)) | 0)
  };
  nextDouble__D() {
    return (((1.34217728E8 * this.next__I__I(26)) + this.next__I__I(27)) / 9.007199254740992E15)
  };
  nextInt__I__I(n) {
    if ((n <= 0)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "n must be positive")
    } else {
      return (((n & ((-n) | 0)) === n) ? (this.next__I__I(31) >> $clz32(n)) : $p_ju_Random__loop$1__I__I(this, n))
    }
  };
}
const $d_ju_Random = new $TypeData().initClass({
  ju_Random: 0
}, false, "java.util.Random", {
  ju_Random: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_Random.prototype.$classData = $d_ju_Random;
const $p_ju_Random$__randomInt__I = (function($thiz) {
  const a = (4.294967296E9 * $uD(Math.random()));
  return $doubleToInt(((-2.147483648E9) + $uD(Math.floor(a))))
});
class $c_ju_Random$ extends $c_O {
  java$util$Random$$randomSeed__J() {
    const value = $p_ju_Random$__randomInt__I(this);
    const value$1 = $p_ju_Random$__randomInt__I(this);
    return new $c_RTLong(value$1, value)
  };
}
const $d_ju_Random$ = new $TypeData().initClass({
  ju_Random$: 0
}, false, "java.util.Random$", {
  ju_Random$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_Random$.prototype.$classData = $d_ju_Random$;
let $n_ju_Random$ = (void 0);
function $m_ju_Random$() {
  if ((!$n_ju_Random$)) {
    $n_ju_Random$ = new $c_ju_Random$()
  };
  return $n_ju_Random$
}
const $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult = (function($thiz) {
  if (($thiz.ju_regex_Matcher__f_lastMatch === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "No match available")
  };
  return $thiz.ju_regex_Matcher__f_lastMatch
});
class $c_ju_regex_Matcher extends $c_O {
  constructor(pattern0, input0, regionStart0, regionEnd0) {
    super();
    this.ju_regex_Matcher__f_pattern0 = null;
    this.ju_regex_Matcher__f_input0 = null;
    this.ju_regex_Matcher__f_regionStart0 = 0;
    this.ju_regex_Matcher__f_regionEnd0 = 0;
    this.ju_regex_Matcher__f_regexp = null;
    this.ju_regex_Matcher__f_inputstr = null;
    this.ju_regex_Matcher__f_lastMatch = null;
    this.ju_regex_Matcher__f_lastMatchIsValid = false;
    this.ju_regex_Matcher__f_canStillFind = false;
    this.ju_regex_Matcher__f_appendPos = 0;
    this.ju_regex_Matcher__f_startOfGroupCache = null;
    this.ju_regex_Matcher__f_pattern0 = pattern0;
    this.ju_regex_Matcher__f_input0 = input0;
    this.ju_regex_Matcher__f_regionStart0 = regionStart0;
    this.ju_regex_Matcher__f_regionEnd0 = regionEnd0;
    this.ju_regex_Matcher__f_regexp = this.ju_regex_Matcher__f_pattern0.newJSRegExp__sjs_js_RegExp();
    this.ju_regex_Matcher__f_inputstr = $dp_toString__T($dp_subSequence__I__I__jl_CharSequence(this.ju_regex_Matcher__f_input0, this.ju_regex_Matcher__f_regionStart0, this.ju_regex_Matcher__f_regionEnd0));
    this.ju_regex_Matcher__f_lastMatch = null;
    this.ju_regex_Matcher__f_lastMatchIsValid = false;
    this.ju_regex_Matcher__f_canStillFind = true;
    this.ju_regex_Matcher__f_appendPos = 0
  };
  find__Z() {
    if (this.ju_regex_Matcher__f_canStillFind) {
      this.ju_regex_Matcher__f_lastMatchIsValid = true;
      this.ju_regex_Matcher__f_lastMatch = this.ju_regex_Matcher__f_regexp.exec(this.ju_regex_Matcher__f_inputstr);
      if ((this.ju_regex_Matcher__f_lastMatch !== null)) {
        const value = this.ju_regex_Matcher__f_lastMatch[0];
        if ((value === (void 0))) {
          throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
        };
        const this$5 = $as_T(value);
        if ((this$5 === "")) {
          const ev$1 = this.ju_regex_Matcher__f_regexp;
          ev$1.lastIndex = ((1 + $uI(ev$1.lastIndex)) | 0)
        }
      } else {
        this.ju_regex_Matcher__f_canStillFind = false
      };
      this.ju_regex_Matcher__f_startOfGroupCache = null;
      return (this.ju_regex_Matcher__f_lastMatch !== null)
    } else {
      return false
    }
  };
  start__I() {
    return $uI($p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this).index)
  };
  end__I() {
    const $$x1 = this.start__I();
    const this$1 = this.group__T();
    return (($$x1 + $uI(this$1.length)) | 0)
  };
  group__T() {
    const value = $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this)[0];
    if ((value === (void 0))) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
    };
    return $as_T(value)
  };
}
const $d_ju_regex_Matcher = new $TypeData().initClass({
  ju_regex_Matcher: 0
}, false, "java.util.regex.Matcher", {
  ju_regex_Matcher: 1,
  O: 1,
  ju_regex_MatchResult: 1
});
$c_ju_regex_Matcher.prototype.$classData = $d_ju_regex_Matcher;
const $p_ju_regex_Pattern__jsPattern__T = (function($thiz) {
  return $as_T($thiz.ju_regex_Pattern__f_jsRegExp.source)
});
const $p_ju_regex_Pattern__jsFlags__T = (function($thiz) {
  return ((($uZ($thiz.ju_regex_Pattern__f_jsRegExp.global) ? "g" : "") + ($uZ($thiz.ju_regex_Pattern__f_jsRegExp.ignoreCase) ? "i" : "")) + ($uZ($thiz.ju_regex_Pattern__f_jsRegExp.multiline) ? "m" : ""))
});
class $c_ju_regex_Pattern extends $c_O {
  constructor(jsRegExp, _pattern, _flags) {
    super();
    this.ju_regex_Pattern__f_groupCount = 0;
    this.ju_regex_Pattern__f_groupStartMapper = null;
    this.ju_regex_Pattern__f_jsRegExp = null;
    this.ju_regex_Pattern__f__pattern = null;
    this.ju_regex_Pattern__f__flags = 0;
    this.ju_regex_Pattern__f_bitmap$0 = 0;
    this.ju_regex_Pattern__f_jsRegExp = jsRegExp;
    this.ju_regex_Pattern__f__pattern = _pattern;
    this.ju_regex_Pattern__f__flags = _flags
  };
  toString__T() {
    return this.ju_regex_Pattern__f__pattern
  };
  newJSRegExp__sjs_js_RegExp() {
    const r = new RegExp(this.ju_regex_Pattern__f_jsRegExp);
    return ((!Object.is(r, this.ju_regex_Pattern__f_jsRegExp)) ? r : new RegExp($p_ju_regex_Pattern__jsPattern__T(this), $p_ju_regex_Pattern__jsFlags__T(this)))
  };
  split__jl_CharSequence__I__AT(input, limit) {
    const inputStr = $dp_toString__T(input);
    if ((inputStr === "")) {
      return $makeNativeArrayWrapper($d_T.getArrayOf(), [""])
    } else {
      const lim = ((limit > 0) ? limit : 2147483647);
      const matcher = new $c_ju_regex_Matcher(this, inputStr, 0, $uI(inputStr.length));
      let capacity = 0;
      let size = 0;
      let jsElems = null;
      capacity = 0;
      size = 0;
      jsElems = [];
      let prevEnd = 0;
      let size$1 = 0;
      while (((size$1 < (((-1) + lim) | 0)) && matcher.find__Z())) {
        if ((matcher.end__I() !== 0)) {
          const beginIndex = prevEnd;
          const endIndex = matcher.start__I();
          const elem = $as_T(inputStr.substring(beginIndex, endIndex));
          const unboxedElem = ((elem === null) ? null : elem);
          jsElems.push(unboxedElem);
          size$1 = ((1 + size$1) | 0)
        };
        prevEnd = matcher.end__I()
      };
      const beginIndex$1 = prevEnd;
      const elem$1 = $as_T(inputStr.substring(beginIndex$1));
      const unboxedElem$1 = ((elem$1 === null) ? null : elem$1);
      jsElems.push(unboxedElem$1);
      const result = $makeNativeArrayWrapper($d_T.getArrayOf(), jsElems);
      if ((limit !== 0)) {
        return result
      } else {
        let actualLength = result.u.length;
        while (((actualLength !== 0) && (result.get((((-1) + actualLength) | 0)) === ""))) {
          actualLength = (((-1) + actualLength) | 0)
        };
        if ((actualLength === result.u.length)) {
          return result
        } else {
          const actualResult = $newArrayObject($d_T.getArrayOf(), [actualLength]);
          const length = actualLength;
          $systemArraycopy(result, 0, actualResult, 0, length);
          return actualResult
        }
      }
    }
  };
}
const $d_ju_regex_Pattern = new $TypeData().initClass({
  ju_regex_Pattern: 0
}, false, "java.util.regex.Pattern", {
  ju_regex_Pattern: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_regex_Pattern.prototype.$classData = $d_ju_regex_Pattern;
class $c_ju_regex_Pattern$ extends $c_O {
  constructor() {
    super();
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat = null;
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat = null;
    $n_ju_regex_Pattern$ = this;
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat = new RegExp("^\\\\Q(.|\\n|\\r)\\\\E$");
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)")
  };
  compile__T__I__ju_regex_Pattern(regex, flags) {
    let x1;
    if (((16 & flags) !== 0)) {
      x1 = new $c_T2(this.quote__T__T(regex), flags)
    } else {
      const m = this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat.exec(regex);
      let this$5;
      if ((m !== null)) {
        const value = m[1];
        if ((value === (void 0))) {
          throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
        };
        this$5 = new $c_s_Some(new $c_T2(this.quote__T__T($as_T(value)), flags))
      } else {
        this$5 = $m_s_None$()
      };
      let this$28;
      if (this$5.isEmpty__Z()) {
        const this$6 = $m_ju_regex_Pattern$();
        const m$1 = this$6.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat.exec(regex);
        if ((m$1 !== null)) {
          const value$1 = m$1[0];
          if ((value$1 === (void 0))) {
            throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
          };
          const this$11 = $as_T(value$1);
          const beginIndex = $uI(this$11.length);
          const newPat = $as_T(regex.substring(beginIndex));
          let elem = 0;
          elem = flags;
          const value$2 = m$1[1];
          if ((value$2 !== (void 0))) {
            const chars = $as_T(value$2);
            const end = $uI(chars.length);
            let i = 0;
            while ((i < end)) {
              const arg1 = i;
              elem = (elem | $m_ju_regex_Pattern$().java$util$regex$Pattern$$charToFlag__C__I((65535 & $uI(chars.charCodeAt(arg1)))));
              i = ((1 + i) | 0)
            }
          };
          const value$3 = m$1[2];
          if ((value$3 !== (void 0))) {
            const chars$3 = $as_T(value$3);
            const end$1 = $uI(chars$3.length);
            let i$1 = 0;
            while ((i$1 < end$1)) {
              const arg1$1 = i$1;
              elem = (elem & (~$m_ju_regex_Pattern$().java$util$regex$Pattern$$charToFlag__C__I((65535 & $uI(chars$3.charCodeAt(arg1$1))))));
              i$1 = ((1 + i$1) | 0)
            }
          };
          this$28 = new $c_s_Some(new $c_T2(newPat, elem))
        } else {
          this$28 = $m_s_None$()
        }
      } else {
        this$28 = this$5
      };
      x1 = $as_T2((this$28.isEmpty__Z() ? new $c_T2(regex, flags) : this$28.get__O()))
    };
    if ((x1 === null)) {
      throw new $c_s_MatchError(x1)
    };
    const jsPattern = $as_T(x1.T2__f__1);
    const flags1 = $uI(x1.T2__f__2);
    const jsFlags = (("g" + (((2 & flags1) !== 0) ? "i" : "")) + (((8 & flags1) !== 0) ? "m" : ""));
    const jsRegExp = new RegExp(jsPattern, jsFlags);
    return new $c_ju_regex_Pattern(jsRegExp, regex, flags1)
  };
  quote__T__T(s) {
    let result = "";
    let i = 0;
    while ((i < $uI(s.length))) {
      const index = i;
      const c = (65535 & $uI(s.charCodeAt(index)));
      const $$x2 = result;
      let $$x1;
      switch (c) {
        case 92:
        case 46:
        case 40:
        case 41:
        case 91:
        case 93:
        case 123:
        case 125:
        case 124:
        case 63:
        case 42:
        case 43:
        case 94:
        case 36: {
          $$x1 = ("\\" + $bC(c));
          break
        }
        default: {
          $$x1 = $bC(c)
        }
      };
      result = (("" + $$x2) + $$x1);
      i = ((1 + i) | 0)
    };
    return result
  };
  java$util$regex$Pattern$$charToFlag__C__I(c) {
    switch (c) {
      case 105: {
        return 2;
        break
      }
      case 100: {
        return 1;
        break
      }
      case 109: {
        return 8;
        break
      }
      case 115: {
        return 32;
        break
      }
      case 117: {
        return 64;
        break
      }
      case 120: {
        return 4;
        break
      }
      case 85: {
        return 256;
        break
      }
      default: {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag")
      }
    }
  };
}
const $d_ju_regex_Pattern$ = new $TypeData().initClass({
  ju_regex_Pattern$: 0
}, false, "java.util.regex.Pattern$", {
  ju_regex_Pattern$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_regex_Pattern$.prototype.$classData = $d_ju_regex_Pattern$;
let $n_ju_regex_Pattern$ = (void 0);
function $m_ju_regex_Pattern$() {
  if ((!$n_ju_regex_Pattern$)) {
    $n_ju_regex_Pattern$ = new $c_ju_regex_Pattern$()
  };
  return $n_ju_regex_Pattern$
}
class $c_Lorg_scalajs_dom_ext_Color$ extends $c_O {
  constructor() {
    super();
    this.Lorg_scalajs_dom_ext_Color$__f_d = null;
    this.Lorg_scalajs_dom_ext_Color$__f_RGB = null;
    this.Lorg_scalajs_dom_ext_Color$__f_ShortHex = null;
    this.Lorg_scalajs_dom_ext_Color$__f_LongHex = null;
    this.Lorg_scalajs_dom_ext_Color$__f_White = null;
    this.Lorg_scalajs_dom_ext_Color$__f_Red = null;
    this.Lorg_scalajs_dom_ext_Color$__f_Green = null;
    this.Lorg_scalajs_dom_ext_Color$__f_Blue = null;
    this.Lorg_scalajs_dom_ext_Color$__f_Cyan = null;
    this.Lorg_scalajs_dom_ext_Color$__f_Magenta = null;
    this.Lorg_scalajs_dom_ext_Color$__f_Yellow = null;
    this.Lorg_scalajs_dom_ext_Color$__f_Black = null;
    this.Lorg_scalajs_dom_ext_Color$__f_all = null;
    $n_Lorg_scalajs_dom_ext_Color$ = this;
    this.Lorg_scalajs_dom_ext_Color$__f_d = "[0-9a-zA-Z]";
    const groupNames = $m_sci_Nil$();
    this.Lorg_scalajs_dom_ext_Color$__f_RGB = $ct_s_util_matching_Regex__T__sci_Seq__(new $c_s_util_matching_Regex(), "rgb\\((\\d+), (\\d+), (\\d+)\\)", groupNames);
    const x = (((((("#(" + this.Lorg_scalajs_dom_ext_Color$__f_d) + ")(") + this.Lorg_scalajs_dom_ext_Color$__f_d) + ")(") + this.Lorg_scalajs_dom_ext_Color$__f_d) + ")");
    const groupNames$1 = $m_sci_Nil$();
    this.Lorg_scalajs_dom_ext_Color$__f_ShortHex = $ct_s_util_matching_Regex__T__sci_Seq__(new $c_s_util_matching_Regex(), x, groupNames$1);
    const x$1 = ((((((((("#(" + this.Lorg_scalajs_dom_ext_Color$__f_d) + this.Lorg_scalajs_dom_ext_Color$__f_d) + ")(") + this.Lorg_scalajs_dom_ext_Color$__f_d) + this.Lorg_scalajs_dom_ext_Color$__f_d) + ")(") + this.Lorg_scalajs_dom_ext_Color$__f_d) + this.Lorg_scalajs_dom_ext_Color$__f_d) + ")");
    const groupNames$2 = $m_sci_Nil$();
    this.Lorg_scalajs_dom_ext_Color$__f_LongHex = $ct_s_util_matching_Regex__T__sci_Seq__(new $c_s_util_matching_Regex(), x$1, groupNames$2);
    this.Lorg_scalajs_dom_ext_Color$__f_White = new $c_Lorg_scalajs_dom_ext_Color(255, 255, 255);
    this.Lorg_scalajs_dom_ext_Color$__f_Red = new $c_Lorg_scalajs_dom_ext_Color(255, 0, 0);
    this.Lorg_scalajs_dom_ext_Color$__f_Green = new $c_Lorg_scalajs_dom_ext_Color(0, 255, 0);
    this.Lorg_scalajs_dom_ext_Color$__f_Blue = new $c_Lorg_scalajs_dom_ext_Color(0, 0, 255);
    this.Lorg_scalajs_dom_ext_Color$__f_Cyan = new $c_Lorg_scalajs_dom_ext_Color(0, 255, 255);
    this.Lorg_scalajs_dom_ext_Color$__f_Magenta = new $c_Lorg_scalajs_dom_ext_Color(255, 0, 255);
    this.Lorg_scalajs_dom_ext_Color$__f_Yellow = new $c_Lorg_scalajs_dom_ext_Color(255, 255, 0);
    this.Lorg_scalajs_dom_ext_Color$__f_Black = new $c_Lorg_scalajs_dom_ext_Color(0, 0, 0);
    const $$x1 = $m_sci_Seq$();
    const array = [this.Lorg_scalajs_dom_ext_Color$__f_White, this.Lorg_scalajs_dom_ext_Color$__f_Red, this.Lorg_scalajs_dom_ext_Color$__f_Green, this.Lorg_scalajs_dom_ext_Color$__f_Blue, this.Lorg_scalajs_dom_ext_Color$__f_Cyan, this.Lorg_scalajs_dom_ext_Color$__f_Magenta, this.Lorg_scalajs_dom_ext_Color$__f_Yellow, this.Lorg_scalajs_dom_ext_Color$__f_Black];
    this.Lorg_scalajs_dom_ext_Color$__f_all = $as_sci_Seq($$x1.apply__sci_Seq__sc_SeqOps(new $c_sjsr_WrappedVarArgs(array)))
  };
}
const $d_Lorg_scalajs_dom_ext_Color$ = new $TypeData().initClass({
  Lorg_scalajs_dom_ext_Color$: 0
}, false, "org.scalajs.dom.ext.Color$", {
  Lorg_scalajs_dom_ext_Color$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_dom_ext_Color$.prototype.$classData = $d_Lorg_scalajs_dom_ext_Color$;
let $n_Lorg_scalajs_dom_ext_Color$ = (void 0);
function $m_Lorg_scalajs_dom_ext_Color$() {
  if ((!$n_Lorg_scalajs_dom_ext_Color$)) {
    $n_Lorg_scalajs_dom_ext_Color$ = new $c_Lorg_scalajs_dom_ext_Color$()
  };
  return $n_Lorg_scalajs_dom_ext_Color$
}
const $p_RTLong$__toUnsignedString__I__I__T = (function($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    const this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
});
const $p_RTLong$__unsigned_$div__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      const rDouble = (aDouble / bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    const pow = ((31 - $clz32(blo)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    const pow$2 = ((31 - $clz32(bhi)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
});
const $p_RTLong$__unsigned_$percent__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      const rDouble = (aDouble % bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
});
const $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O = (function($thiz, alo, ahi, blo, bhi, ask) {
  let shift = ((((bhi !== 0) ? $clz32(bhi) : ((32 + $clz32(blo)) | 0)) - ((ahi !== 0) ? $clz32(ahi) : ((32 + $clz32(alo)) | 0))) | 0);
  const n = shift;
  const lo = (((32 & n) === 0) ? (blo << n) : 0);
  const hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  let bShiftLo = lo;
  let bShiftHi = hi;
  let remLo = alo;
  let remHi = ahi;
  let quotLo = 0;
  let quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    const alo$1 = remLo;
    const ahi$1 = remHi;
    const blo$1 = bShiftLo;
    const bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      const lo$1 = remLo;
      const hi$1 = remHi;
      const lo$2 = bShiftLo;
      const hi$2 = bShiftHi;
      const lo$3 = ((lo$1 - lo$2) | 0);
      const hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    const lo$4 = bShiftLo;
    const hi$4 = bShiftHi;
    const lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    const hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  const alo$2 = remLo;
  const ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    const lo$6 = remLo;
    const hi$6 = remHi;
    const remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0)));
    const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
    if ((ask !== 1)) {
      const x = (remDouble / bDouble);
      const lo$7 = $uI((x | 0));
      const x$1 = (x / 4.294967296E9);
      const hi$7 = $uI((x$1 | 0));
      const lo$8 = quotLo;
      const hi$8 = quotHi;
      const lo$9 = ((lo$8 + lo$7) | 0);
      const hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      const rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0));
      const x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    const lo$10 = quotLo;
    const hi$10 = quotHi;
    const quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0)));
    const this$3 = remLo;
    const remStr = ("" + this$3);
    const start = $uI(remStr.length);
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
});
class $c_RTLong$ extends $c_O {
  constructor() {
    super();
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
  };
  org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi) {
    return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
  };
  org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) {
    if ((hi < 0)) {
      const x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
      const $$x1 = $uD((x >>> 0));
      const x$1 = ((-lo) | 0);
      return (-((4.294967296E9 * $$x1) + $uD((x$1 >>> 0))))
    } else {
      return ((4.294967296E9 * hi) + $uD((lo >>> 0)))
    }
  };
  fromInt__I__RTLong(value) {
    return new $c_RTLong(value, (value >> 31))
  };
  fromDouble__D__RTLong(value) {
    const lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
    return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value) {
    if ((value < (-9.223372036854776E18))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
      return 0
    } else if ((value >= 9.223372036854776E18)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
      return (-1)
    } else {
      const rawLo = $uI((value | 0));
      const x = (value / 4.294967296E9);
      const rawHi = $uI((x | 0));
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
      return rawLo
    }
  };
  org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(alo, ahi, blo, bhi) {
    return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
  };
  divideImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if (((alo === (-2147483648)) && (blo === (-1)))) {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return (-2147483648)
        } else {
          const lo = $intDiv(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
        return (-1)
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if (((ahi ^ bhi) >= 0)) {
        return absRLo
      } else {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      }
    }
  };
  remainderImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if ((blo !== (-1))) {
          const lo = $intMod(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        } else {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return 0
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
        return alo
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if ((ahi < 0)) {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      } else {
        return absRLo
      }
    }
  };
}
const $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
let $n_RTLong$ = (void 0);
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
class $c_s_$less$colon$less$ extends $c_O {
  constructor() {
    super();
    this.s_$less$colon$less$__f_singleton = null;
    $n_s_$less$colon$less$ = this;
    this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1()
  };
}
const $d_s_$less$colon$less$ = new $TypeData().initClass({
  s_$less$colon$less$: 0
}, false, "scala.$less$colon$less$", {
  s_$less$colon$less$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$.prototype.$classData = $d_s_$less$colon$less$;
let $n_s_$less$colon$less$ = (void 0);
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$()
  };
  return $n_s_$less$colon$less$
}
const $f_s_App__main__AT__V = (function($thiz, args) {
  $thiz.Lbon_jo_phy_Test$__f_scala$App$$_args = args;
  const this$1 = $thiz.Lbon_jo_phy_Test$__f_scala$App$$initCode;
  const it = this$1.scm_ListBuffer__f_first.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    const arg1 = it.next__O();
    const proc = $as_F0(arg1);
    proc.apply__O()
  }
});
const $f_s_App__$init$__V = (function($thiz) {
  const this$2 = $m_RTLong$();
  const value = $uD(new Date().getTime());
  const lo = this$2.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  const hi = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  $thiz.Lbon_jo_phy_Test$__f_executionStart = new $c_RTLong(lo, hi);
  $thiz.Lbon_jo_phy_Test$__f_scala$App$$initCode = new $c_scm_ListBuffer()
});
const $p_s_Array$__slowcopy__O__I__O__I__I__V = (function($thiz, src, srcPos, dest, destPos, length) {
  let i = srcPos;
  let j = destPos;
  const srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
});
class $c_s_Array$ extends $c_O {
  copy__O__I__O__I__I__V(src, srcPos, dest, destPos, length) {
    const srcClass = $objectGetClass(src);
    if ((srcClass.isArray__Z() && $objectGetClass(dest).isAssignableFrom__jl_Class__Z(srcClass))) {
      $systemArraycopy(src, srcPos, dest, destPos, length)
    } else {
      $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
    }
  };
}
const $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
let $n_s_Array$ = (void 0);
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
const $ct_s_Enumeration__I__ = (function($thiz, initial) {
  $thiz.s_Enumeration__f_scala$Enumeration$$vmap = $ct_scm_HashMap__(new $c_scm_HashMap());
  $thiz.s_Enumeration__f_vset = null;
  $thiz.s_Enumeration__f_scala$Enumeration$$vsetDefined = false;
  $thiz.s_Enumeration__f_nmap = $ct_scm_HashMap__(new $c_scm_HashMap());
  $thiz.s_Enumeration__f_nextId = initial;
  $thiz.s_Enumeration__f_scala$Enumeration$$topId = initial;
  $thiz.s_Enumeration__f_scala$Enumeration$$bottomId = ((initial < 0) ? initial : 0);
  return $thiz
});
class $c_s_Enumeration extends $c_O {
  constructor() {
    super();
    this.s_Enumeration__f_ValueOrdering$module = null;
    this.s_Enumeration__f_ValueSet$module = null;
    this.s_Enumeration__f_scala$Enumeration$$vmap = null;
    this.s_Enumeration__f_vset = null;
    this.s_Enumeration__f_scala$Enumeration$$vsetDefined = false;
    this.s_Enumeration__f_nmap = null;
    this.s_Enumeration__f_nextId = 0;
    this.s_Enumeration__f_nextName = null;
    this.s_Enumeration__f_scala$Enumeration$$topId = 0;
    this.s_Enumeration__f_scala$Enumeration$$bottomId = 0
  };
  toString__T() {
    const $$x5 = $m_sc_ArrayOps$();
    const $$x4 = $m_sc_StringOps$();
    const $$x3 = $m_sc_ArrayOps$();
    const $$x2 = $m_sc_StringOps$();
    const $$x1 = $m_sc_StringOps$();
    const x = $objectGetClass(this).getName__T();
    const x$1 = $$x1.stripSuffix$extension__T__T__T(x, "$");
    const xs = $$x2.split$extension__T__C__AT(x$1, 46);
    const x$2 = $as_T($$x3.last$extension__O__O(xs));
    const xs$1 = $$x4.split$extension__T__C__AT(x$2, 36);
    return $as_T($$x5.last$extension__O__O(xs$1))
  };
}
class $c_s_LowPriorityImplicits extends $c_s_LowPriorityImplicits2 {
}
class $c_s_Option$ extends $c_O {
  apply__O__s_Option(x) {
    return ((x === null) ? $m_s_None$() : new $c_s_Some(x))
  };
}
const $d_s_Option$ = new $TypeData().initClass({
  s_Option$: 0
}, false, "scala.Option$", {
  s_Option$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Option$.prototype.$classData = $d_s_Option$;
let $n_s_Option$ = (void 0);
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$()
  };
  return $n_s_Option$
}
class $c_T2$ extends $c_O {
  toString__T() {
    return "Tuple2"
  };
}
const $d_T2$ = new $TypeData().initClass({
  T2$: 0
}, false, "scala.Tuple2$", {
  T2$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_T2$.prototype.$classData = $d_T2$;
let $n_T2$ = (void 0);
function $m_T2$() {
  if ((!$n_T2$)) {
    $n_T2$ = new $c_T2$()
  };
  return $n_T2$
}
class $c_sci_$colon$colon$ extends $c_O {
  toString__T() {
    return "::"
  };
}
const $d_sci_$colon$colon$ = new $TypeData().initClass({
  sci_$colon$colon$: 0
}, false, "scala.collection.immutable.$colon$colon$", {
  sci_$colon$colon$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sci_$colon$colon$.prototype.$classData = $d_sci_$colon$colon$;
let $n_sci_$colon$colon$ = (void 0);
function $m_sci_$colon$colon$() {
  if ((!$n_sci_$colon$colon$)) {
    $n_sci_$colon$colon$ = new $c_sci_$colon$colon$()
  };
  return $n_sci_$colon$colon$
}
class $c_sci_HashMapBuilder$$anon$2 extends $c_sci_ChampBaseIterator {
  constructor(outer, x2$1) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.sci_HashMap__f_rootNode);
    while (this.hasNext__Z()) {
      const originalHash = this.sci_ChampBaseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseIterator__f_currentValueCursor);
      outer.update__sci_MapNode__O__O__I__I__I__V(outer.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, $as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode).getKey__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), $as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode).getValue__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
      this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0)
    }
  };
}
const $d_sci_HashMapBuilder$$anon$2 = new $TypeData().initClass({
  sci_HashMapBuilder$$anon$2: 0
}, false, "scala.collection.immutable.HashMapBuilder$$anon$2", {
  sci_HashMapBuilder$$anon$2: 1,
  sci_ChampBaseIterator: 1,
  O: 1
});
$c_sci_HashMapBuilder$$anon$2.prototype.$classData = $d_sci_HashMapBuilder$$anon$2;
class $c_sci_HashSetBuilder$$anon$1 extends $c_sci_ChampBaseIterator {
  constructor(outer, x2$1) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.sci_HashSet__f_rootNode);
    while (this.hasNext__Z()) {
      const originalHash = this.sci_ChampBaseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseIterator__f_currentValueCursor);
      outer.update__sci_SetNode__O__I__I__I__V(outer.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode, $as_sci_SetNode(this.sci_ChampBaseIterator__f_currentValueNode).getPayload__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
      this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0)
    }
  };
}
const $d_sci_HashSetBuilder$$anon$1 = new $TypeData().initClass({
  sci_HashSetBuilder$$anon$1: 0
}, false, "scala.collection.immutable.HashSetBuilder$$anon$1", {
  sci_HashSetBuilder$$anon$1: 1,
  sci_ChampBaseIterator: 1,
  O: 1
});
$c_sci_HashSetBuilder$$anon$1.prototype.$classData = $d_sci_HashSetBuilder$$anon$1;
function $is_sci_LazyList$State(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_LazyList$State)))
}
function $as_sci_LazyList$State(obj) {
  return (($is_sci_LazyList$State(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList$State"))
}
function $isArrayOf_sci_LazyList$State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList$State)))
}
function $asArrayOf_sci_LazyList$State(obj, depth) {
  return (($isArrayOf_sci_LazyList$State(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList$State;", depth))
}
class $c_sci_List$$anon$1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
  apply__O__O(x) {
    return this
  };
}
const $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
class $c_sci_MapNode extends $c_sci_Node {
}
function $as_sci_MapNode(obj) {
  return (((obj instanceof $c_sci_MapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.MapNode"))
}
function $isArrayOf_sci_MapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_MapNode)))
}
function $asArrayOf_sci_MapNode(obj, depth) {
  return (($isArrayOf_sci_MapNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.MapNode;", depth))
}
class $c_sci_Range$ extends $c_O {
}
const $d_sci_Range$ = new $TypeData().initClass({
  sci_Range$: 0
}, false, "scala.collection.immutable.Range$", {
  sci_Range$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$.prototype.$classData = $d_sci_Range$;
let $n_sci_Range$ = (void 0);
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$()
  };
  return $n_sci_Range$
}
class $c_sci_SetNode extends $c_sci_Node {
}
function $as_sci_SetNode(obj) {
  return (((obj instanceof $c_sci_SetNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.SetNode"))
}
function $isArrayOf_sci_SetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SetNode)))
}
function $asArrayOf_sci_SetNode(obj, depth) {
  return (($isArrayOf_sci_SetNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.SetNode;", depth))
}
const $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable = (function($thiz, xs) {
  const it = xs.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    $thiz.addOne__O__scm_Growable(it.next__O())
  };
  return $thiz
});
class $c_scm_StringBuilder$ extends $c_O {
}
const $d_scm_StringBuilder$ = new $TypeData().initClass({
  scm_StringBuilder$: 0
}, false, "scala.collection.mutable.StringBuilder$", {
  scm_StringBuilder$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder$.prototype.$classData = $d_scm_StringBuilder$;
let $n_scm_StringBuilder$ = (void 0);
function $m_scm_StringBuilder$() {
  if ((!$n_scm_StringBuilder$)) {
    $n_scm_StringBuilder$ = new $c_scm_StringBuilder$()
  };
  return $n_scm_StringBuilder$
}
class $c_s_math_Fractional$ extends $c_O {
}
const $d_s_math_Fractional$ = new $TypeData().initClass({
  s_math_Fractional$: 0
}, false, "scala.math.Fractional$", {
  s_math_Fractional$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Fractional$.prototype.$classData = $d_s_math_Fractional$;
let $n_s_math_Fractional$ = (void 0);
function $m_s_math_Fractional$() {
  if ((!$n_s_math_Fractional$)) {
    $n_s_math_Fractional$ = new $c_s_math_Fractional$()
  };
  return $n_s_math_Fractional$
}
class $c_s_math_Integral$ extends $c_O {
}
const $d_s_math_Integral$ = new $TypeData().initClass({
  s_math_Integral$: 0
}, false, "scala.math.Integral$", {
  s_math_Integral$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Integral$.prototype.$classData = $d_s_math_Integral$;
let $n_s_math_Integral$ = (void 0);
function $m_s_math_Integral$() {
  if ((!$n_s_math_Integral$)) {
    $n_s_math_Integral$ = new $c_s_math_Integral$()
  };
  return $n_s_math_Integral$
}
class $c_s_math_Numeric$ extends $c_O {
}
const $d_s_math_Numeric$ = new $TypeData().initClass({
  s_math_Numeric$: 0
}, false, "scala.math.Numeric$", {
  s_math_Numeric$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Numeric$.prototype.$classData = $d_s_math_Numeric$;
let $n_s_math_Numeric$ = (void 0);
function $m_s_math_Numeric$() {
  if ((!$n_s_math_Numeric$)) {
    $n_s_math_Numeric$ = new $c_s_math_Numeric$()
  };
  return $n_s_math_Numeric$
}
class $c_s_package$$anon$1 extends $c_O {
  toString__T() {
    return "object AnyRef"
  };
}
const $d_s_package$$anon$1 = new $TypeData().initClass({
  s_package$$anon$1: 0
}, false, "scala.package$$anon$1", {
  s_package$$anon$1: 1,
  O: 1,
  s_Specializable: 1
});
$c_s_package$$anon$1.prototype.$classData = $d_s_package$$anon$1;
class $c_s_reflect_ClassTag$ extends $c_O {
  apply__jl_Class__s_reflect_ClassTag(runtimeClass1) {
    return ((runtimeClass1 === $d_B.getClassOf()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.getClassOf()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.getClassOf()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.getClassOf()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.getClassOf()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.getClassOf()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.getClassOf()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.getClassOf()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.getClassOf()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.getClassOf()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.getClassOf()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.getClassOf()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))))
  };
}
const $d_s_reflect_ClassTag$ = new $TypeData().initClass({
  s_reflect_ClassTag$: 0
}, false, "scala.reflect.ClassTag$", {
  s_reflect_ClassTag$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_ClassTag$.prototype.$classData = $d_s_reflect_ClassTag$;
let $n_s_reflect_ClassTag$ = (void 0);
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$()
  };
  return $n_s_reflect_ClassTag$
}
class $c_s_reflect_Manifest$ extends $c_O {
}
const $d_s_reflect_Manifest$ = new $TypeData().initClass({
  s_reflect_Manifest$: 0
}, false, "scala.reflect.Manifest$", {
  s_reflect_Manifest$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_Manifest$.prototype.$classData = $d_s_reflect_Manifest$;
let $n_s_reflect_Manifest$ = (void 0);
function $m_s_reflect_Manifest$() {
  if ((!$n_s_reflect_Manifest$)) {
    $n_s_reflect_Manifest$ = new $c_s_reflect_Manifest$()
  };
  return $n_s_reflect_Manifest$
}
class $c_sr_AbstractFunction0 extends $c_O {
  toString__T() {
    return "<function0>"
  };
}
class $c_sr_AbstractFunction1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
}
class $c_sr_AbstractFunction3 extends $c_O {
  toString__T() {
    return "<function3>"
  };
}
class $c_sr_IntRef extends $c_O {
  constructor(elem) {
    super();
    this.sr_IntRef__f_elem = 0;
    this.sr_IntRef__f_elem = elem
  };
  toString__T() {
    const i = this.sr_IntRef__f_elem;
    return ("" + i)
  };
}
const $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
class $c_sr_LazyRef extends $c_O {
  constructor() {
    super();
    this.sr_LazyRef__f__initialized = false;
    this.sr_LazyRef__f__value = null
  };
  initialize__O__O(value) {
    this.sr_LazyRef__f__value = value;
    this.sr_LazyRef__f__initialized = true;
    return value
  };
  toString__T() {
    return ("LazyRef " + (this.sr_LazyRef__f__initialized ? ("of: " + this.sr_LazyRef__f__value) : "thunk"))
  };
}
const $d_sr_LazyRef = new $TypeData().initClass({
  sr_LazyRef: 0
}, false, "scala.runtime.LazyRef", {
  sr_LazyRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_LazyRef.prototype.$classData = $d_sr_LazyRef;
class $c_sr_ObjectRef extends $c_O {
  constructor(elem) {
    super();
    this.sr_ObjectRef__f_elem = null;
    this.sr_ObjectRef__f_elem = elem
  };
  toString__T() {
    const obj = this.sr_ObjectRef__f_elem;
    return ("" + obj)
  };
}
const $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
class $c_s_util_Either$ extends $c_O {
}
const $d_s_util_Either$ = new $TypeData().initClass({
  s_util_Either$: 0
}, false, "scala.util.Either$", {
  s_util_Either$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Either$.prototype.$classData = $d_s_util_Either$;
let $n_s_util_Either$ = (void 0);
function $m_s_util_Either$() {
  if ((!$n_s_util_Either$)) {
    $n_s_util_Either$ = new $c_s_util_Either$()
  };
  return $n_s_util_Either$
}
class $c_s_util_Left$ extends $c_O {
  toString__T() {
    return "Left"
  };
}
const $d_s_util_Left$ = new $TypeData().initClass({
  s_util_Left$: 0
}, false, "scala.util.Left$", {
  s_util_Left$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Left$.prototype.$classData = $d_s_util_Left$;
let $n_s_util_Left$ = (void 0);
function $m_s_util_Left$() {
  if ((!$n_s_util_Left$)) {
    $n_s_util_Left$ = new $c_s_util_Left$()
  };
  return $n_s_util_Left$
}
const $ct_s_util_Random__ju_Random__ = (function($thiz, self) {
  $thiz.s_util_Random__f_self = self;
  return $thiz
});
class $c_s_util_Random extends $c_O {
  constructor() {
    super();
    this.s_util_Random__f_self = null
  };
}
class $c_s_util_Right$ extends $c_O {
  toString__T() {
    return "Right"
  };
}
const $d_s_util_Right$ = new $TypeData().initClass({
  s_util_Right$: 0
}, false, "scala.util.Right$", {
  s_util_Right$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Right$.prototype.$classData = $d_s_util_Right$;
let $n_s_util_Right$ = (void 0);
function $m_s_util_Right$() {
  if ((!$n_s_util_Right$)) {
    $n_s_util_Right$ = new $c_s_util_Right$()
  };
  return $n_s_util_Right$
}
class $c_s_util_hashing_MurmurHash3$ extends $c_s_util_hashing_MurmurHash3 {
  constructor() {
    super();
    this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
    $n_s_util_hashing_MurmurHash3$ = this;
    this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
    this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
    this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set")
  };
  seqHash__sc_Seq__I(xs) {
    if ($is_sc_IndexedSeq(xs)) {
      const x2 = $as_sc_IndexedSeq(xs);
      return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else if ((xs instanceof $c_sci_List)) {
      const x3 = $as_sci_List(xs);
      return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else {
      return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    }
  };
}
const $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
let $n_s_util_hashing_MurmurHash3$ = (void 0);
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
const $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__ = (function($thiz, pattern, groupNames) {
  $thiz.s_util_matching_Regex__f_pattern = pattern;
  $thiz.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames = groupNames;
  return $thiz
});
const $ct_s_util_matching_Regex__T__sci_Seq__ = (function($thiz, regex, groupNames) {
  const this$1 = $m_ju_regex_Pattern$();
  $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, this$1.compile__T__I__ju_regex_Pattern(regex, 0), groupNames);
  return $thiz
});
class $c_s_util_matching_Regex extends $c_O {
  constructor() {
    super();
    this.s_util_matching_Regex__f_pattern = null;
    this.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames = null
  };
  toString__T() {
    return this.s_util_matching_Regex__f_pattern.ju_regex_Pattern__f__pattern
  };
}
const $d_s_util_matching_Regex = new $TypeData().initClass({
  s_util_matching_Regex: 0
}, false, "scala.util.matching.Regex", {
  s_util_matching_Regex: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_matching_Regex.prototype.$classData = $d_s_util_matching_Regex;
const $p_s_xml_Equality__doComparison__O__Z__Z = (function($thiz, other, blithe) {
  let strictlyEqual;
  matchEnd5: {
    if ((other !== null)) {
      if (($thiz === other)) {
        strictlyEqual = true;
        break matchEnd5
      }
    };
    if ($is_s_xml_Equality(other)) {
      const x3 = $as_s_xml_Equality(other);
      strictlyEqual = (x3.canEqual__O__Z($thiz) && $thiz.strict_$eq$eq__s_xml_Equality__Z(x3));
      break matchEnd5
    };
    strictlyEqual = false
  };
  return (strictlyEqual || (blithe && $m_s_xml_Equality$().compareBlithely__O__O__Z($thiz, other)))
});
function $is_s_xml_Equality(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_xml_Equality)))
}
function $as_s_xml_Equality(obj) {
  return (($is_s_xml_Equality(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.xml.Equality"))
}
function $isArrayOf_s_xml_Equality(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_xml_Equality)))
}
function $asArrayOf_s_xml_Equality(obj, depth) {
  return (($isArrayOf_s_xml_Equality(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.xml.Equality;", depth))
}
const $p_s_xml_MetaData$__iterate$1__s_xml_MetaData__s_xml_MetaData__sci_Set__s_xml_NamespaceBinding__s_xml_MetaData = (function($thiz, md, normalized_attribs, set, scope$1) {
  while (true) {
    if ((md === $m_s_xml_Null$())) {
      return normalized_attribs
    } else if ((md.value__sc_Seq() === null)) {
      md = md.next__s_xml_MetaData()
    } else {
      const key = $thiz.getUniversalKey__s_xml_MetaData__s_xml_NamespaceBinding__T(md, scope$1);
      if (set.contains__O__Z(key)) {
        md = md.next__s_xml_MetaData()
      } else {
        return md.copy__s_xml_MetaData__s_xml_MetaData($p_s_xml_MetaData$__iterate$1__s_xml_MetaData__s_xml_MetaData__sci_Set__s_xml_NamespaceBinding__s_xml_MetaData($thiz, md.next__s_xml_MetaData(), normalized_attribs, $as_sci_Set(set.incl__O__sci_SetOps(key)), scope$1))
      }
    }
  }
});
class $c_s_xml_MetaData$ extends $c_O {
  normalize__s_xml_MetaData__s_xml_NamespaceBinding__s_xml_MetaData(attribs, scope) {
    const $$x1 = $m_s_xml_Null$();
    const this$1 = $m_s_Predef$().s_Predef$__f_Set;
    const elems = $m_sci_Nil$();
    return $p_s_xml_MetaData$__iterate$1__s_xml_MetaData__s_xml_MetaData__sci_Set__s_xml_NamespaceBinding__s_xml_MetaData(this, attribs, $$x1, this$1.from__sc_IterableOnce__sci_Set(elems), scope)
  };
  getUniversalKey__s_xml_MetaData__s_xml_NamespaceBinding__T(attrib, scope) {
    if ((attrib instanceof $c_s_xml_PrefixedAttribute)) {
      const x2 = $as_s_xml_PrefixedAttribute(attrib);
      return (("" + scope.getURI__T__T(x2.pre__T())) + x2.key__T())
    } else if ((attrib instanceof $c_s_xml_UnprefixedAttribute)) {
      const x3 = $as_s_xml_UnprefixedAttribute(attrib);
      return x3.s_xml_UnprefixedAttribute__f_key
    } else {
      throw new $c_s_MatchError(attrib)
    }
  };
}
const $d_s_xml_MetaData$ = new $TypeData().initClass({
  s_xml_MetaData$: 0
}, false, "scala.xml.MetaData$", {
  s_xml_MetaData$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_xml_MetaData$.prototype.$classData = $d_s_xml_MetaData$;
let $n_s_xml_MetaData$ = (void 0);
function $m_s_xml_MetaData$() {
  if ((!$n_s_xml_MetaData$)) {
    $n_s_xml_MetaData$ = new $c_s_xml_MetaData$()
  };
  return $n_s_xml_MetaData$
}
class $c_s_xml_NodeSeq$ extends $c_O {
  constructor() {
    super();
    this.s_xml_NodeSeq$__f_Empty = null;
    $n_s_xml_NodeSeq$ = this;
    const s = $m_sci_Nil$();
    this.s_xml_NodeSeq$__f_Empty = new $c_s_xml_NodeSeq$$anon$1(s)
  };
  newBuilder__scm_Builder() {
    const this$3 = new $c_scm_ListBuffer();
    const f = new $c_sjsr_AnonFunction1(((this$1) => ((s$2) => {
      const s = $as_sc_Seq(s$2);
      $m_s_xml_NodeSeq$();
      return new $c_s_xml_NodeSeq$$anon$1(s)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$3, f)
  };
}
const $d_s_xml_NodeSeq$ = new $TypeData().initClass({
  s_xml_NodeSeq$: 0
}, false, "scala.xml.NodeSeq$", {
  s_xml_NodeSeq$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_xml_NodeSeq$.prototype.$classData = $d_s_xml_NodeSeq$;
let $n_s_xml_NodeSeq$ = (void 0);
function $m_s_xml_NodeSeq$() {
  if ((!$n_s_xml_NodeSeq$)) {
    $n_s_xml_NodeSeq$ = new $c_s_xml_NodeSeq$()
  };
  return $n_s_xml_NodeSeq$
}
class $c_s_xml_Utility$ extends $c_O {
  isAtomAndNotText__s_xml_Node__Z(x) {
    return ((x instanceof $c_s_xml_Atom) && (!(x instanceof $c_s_xml_Text)))
  };
  escapeText__T__scm_StringBuilder__scm_StringBuilder(text, s) {
    const this$1 = $m_s_xml_Utility$Escapes$().s_xml_Utility$Escapes$__f_escMap;
    const escTextMap = $as_sci_Map(this$1.removed__O__sci_MapOps($bC(34)));
    const this$4 = new $c_sc_StringOps$StringIterator(text);
    let result = s;
    while (this$4.hasNext__Z()) {
      const arg1 = result;
      const arg2 = this$4.next__C();
      const s$2 = $as_scm_StringBuilder(arg1);
      const x1 = escTextMap.get__O__s_Option($bC(arg2));
      if ((x1 instanceof $c_s_Some)) {
        const x2 = $as_s_Some(x1);
        const str = $as_T(x2.s_Some__f_value);
        result = s$2.addAll__T__scm_StringBuilder(str)
      } else {
        result = (((arg2 >= 32) || $m_sc_StringOps$().contains$extension__T__C__Z("\n\r\t", arg2)) ? s$2.addOne__C__scm_StringBuilder(arg2) : s$2)
      }
    };
    return $as_scm_StringBuilder(result)
  };
  serialize__s_xml_Node__s_xml_NamespaceBinding__scm_StringBuilder__Z__Z__Z__s_Enumeration$Value__scm_StringBuilder(x, pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags) {
    if ((x instanceof $c_s_xml_Comment)) {
      const x2 = $as_s_xml_Comment(x);
      if ((!stripComments)) {
        x2.buildString__scm_StringBuilder__scm_StringBuilder(sb)
      };
      return sb
    } else if ((x instanceof $c_s_xml_SpecialNode)) {
      const x3 = $as_s_xml_SpecialNode(x);
      return $m_s_xml_Utility$().escapeText__T__scm_StringBuilder__scm_StringBuilder($as_T(x3.s_xml_Atom__f_data), sb)
    } else if ((x instanceof $c_s_xml_Group)) {
      const x4 = $as_s_xml_Group(x);
      x4.s_xml_Group__f_nodes.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$1, x4$1, sb$1, stripComments$1, decodeEntities$1, preserveWhitespace$1, minimizeTags$1) => ((c$2) => {
        const c = $as_s_xml_Node(c$2);
        return $m_s_xml_Utility$().serialize__s_xml_Node__s_xml_NamespaceBinding__scm_StringBuilder__Z__Z__Z__s_Enumeration$Value__scm_StringBuilder(c, $m_s_xml_TopScope$(), sb$1, stripComments$1, decodeEntities$1, preserveWhitespace$1, minimizeTags$1)
      }))(this, x4, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags)));
      return sb
    } else if ((x instanceof $c_s_xml_Elem)) {
      const x5 = $as_s_xml_Elem(x);
      sb.append__C__scm_StringBuilder(60);
      x5.nameToString__scm_StringBuilder__scm_StringBuilder(sb);
      if ((x5.s_xml_Elem__f_attributes !== null)) {
        x5.s_xml_Elem__f_attributes.buildString__scm_StringBuilder__scm_StringBuilder(sb)
      };
      let $$x1;
      if (x5.s_xml_Elem__f_child.isEmpty__Z()) {
        const x$3 = $m_s_xml_MinimizeMode$().s_xml_MinimizeMode$__f_Always;
        if (((minimizeTags === null) ? (x$3 === null) : minimizeTags.equals__O__Z(x$3))) {
          $$x1 = true
        } else {
          const x$5 = $m_s_xml_MinimizeMode$().s_xml_MinimizeMode$__f_Default;
          if (((minimizeTags === null) ? (x$5 === null) : minimizeTags.equals__O__Z(x$5))) {
            $$x1 = x5.s_xml_Elem__f_minimizeEmpty
          } else {
            $$x1 = false
          }
        }
      } else {
        $$x1 = false
      };
      if ($$x1) {
        return sb.append__T__scm_StringBuilder("/>")
      } else {
        sb.append__C__scm_StringBuilder(62);
        this.sequenceToXML__sc_Seq__s_xml_NamespaceBinding__scm_StringBuilder__Z__Z__Z__s_Enumeration$Value__V(x5.s_xml_Elem__f_child, x5.s_xml_Elem__f_scope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags);
        sb.append__T__scm_StringBuilder("</");
        x5.nameToString__scm_StringBuilder__scm_StringBuilder(sb);
        return sb.append__C__scm_StringBuilder(62)
      }
    } else {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ("Don't know how to serialize a " + $objectGetClass(x).getName__T()))
    }
  };
  sequenceToXML__sc_Seq__s_xml_NamespaceBinding__scm_StringBuilder__Z__Z__Z__s_Enumeration$Value__V(children, pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags) {
    if (children.isEmpty__Z()) {
      /*<skip>*/
    } else if (children.forall__F1__Z(new $c_sjsr_AnonFunction1(((this$1) => ((x$2) => {
      const x = $as_s_xml_Node(x$2);
      return $m_s_xml_Utility$().isAtomAndNotText__s_xml_Node__Z(x)
    }))(this)))) {
      const it = children.iterator__sc_Iterator();
      const f = $as_s_xml_Node(it.next__O());
      this.serialize__s_xml_Node__s_xml_NamespaceBinding__scm_StringBuilder__Z__Z__Z__s_Enumeration$Value__scm_StringBuilder(f, pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags);
      while (it.hasNext__Z()) {
        const x$3 = $as_s_xml_Node(it.next__O());
        sb.append__C__scm_StringBuilder(32);
        this.serialize__s_xml_Node__s_xml_NamespaceBinding__scm_StringBuilder__Z__Z__Z__s_Enumeration$Value__scm_StringBuilder(x$3, pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags)
      }
    } else {
      children.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$2, pscope$1, sb$1, stripComments$1, decodeEntities$1, preserveWhitespace$1, minimizeTags$1) => ((x$3$2$2) => {
        const x$3$2 = $as_s_xml_Node(x$3$2$2);
        return $m_s_xml_Utility$().serialize__s_xml_Node__s_xml_NamespaceBinding__scm_StringBuilder__Z__Z__Z__s_Enumeration$Value__scm_StringBuilder(x$3$2, pscope$1, sb$1, stripComments$1, decodeEntities$1, preserveWhitespace$1, minimizeTags$1)
      }))(this, pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags)))
    }
  };
  appendQuoted__T__scm_StringBuilder__scm_StringBuilder(s, sb) {
    const ch = ($m_sc_StringOps$().contains$extension__T__C__Z(s, 34) ? 39 : 34);
    return sb.append__C__scm_StringBuilder(ch).append__T__scm_StringBuilder(s).append__C__scm_StringBuilder(ch)
  };
}
const $d_s_xml_Utility$ = new $TypeData().initClass({
  s_xml_Utility$: 0
}, false, "scala.xml.Utility$", {
  s_xml_Utility$: 1,
  O: 1,
  s_xml_parsing_TokenTests: 1
});
$c_s_xml_Utility$.prototype.$classData = $d_s_xml_Utility$;
let $n_s_xml_Utility$ = (void 0);
function $m_s_xml_Utility$() {
  if ((!$n_s_xml_Utility$)) {
    $n_s_xml_Utility$ = new $c_s_xml_Utility$()
  };
  return $n_s_xml_Utility$
}
class $c_s_xml_XML$ extends $c_O {
  constructor() {
    super();
    this.s_xml_XML$__f_xml = null;
    this.s_xml_XML$__f_xmlns = null;
    this.s_xml_XML$__f_namespace = null;
    this.s_xml_XML$__f_preserve = null;
    this.s_xml_XML$__f_space = null;
    this.s_xml_XML$__f_lang = null;
    this.s_xml_XML$__f_encoding = null;
    this.s_xml_XML$__f_xml = "xml";
    this.s_xml_XML$__f_xmlns = "xmlns";
    this.s_xml_XML$__f_namespace = "http://www.w3.org/XML/1998/namespace";
    this.s_xml_XML$__f_preserve = "preserve";
    this.s_xml_XML$__f_space = "space";
    this.s_xml_XML$__f_lang = "lang";
    this.s_xml_XML$__f_encoding = "UTF-8"
  };
}
const $d_s_xml_XML$ = new $TypeData().initClass({
  s_xml_XML$: 0
}, false, "scala.xml.XML$", {
  s_xml_XML$: 1,
  O: 1,
  s_xml_factory_XMLLoader: 1
});
$c_s_xml_XML$.prototype.$classData = $d_s_xml_XML$;
let $n_s_xml_XML$ = (void 0);
function $m_s_xml_XML$() {
  if ((!$n_s_xml_XML$)) {
    $n_s_xml_XML$ = new $c_s_xml_XML$()
  };
  return $n_s_xml_XML$
}
const $p_Lbon_jo_phy_Test$__indDom$lzycompute__Lbon_jo_html_XmlHtmlView = (function($thiz) {
  if ((!$thiz.Lbon_jo_phy_Test$__f_bitmap$0)) {
    let \u03b4md = $m_s_xml_Null$();
    const this$1 = $thiz.Lbon_jo_phy_Test$__f_height;
    \u03b4md = $ct_s_xml_UnprefixedAttribute__T__T__s_xml_MetaData__(new $c_s_xml_UnprefixedAttribute(), "height", ("" + this$1), \u03b4md);
    const this$3 = $thiz.Lbon_jo_phy_Test$__f_width;
    \u03b4md = $ct_s_xml_UnprefixedAttribute__T__T__s_xml_MetaData__(new $c_s_xml_UnprefixedAttribute(), "width", ("" + this$3), \u03b4md);
    \u03b4md = $ct_s_xml_UnprefixedAttribute__T__sc_Seq__s_xml_MetaData__(new $c_s_xml_UnprefixedAttribute(), "id", new $c_s_xml_Text("gameCanvas"), \u03b4md);
    const $$x2 = \u03b4md;
    const $$x1 = $m_s_xml_TopScope$();
    const array = [];
    const node = new $c_s_xml_Elem(null, "canvas", $$x2, $$x1, false, new $c_sjsr_WrappedVarArgs(array));
    $thiz.Lbon_jo_phy_Test$__f_indDom = new $c_Lbon_jo_html_InDom$simple(node);
    $thiz.Lbon_jo_phy_Test$__f_bitmap$0 = true
  };
  return $thiz.Lbon_jo_phy_Test$__f_indDom
});
class $c_Lbon_jo_phy_Test$ extends $c_O {
  constructor() {
    super();
    this.Lbon_jo_phy_Test$__f_indDom = null;
    this.Lbon_jo_phy_Test$__f_a0 = 0;
    this.Lbon_jo_phy_Test$__f_g = null;
    this.Lbon_jo_phy_Test$__f_v_0 = null;
    this.Lbon_jo_phy_Test$__f_p_0 = null;
    this.Lbon_jo_phy_Test$__f_centreG = null;
    this.Lbon_jo_phy_Test$__f_pd = null;
    this.Lbon_jo_phy_Test$__f_t_0 = 0;
    this.Lbon_jo_phy_Test$__f_t_1 = 0;
    this.Lbon_jo_phy_Test$__f_height = 0;
    this.Lbon_jo_phy_Test$__f_width = 0;
    this.Lbon_jo_phy_Test$__f_ctx = null;
    this.Lbon_jo_phy_Test$__f_rds = null;
    this.Lbon_jo_phy_Test$__f_t = 0;
    this.Lbon_jo_phy_Test$__f_executionStart = $L0;
    this.Lbon_jo_phy_Test$__f_scala$App$$_args = null;
    this.Lbon_jo_phy_Test$__f_scala$App$$initCode = null;
    this.Lbon_jo_phy_Test$__f_bitmap$0 = false;
    $n_Lbon_jo_phy_Test$ = this;
    $f_s_App__$init$__V(this);
    const body = new $c_Lbon_jo_phy_Test$delayedInit$body(this);
    const this$1 = this.Lbon_jo_phy_Test$__f_scala$App$$initCode;
    this$1.addOne__O__scm_ListBuffer(body)
  };
  indDom__Lbon_jo_html_XmlHtmlView() {
    return ((!this.Lbon_jo_phy_Test$__f_bitmap$0) ? $p_Lbon_jo_phy_Test$__indDom$lzycompute__Lbon_jo_html_XmlHtmlView(this) : this.Lbon_jo_phy_Test$__f_indDom)
  };
  go__V() {
    $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().setInterval((() => $m_Lbon_jo_phy_Test$().bon$jo$phy$Test$$$anonfun$go$1__O()), 0.019999999552965164)
  };
  rd__Lbon_jo_phy_PointDynamicColor() {
    const px = this.Lbon_jo_phy_Test$__f_p_0.Lbon_jo_phy_Phy$P__f_x;
    const this$1 = $m_s_util_Random$();
    const n = this.Lbon_jo_phy_Test$__f_height;
    const py = this$1.s_util_Random__f_self.nextInt__I__I(n);
    const this$2 = $m_s_util_Random$();
    const vx = (((-70) + this$2.s_util_Random__f_self.nextInt__I__I(140)) | 0);
    const $$x5 = new $c_Lbon_jo_phy_Phy$P(px, $fround(py), 0.0);
    const $$x4 = new $c_Lbon_jo_phy_Phy$V($fround(vx), 0.0, 0.0);
    const $$x3 = this.Lbon_jo_phy_Test$__f_g;
    const this$3 = $m_s_util_Random$();
    const $$x2 = this$3.s_util_Random__f_self.nextInt__I__I(255);
    const this$4 = $m_s_util_Random$();
    const $$x1 = this$4.s_util_Random__f_self.nextInt__I__I(255);
    const this$5 = $m_s_util_Random$();
    return new $c_Lbon_jo_phy_PointDynamicColor($$x5, $$x4, $$x3, new $c_Lorg_scalajs_dom_ext_Color($$x2, $$x1, this$5.s_util_Random__f_self.nextInt__I__I(255)))
  };
  bon$jo$phy$Test$$$anonfun$go$1__O() {
    const this$1 = $m_Lbon_jo_phy_Test$().Lbon_jo_phy_Test$__f_rds;
    let these = this$1;
    while ((!these.isEmpty__Z())) {
      const arg1 = these.head__O();
      const e = $as_Lbon_jo_phy_PointDynamicColor(arg1);
      const d = $m_Lbon_jo_phy_Test$().Lbon_jo_phy_Test$__f_centreG.r2__Lbon_jo_phy_Phy$XYT__F(e.Lbon_jo_phy_Phy$PointDynamicImpl__f_p);
      $m_Lbon_jo_phy_Test$().Lbon_jo_phy_Test$__f_g.Lbon_jo_phy_Phy$A__f_x = (($fround(($m_Lbon_jo_phy_Test$().Lbon_jo_phy_Test$__f_centreG.Lbon_jo_phy_Phy$P__f_x - e.Lbon_jo_phy_Phy$PointDynamicImpl__f_p.Lbon_jo_phy_Phy$P__f_x)) !== 0.0) ? $fround(($fround((1500.0 * $m_Lbon_jo_phy_Test$().Lbon_jo_phy_Test$__f_centreG.dx__Lbon_jo_phy_Phy$XYT__F(e.Lbon_jo_phy_Phy$PointDynamicImpl__f_p))) / d)) : 0.0);
      $m_Lbon_jo_phy_Test$().Lbon_jo_phy_Test$__f_g.Lbon_jo_phy_Phy$A__f_y = (($fround((300.0 - e.Lbon_jo_phy_Phy$PointDynamicImpl__f_p.Lbon_jo_phy_Phy$P__f_y)) !== 0.0) ? $fround(($fround((1500.0 * $m_Lbon_jo_phy_Test$().Lbon_jo_phy_Test$__f_centreG.dy__Lbon_jo_phy_Phy$XYT__F(e.Lbon_jo_phy_Phy$PointDynamicImpl__f_p))) / d)) : 0.0);
      e.addDt__F__V(0.019999999552965164);
      const $$x1 = $m_Lbon_jo_phy_Test$().Lbon_jo_phy_Test$__f_ctx;
      const s = e.Lbon_jo_phy_PointDynamicColor__f_c.toHex__T();
      $$x1.fillStyle = s;
      $m_Lbon_jo_phy_Test$().Lbon_jo_phy_Test$__f_ctx.fillRect($fround(((-1.0) + e.Lbon_jo_phy_Phy$PointDynamicImpl__f_p.Lbon_jo_phy_Phy$P__f_x)), $fround(((-1.0) + e.Lbon_jo_phy_Phy$PointDynamicImpl__f_p.Lbon_jo_phy_Phy$P__f_y)), 2.0, 2.0);
      $m_Lbon_jo_phy_Test$().Lbon_jo_phy_Test$__f_t = ((1 + $m_Lbon_jo_phy_Test$().Lbon_jo_phy_Test$__f_t) | 0);
      these = $as_sci_List(these.tail__O())
    };
    if (($m_Lbon_jo_phy_Test$().Lbon_jo_phy_Test$__f_rds.length__I() < 12)) {
      const this$3 = $m_s_util_Random$();
      if ((this$3.s_util_Random__f_self.nextDouble__D() > 0.85)) {
        const $$x2 = $m_Lbon_jo_phy_Test$();
        const this$4 = $m_Lbon_jo_phy_Test$().Lbon_jo_phy_Test$__f_rds;
        const elem = $m_Lbon_jo_phy_Test$().rd__Lbon_jo_phy_PointDynamicColor();
        $$x2.Lbon_jo_phy_Test$__f_rds = $as_sci_List($f_sc_StrictOptimizedSeqOps__appended__O__O(this$4, elem));
        return (void 0)
      } else {
        return (void 0)
      }
    } else {
      return (void 0)
    }
  };
  delayedEndpoint$bon$jo$phy$Test$1__V() {
    this.Lbon_jo_phy_Test$__f_a0 = 0;
    this.Lbon_jo_phy_Test$__f_g = new $c_Lbon_jo_phy_Phy$A(0.0, 0.0, 0.0);
    this.Lbon_jo_phy_Test$__f_v_0 = new $c_Lbon_jo_phy_Phy$V(70.0, 0.0, 0.0);
    this.Lbon_jo_phy_Test$__f_p_0 = new $c_Lbon_jo_phy_Phy$P(600.0, 350.0, 0.0);
    this.Lbon_jo_phy_Test$__f_centreG = new $c_Lbon_jo_phy_Phy$P(600.0, 300.0, 0.0);
    this.Lbon_jo_phy_Test$__f_pd = new $c_Lbon_jo_phy_PointDynamicColor(this.Lbon_jo_phy_Test$__f_p_0, this.Lbon_jo_phy_Test$__f_v_0, this.Lbon_jo_phy_Test$__f_g, $m_Lorg_scalajs_dom_ext_Color$().Lorg_scalajs_dom_ext_Color$__f_Blue);
    this.Lbon_jo_phy_Test$__f_t_0 = 0;
    this.Lbon_jo_phy_Test$__f_t_1 = 10;
    this.Lbon_jo_phy_Test$__f_height = 600;
    this.Lbon_jo_phy_Test$__f_width = 1200;
    const $$x1 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().body;
    const this$1 = this.indDom__Lbon_jo_html_XmlHtmlView();
    const _1 = this$1.Lbon_jo_html_InDom$simple__f_node;
    $$x1.appendChild($m_Lbon_jo_html_DomShell$$c$().apply__T__Lorg_scalajs_dom_raw_Element($f_sc_IterableOnceOps__mkString__T__T__T__T(_1, "", "", "")));
    this.Lbon_jo_phy_Test$__f_ctx = this.indDom__Lbon_jo_html_XmlHtmlView().me__Lorg_scalajs_dom_raw_HTMLElement().getContext("2d");
    this.Lbon_jo_phy_Test$__f_ctx.transform(1.0, 0.0, 0.0, (-1.0), 1.0, 1.0);
    this.Lbon_jo_phy_Test$__f_ctx.translate(0.0, ((-this.Lbon_jo_phy_Test$__f_height) | 0));
    this.Lbon_jo_phy_Test$__f_ctx.fillStyle = "red";
    this.Lbon_jo_phy_Test$__f_ctx.fillRect(599.0, 299.0, 2.0, 2.0);
    const rassoc$1 = this.Lbon_jo_phy_Test$__f_pd;
    const this$4 = $m_sci_Nil$();
    this.Lbon_jo_phy_Test$__f_rds = new $c_sci_$colon$colon(rassoc$1, this$4);
    this.Lbon_jo_phy_Test$__f_t = 0;
    this.go__V()
  };
}
const $d_Lbon_jo_phy_Test$ = new $TypeData().initClass({
  Lbon_jo_phy_Test$: 0
}, false, "bon.jo.phy.Test$", {
  Lbon_jo_phy_Test$: 1,
  O: 1,
  s_App: 1,
  s_DelayedInit: 1
});
$c_Lbon_jo_phy_Test$.prototype.$classData = $d_Lbon_jo_phy_Test$;
let $n_Lbon_jo_phy_Test$ = (void 0);
function $m_Lbon_jo_phy_Test$() {
  if ((!$n_Lbon_jo_phy_Test$)) {
    $n_Lbon_jo_phy_Test$ = new $c_Lbon_jo_phy_Test$()
  };
  return $n_Lbon_jo_phy_Test$
}
class $c_Lbon_jo_phy_Test$delayedInit$body extends $c_sr_AbstractFunction0 {
  constructor(outer) {
    super();
    this.Lbon_jo_phy_Test$delayedInit$body__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lbon_jo_phy_Test$delayedInit$body__f_$outer = outer
    }
  };
  apply__O() {
    this.Lbon_jo_phy_Test$delayedInit$body__f_$outer.delayedEndpoint$bon$jo$phy$Test$1__V()
  };
}
const $d_Lbon_jo_phy_Test$delayedInit$body = new $TypeData().initClass({
  Lbon_jo_phy_Test$delayedInit$body: 0
}, false, "bon.jo.phy.Test$delayedInit$body", {
  Lbon_jo_phy_Test$delayedInit$body: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_Lbon_jo_phy_Test$delayedInit$body.prototype.$classData = $d_Lbon_jo_phy_Test$delayedInit$body;
const $f_jl_Boolean__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_jl_Boolean__hashCode__I = (function($thiz) {
  return ($uZ($thiz) ? 1231 : 1237)
});
const $f_jl_Boolean__toString__T = (function($thiz) {
  const b = $uZ($thiz);
  return ("" + b)
});
const $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
const $f_jl_Character__hashCode__I = (function($thiz) {
  return $uC($thiz)
});
const $f_jl_Character__equals__O__Z = (function($thiz, that) {
  if ((that instanceof $Char)) {
    const $$x1 = $uC($thiz);
    const this$1 = $as_jl_Character(that);
    return ($$x1 === $uC(this$1))
  } else {
    return false
  }
});
const $f_jl_Character__toString__T = (function($thiz) {
  const c = $uC($thiz);
  return $as_T(String.fromCharCode(c))
});
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
const $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
class $c_jl_Error extends $c_jl_Throwable {
}
const $ct_jl_Exception__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_Exception extends $c_jl_Throwable {
}
const $d_jl_Exception = new $TypeData().initClass({
  jl_Exception: 0
}, false, "java.lang.Exception", {
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Exception.prototype.$classData = $d_jl_Exception;
class $c_s_$less$colon$less extends $c_O {
}
class $c_s_Predef$ extends $c_s_LowPriorityImplicits {
  constructor() {
    super();
    this.s_Predef$__f_Map = null;
    this.s_Predef$__f_Set = null;
    this.s_Predef$__f_$minus$greater = null;
    this.s_Predef$__f_Manifest = null;
    this.s_Predef$__f_NoManifest = null;
    $n_s_Predef$ = this;
    $m_s_package$();
    $m_sci_List$();
    this.s_Predef$__f_Map = $m_sci_Map$();
    this.s_Predef$__f_Set = $m_sci_Set$();
    this.s_Predef$__f_$minus$greater = $m_T2$();
    this.s_Predef$__f_Manifest = $m_s_reflect_Manifest$();
    this.s_Predef$__f_NoManifest = $m_s_reflect_NoManifest$()
  };
  require__Z__V(requirement) {
    if ((!requirement)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed")
    }
  };
}
const $d_s_Predef$ = new $TypeData().initClass({
  s_Predef$: 0
}, false, "scala.Predef$", {
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  s_LowPriorityImplicits2: 1,
  O: 1
});
$c_s_Predef$.prototype.$classData = $d_s_Predef$;
let $n_s_Predef$ = (void 0);
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$()
  };
  return $n_s_Predef$
}
const $f_s_Product2__productElement__I__O = (function($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz._1__O();
      break
    }
    case 1: {
      return $thiz._2__O();
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"))
    }
  }
});
const $ct_sc_IterableFactory$Delegate__sc_IterableFactory__ = (function($thiz, delegate) {
  $thiz.sc_IterableFactory$Delegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_IterableFactory$Delegate extends $c_O {
  constructor() {
    super();
    this.sc_IterableFactory$Delegate__f_delegate = null
  };
  from__sc_IterableOnce__O(it) {
    return this.sc_IterableFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it)
  };
  newBuilder__scm_Builder() {
    return this.sc_IterableFactory$Delegate__f_delegate.newBuilder__scm_Builder()
  };
}
const $f_sc_IterableOps__sizeCompare__I__I = (function($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1
  } else {
    const known = $thiz.knownSize__I();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1))
    } else {
      let i = 0;
      const it = $thiz.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        if ((i === otherSize)) {
          return (it.hasNext__Z() ? 1 : 0)
        };
        it.next__O();
        i = ((1 + i) | 0)
      };
      return ((i - otherSize) | 0)
    }
  }
});
const $f_sc_IterableOps__filter__F1__O = (function($thiz, pred) {
  return $thiz.fromSpecific__sc_IterableOnce__O(new $c_sc_View$Filter($thiz, pred, false))
});
const $f_sc_IterableOps__filterNot__F1__O = (function($thiz, pred) {
  return $thiz.fromSpecific__sc_IterableOnce__O(new $c_sc_View$Filter($thiz, pred, true))
});
const $f_sc_IterableOps__drop__I__O = (function($thiz, n) {
  return $thiz.fromSpecific__sc_IterableOnce__O($ct_sc_View$Drop__sc_IterableOps__I__(new $c_sc_View$Drop(), $thiz, n))
});
const $f_sc_IterableOps__tail__O = (function($thiz) {
  if ($thiz.isEmpty__Z()) {
    throw $ct_jl_UnsupportedOperationException__(new $c_jl_UnsupportedOperationException())
  };
  return $thiz.drop__I__O(1)
});
function $is_sc_IterableOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOps)))
}
function $as_sc_IterableOps(obj) {
  return (($is_sc_IterableOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOps"))
}
function $isArrayOf_sc_IterableOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOps)))
}
function $asArrayOf_sc_IterableOps(obj, depth) {
  return (($isArrayOf_sc_IterableOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOps;", depth))
}
const $f_sc_Iterator__indexWhere__F1__I__I = (function($thiz, p, from) {
  let i = ((from > 0) ? from : 0);
  $thiz.drop__I__sc_Iterator(from);
  while ($thiz.hasNext__Z()) {
    if ($uZ(p.apply__O__O($thiz.next__O()))) {
      return i
    };
    i = ((1 + i) | 0)
  };
  return (-1)
});
const $f_sc_Iterator__concat__F0__sc_Iterator = (function($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).concat__F0__sc_Iterator(xs)
});
const $f_sc_Iterator__drop__I__sc_Iterator = (function($thiz, n) {
  let i = 0;
  while (((i < n) && $thiz.hasNext__Z())) {
    $thiz.next__O();
    i = ((1 + i) | 0)
  };
  return $thiz
});
const $f_sc_Iterator__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  const those = that.iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && those.hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), those.next__O()))) {
      return false
    }
  };
  return ($thiz.hasNext__Z() === those.hasNext__Z())
});
function $is_sc_Iterator(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterator)))
}
function $as_sc_Iterator(obj) {
  return (($is_sc_Iterator(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator"))
}
function $isArrayOf_sc_Iterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator)))
}
function $asArrayOf_sc_Iterator(obj, depth) {
  return (($isArrayOf_sc_Iterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator;", depth))
}
class $c_sc_Iterator$ extends $c_O {
  constructor() {
    super();
    this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
    $n_sc_Iterator$ = this;
    this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19()
  };
  newBuilder__scm_Builder() {
    return new $c_sc_Iterator$$anon$21()
  };
  from__sc_IterableOnce__O(source) {
    return source.iterator__sc_Iterator()
  };
}
const $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
let $n_sc_Iterator$ = (void 0);
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
const $ct_sc_MapFactory$Delegate__sc_MapFactory__ = (function($thiz, delegate) {
  $thiz.sc_MapFactory$Delegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_MapFactory$Delegate extends $c_O {
  constructor() {
    super();
    this.sc_MapFactory$Delegate__f_delegate = null
  };
  from__sc_IterableOnce__O(it) {
    return this.sc_MapFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it)
  };
  newBuilder__scm_Builder() {
    return this.sc_MapFactory$Delegate__f_delegate.newBuilder__scm_Builder()
  };
}
class $c_sc_View$ extends $c_O {
  from__sc_IterableOnce__sc_View(it) {
    if ($is_sc_View(it)) {
      const x2 = $as_sc_View(it);
      return x2
    } else if ($is_sc_Iterable(it)) {
      const x3 = $as_sc_Iterable(it);
      const it$1 = new $c_sjsr_AnonFunction0(((this$1, x3$1) => (() => x3$1.iterator__sc_Iterator()))(this, x3));
      return new $c_sc_View$$anon$1(it$1)
    } else {
      const this$3 = $m_sci_LazyList$().from__sc_IterableOnce__sci_LazyList(it);
      return $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), this$3)
    }
  };
  newBuilder__scm_Builder() {
    const this$3 = new $c_scm_ArrayBuffer$$anon$1();
    const f = new $c_sjsr_AnonFunction1(((this$2) => ((it$2) => {
      const it = $as_sc_IterableOnce(it$2);
      return $m_sc_View$().from__sc_IterableOnce__sc_View(it)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$3, f)
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sc_View(source)
  };
}
const $d_sc_View$ = new $TypeData().initClass({
  sc_View$: 0
}, false, "scala.collection.View$", {
  sc_View$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$.prototype.$classData = $d_sc_View$;
let $n_sc_View$ = (void 0);
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$()
  };
  return $n_sc_View$
}
class $c_sci_BitmapIndexedMapNode extends $c_sci_MapNode {
  constructor(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
    super();
    this.sci_BitmapIndexedMapNode__f_dataMap = 0;
    this.sci_BitmapIndexedMapNode__f_nodeMap = 0;
    this.sci_BitmapIndexedMapNode__f_content = null;
    this.sci_BitmapIndexedMapNode__f_originalHashes = null;
    this.sci_BitmapIndexedMapNode__f_size = 0;
    this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = 0;
    this.sci_BitmapIndexedMapNode__f_dataMap = dataMap;
    this.sci_BitmapIndexedMapNode__f_nodeMap = nodeMap;
    this.sci_BitmapIndexedMapNode__f_content = content;
    this.sci_BitmapIndexedMapNode__f_originalHashes = originalHashes;
    this.sci_BitmapIndexedMapNode__f_size = size;
    this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = cachedJavaKeySetHashCode
  };
  size__I() {
    return this.sci_BitmapIndexedMapNode__f_size
  };
  cachedJavaKeySetHashCode__I() {
    return this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode
  };
  getKey__I__O(index) {
    return this.sci_BitmapIndexedMapNode__f_content.get((index << 1))
  };
  getValue__I__O(index) {
    return this.sci_BitmapIndexedMapNode__f_content.get(((1 + (index << 1)) | 0))
  };
  getPayload__I__T2(index) {
    return new $c_T2(this.sci_BitmapIndexedMapNode__f_content.get((index << 1)), this.sci_BitmapIndexedMapNode__f_content.get(((1 + (index << 1)) | 0)))
  };
  getHash__I__I(index) {
    return this.sci_BitmapIndexedMapNode__f_originalHashes.get(index)
  };
  getNode__I__sci_MapNode(index) {
    return $as_sci_MapNode(this.sci_BitmapIndexedMapNode__f_content.get((((((-1) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - index) | 0)))
  };
  apply__O__I__I__I__O(key, originalHash, keyHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.getKey__I__O(index))) {
        return this.getValue__I__O(index)
      } else {
        throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
      }
    } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      return this.getNode__I__sci_MapNode($m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos)).apply__O__I__I__I__O(key, originalHash, keyHash, ((5 + shift) | 0))
    } else {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    }
  };
  get__O__I__I__I__s_Option(key, originalHash, keyHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      const key0 = this.getKey__I__O(index);
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, key0) ? new $c_s_Some(this.getValue__I__O(index)) : $m_s_None$())
    } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
      return this.getNode__I__sci_MapNode(index$2).get__O__I__I__I__s_Option(key, originalHash, keyHash, ((5 + shift) | 0))
    } else {
      return $m_s_None$()
    }
  };
  getOrElse__O__I__I__I__F0__O(key, originalHash, keyHash, shift, f) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      const key0 = this.getKey__I__O(index);
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, key0) ? this.getValue__I__O(index) : f.apply__O())
    } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
      return this.getNode__I__sci_MapNode(index$2).getOrElse__O__I__I__I__F0__O(key, originalHash, keyHash, ((5 + shift) | 0), f)
    } else {
      return f.apply__O()
    }
  };
  containsKey__O__I__I__I__Z(key, originalHash, keyHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      return ((this.sci_BitmapIndexedMapNode__f_originalHashes.get(index) === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.getKey__I__O(index)))
    } else {
      return (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0) && this.getNode__I__sci_MapNode($m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos)).containsKey__O__I__I__I__Z(key, originalHash, keyHash, ((5 + shift) | 0)))
    }
  };
  updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, originalHash, keyHash, shift, replaceValue) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      const key0 = this.getKey__I__O(index);
      const key0UnimprovedHash = this.getHash__I__I(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key0, key))) {
        if (replaceValue) {
          const value0 = this.getValue__I__O(index);
          return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.copyAndSetValue__I__O__O__sci_BitmapIndexedMapNode(bitpos, key, value))
        } else {
          return this
        }
      } else {
        const value0$2 = this.getValue__I__O(index);
        const key0Hash = $m_sc_Hashing$().improve__I__I(key0UnimprovedHash);
        const subNodeNew = this.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        return this.copyAndMigrateFromInlineToNode__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, key0Hash, subNodeNew)
      }
    } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
      const subNode = this.getNode__I__sci_MapNode(index$2);
      const subNodeNew$2 = subNode.updated__O__O__I__I__I__Z__sci_MapNode(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
      return ((subNodeNew$2 === subNode) ? this : this.copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, subNode, subNodeNew$2))
    } else {
      return this.copyAndInsertValue__I__O__I__I__O__sci_BitmapIndexedMapNode(bitpos, key, originalHash, keyHash, value)
    }
  };
  removed__O__I__I__I__sci_BitmapIndexedMapNode(key, originalHash, keyHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      const key0 = this.getKey__I__O(index);
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(key0, key)) {
        const i = this.sci_BitmapIndexedMapNode__f_dataMap;
        let $$x1;
        if (($m_jl_Integer$().bitCount__I__I(i) === 2)) {
          const i$1 = this.sci_BitmapIndexedMapNode__f_nodeMap;
          $$x1 = ($m_jl_Integer$().bitCount__I__I(i$1) === 0)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const newDataMap = ((shift === 0) ? (this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos) : $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(keyHash, 0)));
          if ((index === 0)) {
            const array = [this.getKey__I__O(1), this.getValue__I__O(1)];
            const xs = new $c_sjsr_WrappedVarArgs(array);
            $m_s_reflect_ManifestFactory$AnyManifest$();
            const len = xs.length__I();
            const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
            const this$7 = new $c_sc_IndexedSeqView$Id(xs);
            const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$7);
            let i$2 = 0;
            while (iterator.hasNext__Z()) {
              array$1.set(i$2, iterator.next__O());
              i$2 = ((1 + i$2) | 0)
            };
            return new $c_sci_BitmapIndexedMapNode(newDataMap, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_BitmapIndexedMapNode__f_originalHashes.get(1)]), 1, $m_sc_Hashing$().improve__I__I(this.getHash__I__I(1)))
          } else {
            const array$2 = [this.getKey__I__O(0), this.getValue__I__O(0)];
            const xs$1 = new $c_sjsr_WrappedVarArgs(array$2);
            $m_s_reflect_ManifestFactory$AnyManifest$();
            const len$1 = xs$1.length__I();
            const array$3 = $newArrayObject($d_O.getArrayOf(), [len$1]);
            const this$14 = new $c_sc_IndexedSeqView$Id(xs$1);
            const iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$14);
            let i$3 = 0;
            while (iterator$1.hasNext__Z()) {
              array$3.set(i$3, iterator$1.next__O());
              i$3 = ((1 + i$3) | 0)
            };
            return new $c_sci_BitmapIndexedMapNode(newDataMap, 0, array$3, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_BitmapIndexedMapNode__f_originalHashes.get(0)]), 1, $m_sc_Hashing$().improve__I__I(this.getHash__I__I(0)))
          }
        } else {
          return this.copyAndRemoveValue__I__I__sci_BitmapIndexedMapNode(bitpos, keyHash)
        }
      } else {
        return this
      }
    } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
      const subNode = this.getNode__I__sci_MapNode(index$2);
      const subNodeNew = subNode.removed__O__I__I__I__sci_MapNode(key, originalHash, keyHash, ((5 + shift) | 0));
      if ((subNodeNew === subNode)) {
        return this
      };
      const subNodeNewSize = subNodeNew.size__I();
      return ((subNodeNewSize === 1) ? ((this.sci_BitmapIndexedMapNode__f_size === subNode.size__I()) ? $as_sci_BitmapIndexedMapNode(subNodeNew) : this.copyAndMigrateFromNodeToInline__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, subNode, subNodeNew)) : ((subNodeNewSize > 1) ? this.copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, subNode, subNodeNew) : this))
    } else {
      return this
    }
  };
  mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
    if ((shift >= 32)) {
      const this$4 = $m_sci_Vector$();
      const array = [new $c_T2(key0, value0), new $c_T2(key1, value1)];
      const elems = new $c_sjsr_WrappedVarArgs(array);
      return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, this$4.from__sc_IterableOnce__sci_Vector(elems))
    } else {
      const mask0 = $m_sci_Node$().maskFrom__I__I__I(keyHash0, shift);
      const mask1 = $m_sci_Node$().maskFrom__I__I__I(keyHash1, shift);
      const newCachedHash = ((keyHash0 + keyHash1) | 0);
      if ((mask0 !== mask1)) {
        const dataMap = ($m_sci_Node$().bitposFrom__I__I(mask0) | $m_sci_Node$().bitposFrom__I__I(mask1));
        if ((mask0 < mask1)) {
          const array$1 = [key0, value0, key1, value1];
          const xs = new $c_sjsr_WrappedVarArgs(array$1);
          $m_s_reflect_ManifestFactory$AnyManifest$();
          const len = xs.length__I();
          const array$2 = $newArrayObject($d_O.getArrayOf(), [len]);
          const this$11 = new $c_sc_IndexedSeqView$Id(xs);
          const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$11);
          let i = 0;
          while (iterator.hasNext__Z()) {
            array$2.set(i, iterator.next__O());
            i = ((1 + i) | 0)
          };
          return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$2, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalHash0, originalHash1]), 2, newCachedHash)
        } else {
          const array$3 = [key1, value1, key0, value0];
          const xs$1 = new $c_sjsr_WrappedVarArgs(array$3);
          $m_s_reflect_ManifestFactory$AnyManifest$();
          const len$1 = xs$1.length__I();
          const array$4 = $newArrayObject($d_O.getArrayOf(), [len$1]);
          const this$18 = new $c_sc_IndexedSeqView$Id(xs$1);
          const iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$18);
          let i$1 = 0;
          while (iterator$1.hasNext__Z()) {
            array$4.set(i$1, iterator$1.next__O());
            i$1 = ((1 + i$1) | 0)
          };
          return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$4, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalHash1, originalHash0]), 2, newCachedHash)
        }
      } else {
        const nodeMap = $m_sci_Node$().bitposFrom__I__I(mask0);
        const node = this.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
        const array$5 = [node];
        const xs$2 = new $c_sjsr_WrappedVarArgs(array$5);
        $m_s_reflect_ManifestFactory$AnyManifest$();
        const len$2 = xs$2.length__I();
        const array$6 = $newArrayObject($d_O.getArrayOf(), [len$2]);
        const this$25 = new $c_sc_IndexedSeqView$Id(xs$2);
        const iterator$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$25);
        let i$2 = 0;
        while (iterator$2.hasNext__Z()) {
          array$6.set(i$2, iterator$2.next__O());
          i$2 = ((1 + i$2) | 0)
        };
        return new $c_sci_BitmapIndexedMapNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, node.size__I(), node.cachedJavaKeySetHashCode__I())
      }
    }
  };
  hasNodes__Z() {
    return (this.sci_BitmapIndexedMapNode__f_nodeMap !== 0)
  };
  nodeArity__I() {
    const i = this.sci_BitmapIndexedMapNode__f_nodeMap;
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  hasPayload__Z() {
    return (this.sci_BitmapIndexedMapNode__f_dataMap !== 0)
  };
  payloadArity__I() {
    const i = this.sci_BitmapIndexedMapNode__f_dataMap;
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  dataIndex__I__I(bitpos) {
    const i = (this.sci_BitmapIndexedMapNode__f_dataMap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  nodeIndex__I__I(bitpos) {
    const i = (this.sci_BitmapIndexedMapNode__f_nodeMap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  copyAndSetValue__I__O__O__sci_BitmapIndexedMapNode(bitpos, newKey, newValue) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idx = (dataIx << 1);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    const length = src.u.length;
    $systemArraycopy(src, 0, dst, 0, length);
    dst.set(((1 + idx) | 0), newValue);
    return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, dst, this.sci_BitmapIndexedMapNode__f_originalHashes, this.sci_BitmapIndexedMapNode__f_size, this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode)
  };
  copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, oldNode, newNode) {
    const idx = (((((-1) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    const length = src.u.length;
    $systemArraycopy(src, 0, dst, 0, length);
    dst.set(idx, newNode);
    return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, dst, this.sci_BitmapIndexedMapNode__f_originalHashes, ((((this.sci_BitmapIndexedMapNode__f_size - oldNode.size__I()) | 0) + newNode.size__I()) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + newNode.cachedJavaKeySetHashCode__I()) | 0))
  };
  copyAndInsertValue__I__O__I__I__O__sci_BitmapIndexedMapNode(bitpos, key, originalHash, keyHash, value) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idx = (dataIx << 1);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [((2 + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idx);
    dst.set(idx, key);
    dst.set(((1 + idx) | 0), value);
    const destPos = ((2 + idx) | 0);
    const length = ((src.u.length - idx) | 0);
    $systemArraycopy(src, idx, dst, destPos, length);
    const dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx, originalHash);
    return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap | bitpos), this.sci_BitmapIndexedMapNode__f_nodeMap, dst, dstHashes, ((1 + this.sci_BitmapIndexedMapNode__f_size) | 0), ((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + keyHash) | 0))
  };
  copyAndRemoveValue__I__I__sci_BitmapIndexedMapNode(bitpos, keyHash) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idx = (dataIx << 1);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [(((-2) + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idx);
    const srcPos = ((2 + idx) | 0);
    const length = (((-2) + ((src.u.length - idx) | 0)) | 0);
    $systemArraycopy(src, srcPos, dst, idx, length);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
    return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos), this.sci_BitmapIndexedMapNode__f_nodeMap, dst, dstHashes, (((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0), ((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0))
  };
  migrateFromInlineToNodeInPlace__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, keyHash, node) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idxOld = (dataIx << 1);
    const idxNew = (((((-2) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [(((-1) + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idxOld);
    const srcPos = ((2 + idxOld) | 0);
    const length = ((idxNew - idxOld) | 0);
    $systemArraycopy(src, srcPos, dst, idxOld, length);
    dst.set(idxNew, node);
    const srcPos$1 = ((2 + idxNew) | 0);
    const destPos = ((1 + idxNew) | 0);
    const length$1 = (((-2) + ((src.u.length - idxNew) | 0)) | 0);
    $systemArraycopy(src, srcPos$1, dst, destPos, length$1);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
    this.sci_BitmapIndexedMapNode__f_dataMap = (this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos);
    this.sci_BitmapIndexedMapNode__f_nodeMap = (this.sci_BitmapIndexedMapNode__f_nodeMap | bitpos);
    this.sci_BitmapIndexedMapNode__f_content = dst;
    this.sci_BitmapIndexedMapNode__f_originalHashes = dstHashes;
    this.sci_BitmapIndexedMapNode__f_size = (((((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0) + node.size__I()) | 0);
    this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0);
    return this
  };
  copyAndMigrateFromInlineToNode__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, keyHash, node) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idxOld = (dataIx << 1);
    const idxNew = (((((-2) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [(((-1) + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idxOld);
    const srcPos = ((2 + idxOld) | 0);
    const length = ((idxNew - idxOld) | 0);
    $systemArraycopy(src, srcPos, dst, idxOld, length);
    dst.set(idxNew, node);
    const srcPos$1 = ((2 + idxNew) | 0);
    const destPos = ((1 + idxNew) | 0);
    const length$1 = (((-2) + ((src.u.length - idxNew) | 0)) | 0);
    $systemArraycopy(src, srcPos$1, dst, destPos, length$1);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
    return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos), (this.sci_BitmapIndexedMapNode__f_nodeMap | bitpos), dst, dstHashes, (((((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0) + node.size__I()) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
  };
  copyAndMigrateFromNodeToInline__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, oldNode, node) {
    const idxOld = (((((-1) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const dataIxNew = this.dataIndex__I__I(bitpos);
    const idxNew = (dataIxNew << 1);
    const key = node.getKey__I__O(0);
    const value = node.getValue__I__O(0);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [((1 + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idxNew);
    dst.set(idxNew, key);
    dst.set(((1 + idxNew) | 0), value);
    const destPos = ((2 + idxNew) | 0);
    const length = ((idxOld - idxNew) | 0);
    $systemArraycopy(src, idxNew, dst, destPos, length);
    const srcPos = ((1 + idxOld) | 0);
    const destPos$1 = ((2 + idxOld) | 0);
    const length$1 = (((-1) + ((src.u.length - idxOld) | 0)) | 0);
    $systemArraycopy(src, srcPos, dst, destPos$1, length$1);
    const hash = node.getHash__I__I(0);
    const dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIxNew, hash);
    return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap | bitpos), (this.sci_BitmapIndexedMapNode__f_nodeMap ^ bitpos), dst, dstHashes, ((1 + ((this.sci_BitmapIndexedMapNode__f_size - oldNode.size__I()) | 0)) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
  };
  foreachWithHash__F3__V(f) {
    let i = 0;
    const i$1 = this.sci_BitmapIndexedMapNode__f_dataMap;
    const iN = $m_jl_Integer$().bitCount__I__I(i$1);
    while ((i < iN)) {
      f.apply__O__O__O__O(this.getKey__I__O(i), this.getValue__I__O(i), this.getHash__I__I(i));
      i = ((1 + i) | 0)
    };
    const i$2 = this.sci_BitmapIndexedMapNode__f_nodeMap;
    const jN = $m_jl_Integer$().bitCount__I__I(i$2);
    let j = 0;
    while ((j < jN)) {
      this.getNode__I__sci_MapNode(j).foreachWithHash__F3__V(f);
      j = ((1 + j) | 0)
    }
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
      const x2 = $as_sci_BitmapIndexedMapNode(that);
      if ((this === x2)) {
        return true
      } else {
        let $$x1;
        if (((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode === x2.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode) && (this.sci_BitmapIndexedMapNode__f_nodeMap === x2.sci_BitmapIndexedMapNode__f_nodeMap)) && (this.sci_BitmapIndexedMapNode__f_dataMap === x2.sci_BitmapIndexedMapNode__f_dataMap)) && (this.sci_BitmapIndexedMapNode__f_size === x2.sci_BitmapIndexedMapNode__f_size))) {
          const a = this.sci_BitmapIndexedMapNode__f_originalHashes;
          const b = x2.sci_BitmapIndexedMapNode__f_originalHashes;
          $$x1 = $m_ju_Arrays$().equals__AI__AI__Z(a, b)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const a1 = this.sci_BitmapIndexedMapNode__f_content;
          const a2 = x2.sci_BitmapIndexedMapNode__f_content;
          const length = this.sci_BitmapIndexedMapNode__f_content.u.length;
          if ((a1 === a2)) {
            return true
          } else {
            let isEqual = true;
            let i = 0;
            while ((isEqual && (i < length))) {
              isEqual = $m_sr_BoxesRunTime$().equals__O__O__Z(a1.get(i), a2.get(i));
              i = ((1 + i) | 0)
            };
            return isEqual
          }
        } else {
          return false
        }
      }
    } else {
      return false
    }
  };
  hashCode__I() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.")
  };
  copy__sci_BitmapIndexedMapNode() {
    const contentClone = $asArrayOf_O(this.sci_BitmapIndexedMapNode__f_content.clone__O(), 1);
    const contentLength = contentClone.u.length;
    const i = this.sci_BitmapIndexedMapNode__f_dataMap;
    let i$1 = ($m_jl_Integer$().bitCount__I__I(i) << 1);
    while ((i$1 < contentLength)) {
      contentClone.set(i$1, $as_sci_MapNode(contentClone.get(i$1)).copy__sci_MapNode());
      i$1 = ((1 + i$1) | 0)
    };
    return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, contentClone, $asArrayOf_I(this.sci_BitmapIndexedMapNode__f_originalHashes.clone__O(), 1), this.sci_BitmapIndexedMapNode__f_size, this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode)
  };
  filterImpl__F1__Z__sci_BitmapIndexedMapNode(pred, flipped) {
    if ((this.sci_BitmapIndexedMapNode__f_size === 0)) {
      return this
    } else if ((this.sci_BitmapIndexedMapNode__f_size === 1)) {
      if (($uZ(pred.apply__O__O(this.getPayload__I__T2(0))) !== flipped)) {
        return this
      } else {
        const this$1 = $m_sci_MapNode$();
        return this$1.sci_MapNode$__f_EmptyMapNode
      }
    } else if ((this.sci_BitmapIndexedMapNode__f_nodeMap === 0)) {
      const i = this.sci_BitmapIndexedMapNode__f_dataMap;
      const minimumIndex = ((i === 0) ? 32 : ((31 - $clz32((i & ((-i) | 0)))) | 0));
      const i$1 = this.sci_BitmapIndexedMapNode__f_dataMap;
      const maximumIndex = ((32 - $clz32(i$1)) | 0);
      let newDataMap = 0;
      let newCachedHashCode = 0;
      let dataIndex = 0;
      let i$2 = minimumIndex;
      while ((i$2 < maximumIndex)) {
        const bitpos = $m_sci_Node$().bitposFrom__I__I(i$2);
        if (((bitpos & this.sci_BitmapIndexedMapNode__f_dataMap) !== 0)) {
          const payload = this.getPayload__I__T2(dataIndex);
          const passed = ($uZ(pred.apply__O__O(payload)) !== flipped);
          if (passed) {
            newDataMap = (newDataMap | bitpos);
            newCachedHashCode = ((newCachedHashCode + $m_sc_Hashing$().improve__I__I(this.getHash__I__I(dataIndex))) | 0)
          };
          dataIndex = ((1 + dataIndex) | 0)
        };
        i$2 = ((1 + i$2) | 0)
      };
      if ((newDataMap === 0)) {
        const this$3 = $m_sci_MapNode$();
        return this$3.sci_MapNode$__f_EmptyMapNode
      } else if ((newDataMap === this.sci_BitmapIndexedMapNode__f_dataMap)) {
        return this
      } else {
        const i$3 = newDataMap;
        const newSize = $m_jl_Integer$().bitCount__I__I(i$3);
        const newContent = $newArrayObject($d_O.getArrayOf(), [(newSize << 1)]);
        const newOriginalHashCodes = $newArrayObject($d_I.getArrayOf(), [newSize]);
        const i$4 = newDataMap;
        const newMaximumIndex = ((32 - $clz32(i$4)) | 0);
        const i$5 = newDataMap;
        let j = ((i$5 === 0) ? 32 : ((31 - $clz32((i$5 & ((-i$5) | 0)))) | 0));
        let newDataIndex = 0;
        while ((j < newMaximumIndex)) {
          const bitpos$2 = $m_sci_Node$().bitposFrom__I__I(j);
          if (((bitpos$2 & newDataMap) !== 0)) {
            const oldIndex = $m_sci_Node$().indexFrom__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, bitpos$2);
            newContent.set((newDataIndex << 1), this.sci_BitmapIndexedMapNode__f_content.get((oldIndex << 1)));
            newContent.set(((1 + (newDataIndex << 1)) | 0), this.sci_BitmapIndexedMapNode__f_content.get(((1 + (oldIndex << 1)) | 0)));
            newOriginalHashCodes.set(newDataIndex, this.sci_BitmapIndexedMapNode__f_originalHashes.get(oldIndex));
            newDataIndex = ((1 + newDataIndex) | 0)
          };
          j = ((1 + j) | 0)
        };
        return new $c_sci_BitmapIndexedMapNode(newDataMap, 0, newContent, newOriginalHashCodes, newSize, newCachedHashCode)
      }
    } else {
      const allMap = (this.sci_BitmapIndexedMapNode__f_dataMap | this.sci_BitmapIndexedMapNode__f_nodeMap);
      const minimumIndex$2 = ((allMap === 0) ? 32 : ((31 - $clz32((allMap & ((-allMap) | 0)))) | 0));
      const maximumIndex$2 = ((32 - $clz32(allMap)) | 0);
      let oldDataPassThrough = 0;
      let nodeMigrateToDataTargetMap = 0;
      let nodesToMigrateToData = null;
      let nodesToPassThroughMap = 0;
      let mapOfNewNodes = 0;
      let newNodes = null;
      let newDataMap$2 = 0;
      let newNodeMap = 0;
      let newSize$2 = 0;
      let newCachedHashCode$2 = 0;
      let dataIndex$2 = 0;
      let nodeIndex = 0;
      let i$2$1 = minimumIndex$2;
      while ((i$2$1 < maximumIndex$2)) {
        const bitpos$3 = $m_sci_Node$().bitposFrom__I__I(i$2$1);
        if (((bitpos$3 & this.sci_BitmapIndexedMapNode__f_dataMap) !== 0)) {
          const payload$2 = this.getPayload__I__T2(dataIndex$2);
          const passed$2 = ($uZ(pred.apply__O__O(payload$2)) !== flipped);
          if (passed$2) {
            newDataMap$2 = (newDataMap$2 | bitpos$3);
            oldDataPassThrough = (oldDataPassThrough | bitpos$3);
            newSize$2 = ((1 + newSize$2) | 0);
            newCachedHashCode$2 = ((newCachedHashCode$2 + $m_sc_Hashing$().improve__I__I(this.getHash__I__I(dataIndex$2))) | 0)
          };
          dataIndex$2 = ((1 + dataIndex$2) | 0)
        } else if (((bitpos$3 & this.sci_BitmapIndexedMapNode__f_nodeMap) !== 0)) {
          const oldSubNode = this.getNode__I__sci_MapNode(nodeIndex);
          const newSubNode = oldSubNode.filterImpl__F1__Z__sci_MapNode(pred, flipped);
          newSize$2 = ((newSize$2 + newSubNode.size__I()) | 0);
          newCachedHashCode$2 = ((newCachedHashCode$2 + newSubNode.cachedJavaKeySetHashCode__I()) | 0);
          if ((newSubNode.size__I() > 1)) {
            newNodeMap = (newNodeMap | bitpos$3);
            if ((oldSubNode === newSubNode)) {
              nodesToPassThroughMap = (nodesToPassThroughMap | bitpos$3)
            } else {
              mapOfNewNodes = (mapOfNewNodes | bitpos$3);
              if ((newNodes === null)) {
                newNodes = new $c_scm_Queue(16)
              };
              const this$7 = newNodes;
              this$7.addOne__O__scm_ArrayDeque(newSubNode)
            }
          } else if ((newSubNode.size__I() === 1)) {
            newDataMap$2 = (newDataMap$2 | bitpos$3);
            nodeMigrateToDataTargetMap = (nodeMigrateToDataTargetMap | bitpos$3);
            if ((nodesToMigrateToData === null)) {
              const elems = $m_sci_Nil$();
              const this$9 = new $c_scm_Queue(16);
              nodesToMigrateToData = $as_scm_Queue(this$9.addAll__sc_IterableOnce__scm_ArrayDeque(elems))
            };
            const this$10 = nodesToMigrateToData;
            this$10.addOne__O__scm_ArrayDeque(newSubNode)
          };
          nodeIndex = ((1 + nodeIndex) | 0)
        };
        i$2$1 = ((1 + i$2$1) | 0)
      };
      if ((newSize$2 === 0)) {
        const this$11 = $m_sci_MapNode$();
        return this$11.sci_MapNode$__f_EmptyMapNode
      } else if ((newSize$2 === this.sci_BitmapIndexedMapNode__f_size)) {
        return this
      } else {
        const i$6 = newDataMap$2;
        const newDataSize = $m_jl_Integer$().bitCount__I__I(i$6);
        const i$7 = newNodeMap;
        const newContentSize = (((newDataSize << 1) + $m_jl_Integer$().bitCount__I__I(i$7)) | 0);
        const newContent$2 = $newArrayObject($d_O.getArrayOf(), [newContentSize]);
        const newOriginalHashes = $newArrayObject($d_I.getArrayOf(), [newDataSize]);
        const newAllMap = (newDataMap$2 | newNodeMap);
        const maxIndex = ((32 - $clz32(newAllMap)) | 0);
        let i$3$1 = minimumIndex$2;
        let oldDataIndex = 0;
        let oldNodeIndex = 0;
        let newDataIndex$2 = 0;
        let newNodeIndex = 0;
        while ((i$3$1 < maxIndex)) {
          const bitpos$4 = $m_sci_Node$().bitposFrom__I__I(i$3$1);
          if (((bitpos$4 & oldDataPassThrough) !== 0)) {
            newContent$2.set((newDataIndex$2 << 1), this.getKey__I__O(oldDataIndex));
            newContent$2.set(((1 + (newDataIndex$2 << 1)) | 0), this.getValue__I__O(oldDataIndex));
            newOriginalHashes.set(newDataIndex$2, this.getHash__I__I(oldDataIndex));
            newDataIndex$2 = ((1 + newDataIndex$2) | 0);
            oldDataIndex = ((1 + oldDataIndex) | 0)
          } else if (((bitpos$4 & nodesToPassThroughMap) !== 0)) {
            newContent$2.set((((-1) + ((newContentSize - newNodeIndex) | 0)) | 0), this.getNode__I__sci_MapNode(oldNodeIndex));
            newNodeIndex = ((1 + newNodeIndex) | 0);
            oldNodeIndex = ((1 + oldNodeIndex) | 0)
          } else if (((bitpos$4 & nodeMigrateToDataTargetMap) !== 0)) {
            const this$12 = nodesToMigrateToData;
            const node = $as_sci_MapNode(this$12.removeHead__Z__O(false));
            newContent$2.set((newDataIndex$2 << 1), node.getKey__I__O(0));
            newContent$2.set(((1 + (newDataIndex$2 << 1)) | 0), node.getValue__I__O(0));
            newOriginalHashes.set(newDataIndex$2, node.getHash__I__I(0));
            newDataIndex$2 = ((1 + newDataIndex$2) | 0);
            oldNodeIndex = ((1 + oldNodeIndex) | 0)
          } else if (((bitpos$4 & mapOfNewNodes) !== 0)) {
            const $$x1 = newNodeIndex;
            const this$13 = newNodes;
            newContent$2.set((((-1) + ((newContentSize - $$x1) | 0)) | 0), this$13.removeHead__Z__O(false));
            newNodeIndex = ((1 + newNodeIndex) | 0);
            oldNodeIndex = ((1 + oldNodeIndex) | 0)
          } else if (((bitpos$4 & this.sci_BitmapIndexedMapNode__f_dataMap) !== 0)) {
            oldDataIndex = ((1 + oldDataIndex) | 0)
          } else if (((bitpos$4 & this.sci_BitmapIndexedMapNode__f_nodeMap) !== 0)) {
            oldNodeIndex = ((1 + oldNodeIndex) | 0)
          };
          i$3$1 = ((1 + i$3$1) | 0)
        };
        return new $c_sci_BitmapIndexedMapNode(newDataMap$2, newNodeMap, newContent$2, newOriginalHashes, newSize$2, newCachedHashCode$2)
      }
    }
  };
  filterImpl__F1__Z__sci_MapNode(pred, isFlipped) {
    return this.filterImpl__F1__Z__sci_BitmapIndexedMapNode(pred, isFlipped)
  };
  copy__sci_MapNode() {
    return this.copy__sci_BitmapIndexedMapNode()
  };
  removed__O__I__I__I__sci_MapNode(key, originalHash, hash, shift) {
    return this.removed__O__I__I__I__sci_BitmapIndexedMapNode(key, originalHash, hash, shift)
  };
  updated__O__O__I__I__I__Z__sci_MapNode(key, value, originalHash, hash, shift, replaceValue) {
    return this.updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, originalHash, hash, shift, replaceValue)
  };
  getNode__I__sci_Node(index) {
    return this.getNode__I__sci_MapNode(index)
  };
}
function $as_sci_BitmapIndexedMapNode(obj) {
  return (((obj instanceof $c_sci_BitmapIndexedMapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BitmapIndexedMapNode"))
}
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BitmapIndexedMapNode)))
}
function $asArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (($isArrayOf_sci_BitmapIndexedMapNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BitmapIndexedMapNode;", depth))
}
const $d_sci_BitmapIndexedMapNode = new $TypeData().initClass({
  sci_BitmapIndexedMapNode: 0
}, false, "scala.collection.immutable.BitmapIndexedMapNode", {
  sci_BitmapIndexedMapNode: 1,
  sci_MapNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_BitmapIndexedMapNode.prototype.$classData = $d_sci_BitmapIndexedMapNode;
const $p_sci_BitmapIndexedSetNode__newNodeFrom__I__I__I__I__I__I__I__scm_Queue__I__scm_Queue__I__sci_BitmapIndexedSetNode = (function($thiz, newSize, newDataMap, newNodeMap, minimumIndex, oldDataPassThrough, nodesToPassThroughMap, nodeMigrateToDataTargetMap, nodesToMigrateToData, mapOfNewNodes, newNodes, newCachedHashCode) {
  if ((newSize === 0)) {
    const this$1 = $m_sci_SetNode$();
    return this$1.sci_SetNode$__f_EmptySetNode
  } else if ((newSize === $thiz.sci_BitmapIndexedSetNode__f_size)) {
    return $thiz
  } else {
    const newDataSize = $m_jl_Integer$().bitCount__I__I(newDataMap);
    const newContentSize = ((newDataSize + $m_jl_Integer$().bitCount__I__I(newNodeMap)) | 0);
    const newContent = $newArrayObject($d_O.getArrayOf(), [newContentSize]);
    const newOriginalHashes = $newArrayObject($d_I.getArrayOf(), [newDataSize]);
    const newAllMap = (newDataMap | newNodeMap);
    const maxIndex = ((32 - $clz32(newAllMap)) | 0);
    let i = minimumIndex;
    let oldDataIndex = 0;
    let oldNodeIndex = 0;
    let newDataIndex = 0;
    let newNodeIndex = 0;
    while ((i < maxIndex)) {
      const bitpos = $m_sci_Node$().bitposFrom__I__I(i);
      if (((bitpos & oldDataPassThrough) !== 0)) {
        newContent.set(newDataIndex, $thiz.getPayload__I__O(oldDataIndex));
        newOriginalHashes.set(newDataIndex, $thiz.getHash__I__I(oldDataIndex));
        newDataIndex = ((1 + newDataIndex) | 0);
        oldDataIndex = ((1 + oldDataIndex) | 0)
      } else if (((bitpos & nodesToPassThroughMap) !== 0)) {
        newContent.set((((-1) + ((newContentSize - newNodeIndex) | 0)) | 0), $thiz.getNode__I__sci_SetNode(oldNodeIndex));
        newNodeIndex = ((1 + newNodeIndex) | 0);
        oldNodeIndex = ((1 + oldNodeIndex) | 0)
      } else if (((bitpos & nodeMigrateToDataTargetMap) !== 0)) {
        const node = $as_sci_SetNode(nodesToMigrateToData.removeHead__Z__O(false));
        newContent.set(newDataIndex, node.getPayload__I__O(0));
        newOriginalHashes.set(newDataIndex, node.getHash__I__I(0));
        newDataIndex = ((1 + newDataIndex) | 0);
        oldNodeIndex = ((1 + oldNodeIndex) | 0)
      } else if (((bitpos & mapOfNewNodes) !== 0)) {
        newContent.set((((-1) + ((newContentSize - newNodeIndex) | 0)) | 0), newNodes.removeHead__Z__O(false));
        newNodeIndex = ((1 + newNodeIndex) | 0);
        oldNodeIndex = ((1 + oldNodeIndex) | 0)
      } else if (((bitpos & $thiz.sci_BitmapIndexedSetNode__f_dataMap) !== 0)) {
        oldDataIndex = ((1 + oldDataIndex) | 0)
      } else if (((bitpos & $thiz.sci_BitmapIndexedSetNode__f_nodeMap) !== 0)) {
        oldNodeIndex = ((1 + oldNodeIndex) | 0)
      };
      i = ((1 + i) | 0)
    };
    return new $c_sci_BitmapIndexedSetNode(newDataMap, newNodeMap, newContent, newOriginalHashes, newSize, newCachedHashCode)
  }
});
class $c_sci_BitmapIndexedSetNode extends $c_sci_SetNode {
  constructor(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
    super();
    this.sci_BitmapIndexedSetNode__f_dataMap = 0;
    this.sci_BitmapIndexedSetNode__f_nodeMap = 0;
    this.sci_BitmapIndexedSetNode__f_content = null;
    this.sci_BitmapIndexedSetNode__f_originalHashes = null;
    this.sci_BitmapIndexedSetNode__f_size = 0;
    this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = 0;
    this.sci_BitmapIndexedSetNode__f_dataMap = dataMap;
    this.sci_BitmapIndexedSetNode__f_nodeMap = nodeMap;
    this.sci_BitmapIndexedSetNode__f_content = content;
    this.sci_BitmapIndexedSetNode__f_originalHashes = originalHashes;
    this.sci_BitmapIndexedSetNode__f_size = size;
    this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = cachedJavaKeySetHashCode
  };
  size__I() {
    return this.sci_BitmapIndexedSetNode__f_size
  };
  cachedJavaKeySetHashCode__I() {
    return this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode
  };
  getPayload__I__O(index) {
    return this.sci_BitmapIndexedSetNode__f_content.get(index)
  };
  getHash__I__I(index) {
    return this.sci_BitmapIndexedSetNode__f_originalHashes.get(index)
  };
  getNode__I__sci_SetNode(index) {
    return $as_sci_SetNode(this.sci_BitmapIndexedSetNode__f_content.get((((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - index) | 0)))
  };
  contains__O__I__I__I__Z(element, originalHash, elementHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
      return ((this.sci_BitmapIndexedSetNode__f_originalHashes.get(index) === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(element, this.getPayload__I__O(index)))
    };
    if (((this.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
      return this.getNode__I__sci_SetNode(index$2).contains__O__I__I__I__Z(element, originalHash, elementHash, ((5 + shift) | 0))
    };
    return false
  };
  updated__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, elementHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
      const element0 = this.getPayload__I__O(index);
      if (Object.is(element0, element)) {
        return this
      } else {
        const element0UnimprovedHash = this.getHash__I__I(index);
        const element0Hash = $m_sc_Hashing$().improve__I__I(element0UnimprovedHash);
        if (((originalHash === element0UnimprovedHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(element0, element))) {
          return this
        } else {
          const subNodeNew = this.mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0));
          return this.copyAndMigrateFromInlineToNode__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, element0Hash, subNodeNew)
        }
      }
    };
    if (((this.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
      const subNode = this.getNode__I__sci_SetNode(index$2);
      const subNodeNew$2 = subNode.updated__O__I__I__I__sci_SetNode(element, originalHash, elementHash, ((5 + shift) | 0));
      if ((subNode === subNodeNew$2)) {
        return this
      } else {
        return this.copyAndSetNode__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, subNode, subNodeNew$2)
      }
    };
    return this.copyAndInsertValue__I__O__I__I__sci_BitmapIndexedSetNode(bitpos, element, originalHash, elementHash)
  };
  removed__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, elementHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
      const element0 = this.getPayload__I__O(index);
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(element0, element)) {
        const i = this.sci_BitmapIndexedSetNode__f_dataMap;
        let $$x1;
        if (($m_jl_Integer$().bitCount__I__I(i) === 2)) {
          const i$1 = this.sci_BitmapIndexedSetNode__f_nodeMap;
          $$x1 = ($m_jl_Integer$().bitCount__I__I(i$1) === 0)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const newDataMap = ((shift === 0) ? (this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos) : $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(elementHash, 0)));
          if ((index === 0)) {
            const array = [this.getPayload__I__O(1)];
            const xs = new $c_sjsr_WrappedVarArgs(array);
            $m_s_reflect_ManifestFactory$AnyManifest$();
            const len = xs.length__I();
            const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
            const this$7 = new $c_sc_IndexedSeqView$Id(xs);
            const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$7);
            let i$2 = 0;
            while (iterator.hasNext__Z()) {
              array$1.set(i$2, iterator.next__O());
              i$2 = ((1 + i$2) | 0)
            };
            return new $c_sci_BitmapIndexedSetNode(newDataMap, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_BitmapIndexedSetNode__f_originalHashes.get(1)]), (((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0), $m_sc_Hashing$().improve__I__I(this.sci_BitmapIndexedSetNode__f_originalHashes.get(1)))
          } else {
            const array$2 = [this.getPayload__I__O(0)];
            const xs$1 = new $c_sjsr_WrappedVarArgs(array$2);
            $m_s_reflect_ManifestFactory$AnyManifest$();
            const len$1 = xs$1.length__I();
            const array$3 = $newArrayObject($d_O.getArrayOf(), [len$1]);
            const this$14 = new $c_sc_IndexedSeqView$Id(xs$1);
            const iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$14);
            let i$3 = 0;
            while (iterator$1.hasNext__Z()) {
              array$3.set(i$3, iterator$1.next__O());
              i$3 = ((1 + i$3) | 0)
            };
            return new $c_sci_BitmapIndexedSetNode(newDataMap, 0, array$3, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_BitmapIndexedSetNode__f_originalHashes.get(0)]), (((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0), $m_sc_Hashing$().improve__I__I(this.sci_BitmapIndexedSetNode__f_originalHashes.get(0)))
          }
        } else {
          return this.copyAndRemoveValue__I__I__sci_BitmapIndexedSetNode(bitpos, elementHash)
        }
      } else {
        return this
      }
    };
    if (((this.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
      const subNode = this.getNode__I__sci_SetNode(index$2);
      const subNodeNew = subNode.removed__O__I__I__I__sci_SetNode(element, originalHash, elementHash, ((5 + shift) | 0));
      if ((subNodeNew === subNode)) {
        return this
      };
      const subNodeNewSize = subNodeNew.size__I();
      if ((subNodeNewSize === 1)) {
        if ((this.sci_BitmapIndexedSetNode__f_size === subNode.size__I())) {
          return $as_sci_BitmapIndexedSetNode(subNodeNew)
        } else {
          return this.copyAndMigrateFromNodeToInline__I__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, elementHash, subNode, subNodeNew)
        }
      } else if ((subNodeNewSize > 1)) {
        return this.copyAndSetNode__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, subNode, subNodeNew)
      }
    };
    return this
  };
  mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, shift) {
    if ((shift >= 32)) {
      const this$4 = $m_sci_Vector$();
      const array = [key0, key1];
      const elems = new $c_sjsr_WrappedVarArgs(array);
      return new $c_sci_HashCollisionSetNode(originalKeyHash0, keyHash0, this$4.from__sc_IterableOnce__sci_Vector(elems))
    } else {
      const mask0 = $m_sci_Node$().maskFrom__I__I__I(keyHash0, shift);
      const mask1 = $m_sci_Node$().maskFrom__I__I__I(keyHash1, shift);
      if ((mask0 !== mask1)) {
        const dataMap = ($m_sci_Node$().bitposFrom__I__I(mask0) | $m_sci_Node$().bitposFrom__I__I(mask1));
        const newCachedHashCode = ((keyHash0 + keyHash1) | 0);
        if ((mask0 < mask1)) {
          const array$1 = [key0, key1];
          const xs = new $c_sjsr_WrappedVarArgs(array$1);
          $m_s_reflect_ManifestFactory$AnyManifest$();
          const len = xs.length__I();
          const array$2 = $newArrayObject($d_O.getArrayOf(), [len]);
          const this$11 = new $c_sc_IndexedSeqView$Id(xs);
          const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$11);
          let i = 0;
          while (iterator.hasNext__Z()) {
            array$2.set(i, iterator.next__O());
            i = ((1 + i) | 0)
          };
          return new $c_sci_BitmapIndexedSetNode(dataMap, 0, array$2, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalKeyHash0, originalKeyHash1]), 2, newCachedHashCode)
        } else {
          const array$3 = [key1, key0];
          const xs$1 = new $c_sjsr_WrappedVarArgs(array$3);
          $m_s_reflect_ManifestFactory$AnyManifest$();
          const len$1 = xs$1.length__I();
          const array$4 = $newArrayObject($d_O.getArrayOf(), [len$1]);
          const this$18 = new $c_sc_IndexedSeqView$Id(xs$1);
          const iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$18);
          let i$1 = 0;
          while (iterator$1.hasNext__Z()) {
            array$4.set(i$1, iterator$1.next__O());
            i$1 = ((1 + i$1) | 0)
          };
          return new $c_sci_BitmapIndexedSetNode(dataMap, 0, array$4, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalKeyHash1, originalKeyHash0]), 2, newCachedHashCode)
        }
      } else {
        const nodeMap = $m_sci_Node$().bitposFrom__I__I(mask0);
        const node = this.mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, ((5 + shift) | 0));
        const array$5 = [node];
        const xs$2 = new $c_sjsr_WrappedVarArgs(array$5);
        $m_s_reflect_ManifestFactory$AnyManifest$();
        const len$2 = xs$2.length__I();
        const array$6 = $newArrayObject($d_O.getArrayOf(), [len$2]);
        const this$25 = new $c_sc_IndexedSeqView$Id(xs$2);
        const iterator$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$25);
        let i$2 = 0;
        while (iterator$2.hasNext__Z()) {
          array$6.set(i$2, iterator$2.next__O());
          i$2 = ((1 + i$2) | 0)
        };
        return new $c_sci_BitmapIndexedSetNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, node.size__I(), node.cachedJavaKeySetHashCode__I())
      }
    }
  };
  hasPayload__Z() {
    return (this.sci_BitmapIndexedSetNode__f_dataMap !== 0)
  };
  payloadArity__I() {
    const i = this.sci_BitmapIndexedSetNode__f_dataMap;
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  hasNodes__Z() {
    return (this.sci_BitmapIndexedSetNode__f_nodeMap !== 0)
  };
  nodeArity__I() {
    const i = this.sci_BitmapIndexedSetNode__f_nodeMap;
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  dataIndex__I__I(bitpos) {
    const i = (this.sci_BitmapIndexedSetNode__f_dataMap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  nodeIndex__I__I(bitpos) {
    const i = (this.sci_BitmapIndexedSetNode__f_nodeMap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  copyAndSetNode__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, oldNode, newNode) {
    const idx = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    const length = src.u.length;
    $systemArraycopy(src, 0, dst, 0, length);
    dst.set(idx, newNode);
    return new $c_sci_BitmapIndexedSetNode(this.sci_BitmapIndexedSetNode__f_dataMap, this.sci_BitmapIndexedSetNode__f_nodeMap, dst, this.sci_BitmapIndexedSetNode__f_originalHashes, ((((this.sci_BitmapIndexedSetNode__f_size - oldNode.size__I()) | 0) + newNode.size__I()) | 0), ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + newNode.cachedJavaKeySetHashCode__I()) | 0))
  };
  copyAndInsertValue__I__O__I__I__sci_BitmapIndexedSetNode(bitpos, key, originalHash, elementHash) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [((1 + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, dataIx);
    dst.set(dataIx, key);
    const destPos = ((1 + dataIx) | 0);
    const length = ((src.u.length - dataIx) | 0);
    $systemArraycopy(src, dataIx, dst, destPos, length);
    const dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx, originalHash);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap | bitpos), this.sci_BitmapIndexedSetNode__f_nodeMap, dst, dstHashes, ((1 + this.sci_BitmapIndexedSetNode__f_size) | 0), ((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode + elementHash) | 0))
  };
  copyAndRemoveValue__I__I__sci_BitmapIndexedSetNode(bitpos, elementHash) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [(((-1) + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, dataIx);
    const srcPos = ((1 + dataIx) | 0);
    const length = (((-1) + ((src.u.length - dataIx) | 0)) | 0);
    $systemArraycopy(src, srcPos, dst, dataIx, length);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos), this.sci_BitmapIndexedSetNode__f_nodeMap, dst, dstHashes, (((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0), ((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - elementHash) | 0))
  };
  copyAndMigrateFromInlineToNode__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, elementHash, node) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idxNew = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    $systemArraycopy(src, 0, dst, 0, dataIx);
    const srcPos = ((1 + dataIx) | 0);
    const length = ((idxNew - dataIx) | 0);
    $systemArraycopy(src, srcPos, dst, dataIx, length);
    dst.set(idxNew, node);
    const srcPos$1 = ((1 + idxNew) | 0);
    const destPos = ((1 + idxNew) | 0);
    const length$1 = (((-1) + ((src.u.length - idxNew) | 0)) | 0);
    $systemArraycopy(src, srcPos$1, dst, destPos, length$1);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos), (this.sci_BitmapIndexedSetNode__f_nodeMap | bitpos), dst, dstHashes, (((((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0) + node.size__I()) | 0), ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - elementHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
  };
  migrateFromInlineToNodeInPlace__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, keyHash, node) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idxNew = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const srcPos = ((1 + dataIx) | 0);
    const dest = this.sci_BitmapIndexedSetNode__f_content;
    const length = ((idxNew - dataIx) | 0);
    $systemArraycopy(src, srcPos, dest, dataIx, length);
    this.sci_BitmapIndexedSetNode__f_content.set(idxNew, node);
    this.sci_BitmapIndexedSetNode__f_dataMap = (this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos);
    this.sci_BitmapIndexedSetNode__f_nodeMap = (this.sci_BitmapIndexedSetNode__f_nodeMap | bitpos);
    this.sci_BitmapIndexedSetNode__f_originalHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx);
    this.sci_BitmapIndexedSetNode__f_size = (((((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0) + node.size__I()) | 0);
    this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0);
    return this
  };
  copyAndMigrateFromNodeToInline__I__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, elementHash, oldNode, node) {
    const idxOld = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const dataIxNew = this.dataIndex__I__I(bitpos);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    $systemArraycopy(src, 0, dst, 0, dataIxNew);
    dst.set(dataIxNew, node.getPayload__I__O(0));
    const destPos = ((1 + dataIxNew) | 0);
    const length = ((idxOld - dataIxNew) | 0);
    $systemArraycopy(src, dataIxNew, dst, destPos, length);
    const srcPos = ((1 + idxOld) | 0);
    const destPos$1 = ((1 + idxOld) | 0);
    const length$1 = (((-1) + ((src.u.length - idxOld) | 0)) | 0);
    $systemArraycopy(src, srcPos, dst, destPos$1, length$1);
    const hash = node.getHash__I__I(0);
    const dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIxNew, hash);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap | bitpos), (this.sci_BitmapIndexedSetNode__f_nodeMap ^ bitpos), dst, dstHashes, ((1 + ((this.sci_BitmapIndexedSetNode__f_size - oldNode.size__I()) | 0)) | 0), ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
  };
  filterImpl__F1__Z__sci_BitmapIndexedSetNode(pred, flipped) {
    if ((this.sci_BitmapIndexedSetNode__f_size === 0)) {
      return this
    } else if ((this.sci_BitmapIndexedSetNode__f_size === 1)) {
      if (($uZ(pred.apply__O__O(this.getPayload__I__O(0))) !== flipped)) {
        return this
      } else {
        const this$1 = $m_sci_SetNode$();
        return this$1.sci_SetNode$__f_EmptySetNode
      }
    } else if ((this.sci_BitmapIndexedSetNode__f_nodeMap === 0)) {
      const i = this.sci_BitmapIndexedSetNode__f_dataMap;
      const minimumIndex = ((i === 0) ? 32 : ((31 - $clz32((i & ((-i) | 0)))) | 0));
      const i$1 = this.sci_BitmapIndexedSetNode__f_dataMap;
      const maximumIndex = ((32 - $clz32(i$1)) | 0);
      let newDataMap = 0;
      let newCachedHashCode = 0;
      let dataIndex = 0;
      let i$2 = minimumIndex;
      while ((i$2 < maximumIndex)) {
        const bitpos = $m_sci_Node$().bitposFrom__I__I(i$2);
        if (((bitpos & this.sci_BitmapIndexedSetNode__f_dataMap) !== 0)) {
          const payload = this.getPayload__I__O(dataIndex);
          const passed = ($uZ(pred.apply__O__O(payload)) !== flipped);
          if (passed) {
            newDataMap = (newDataMap | bitpos);
            newCachedHashCode = ((newCachedHashCode + $m_sc_Hashing$().improve__I__I(this.getHash__I__I(dataIndex))) | 0)
          };
          dataIndex = ((1 + dataIndex) | 0)
        };
        i$2 = ((1 + i$2) | 0)
      };
      if ((newDataMap === 0)) {
        const this$3 = $m_sci_SetNode$();
        return this$3.sci_SetNode$__f_EmptySetNode
      } else if ((newDataMap === this.sci_BitmapIndexedSetNode__f_dataMap)) {
        return this
      } else {
        const i$3 = newDataMap;
        const newSize = $m_jl_Integer$().bitCount__I__I(i$3);
        const newContent = $newArrayObject($d_O.getArrayOf(), [newSize]);
        const newOriginalHashCodes = $newArrayObject($d_I.getArrayOf(), [newSize]);
        const i$4 = newDataMap;
        const newMaximumIndex = ((32 - $clz32(i$4)) | 0);
        const i$5 = newDataMap;
        let j = ((i$5 === 0) ? 32 : ((31 - $clz32((i$5 & ((-i$5) | 0)))) | 0));
        let newDataIndex = 0;
        while ((j < newMaximumIndex)) {
          const bitpos$2 = $m_sci_Node$().bitposFrom__I__I(j);
          if (((bitpos$2 & newDataMap) !== 0)) {
            const oldIndex = $m_sci_Node$().indexFrom__I__I__I(this.sci_BitmapIndexedSetNode__f_dataMap, bitpos$2);
            newContent.set(newDataIndex, this.sci_BitmapIndexedSetNode__f_content.get(oldIndex));
            newOriginalHashCodes.set(newDataIndex, this.sci_BitmapIndexedSetNode__f_originalHashes.get(oldIndex));
            newDataIndex = ((1 + newDataIndex) | 0)
          };
          j = ((1 + j) | 0)
        };
        return new $c_sci_BitmapIndexedSetNode(newDataMap, 0, newContent, newOriginalHashCodes, newSize, newCachedHashCode)
      }
    } else {
      const allMap = (this.sci_BitmapIndexedSetNode__f_dataMap | this.sci_BitmapIndexedSetNode__f_nodeMap);
      const minimumIndex$2 = ((allMap === 0) ? 32 : ((31 - $clz32((allMap & ((-allMap) | 0)))) | 0));
      const maximumIndex$2 = ((32 - $clz32(allMap)) | 0);
      let oldDataPassThrough = 0;
      let nodeMigrateToDataTargetMap = 0;
      let nodesToMigrateToData = null;
      let nodesToPassThroughMap = 0;
      let mapOfNewNodes = 0;
      let newNodes = null;
      let newDataMap$2 = 0;
      let newNodeMap = 0;
      let newSize$2 = 0;
      let newCachedHashCode$2 = 0;
      let dataIndex$2 = 0;
      let nodeIndex = 0;
      let i$2$1 = minimumIndex$2;
      while ((i$2$1 < maximumIndex$2)) {
        const bitpos$3 = $m_sci_Node$().bitposFrom__I__I(i$2$1);
        if (((bitpos$3 & this.sci_BitmapIndexedSetNode__f_dataMap) !== 0)) {
          const payload$2 = this.getPayload__I__O(dataIndex$2);
          const passed$2 = ($uZ(pred.apply__O__O(payload$2)) !== flipped);
          if (passed$2) {
            newDataMap$2 = (newDataMap$2 | bitpos$3);
            oldDataPassThrough = (oldDataPassThrough | bitpos$3);
            newSize$2 = ((1 + newSize$2) | 0);
            newCachedHashCode$2 = ((newCachedHashCode$2 + $m_sc_Hashing$().improve__I__I(this.getHash__I__I(dataIndex$2))) | 0)
          };
          dataIndex$2 = ((1 + dataIndex$2) | 0)
        } else if (((bitpos$3 & this.sci_BitmapIndexedSetNode__f_nodeMap) !== 0)) {
          const oldSubNode = this.getNode__I__sci_SetNode(nodeIndex);
          const newSubNode = oldSubNode.filterImpl__F1__Z__sci_SetNode(pred, flipped);
          newSize$2 = ((newSize$2 + newSubNode.size__I()) | 0);
          newCachedHashCode$2 = ((newCachedHashCode$2 + newSubNode.cachedJavaKeySetHashCode__I()) | 0);
          if ((newSubNode.size__I() > 1)) {
            newNodeMap = (newNodeMap | bitpos$3);
            if ((oldSubNode === newSubNode)) {
              nodesToPassThroughMap = (nodesToPassThroughMap | bitpos$3)
            } else {
              mapOfNewNodes = (mapOfNewNodes | bitpos$3);
              if ((newNodes === null)) {
                newNodes = new $c_scm_Queue(16)
              };
              const this$7 = newNodes;
              this$7.addOne__O__scm_ArrayDeque(newSubNode)
            }
          } else if ((newSubNode.size__I() === 1)) {
            newDataMap$2 = (newDataMap$2 | bitpos$3);
            nodeMigrateToDataTargetMap = (nodeMigrateToDataTargetMap | bitpos$3);
            if ((nodesToMigrateToData === null)) {
              nodesToMigrateToData = new $c_scm_Queue(16)
            };
            const this$9 = nodesToMigrateToData;
            this$9.addOne__O__scm_ArrayDeque(newSubNode)
          };
          nodeIndex = ((1 + nodeIndex) | 0)
        };
        i$2$1 = ((1 + i$2$1) | 0)
      };
      return $p_sci_BitmapIndexedSetNode__newNodeFrom__I__I__I__I__I__I__I__scm_Queue__I__scm_Queue__I__sci_BitmapIndexedSetNode(this, newSize$2, newDataMap$2, newNodeMap, minimumIndex$2, oldDataPassThrough, nodesToPassThroughMap, nodeMigrateToDataTargetMap, nodesToMigrateToData, mapOfNewNodes, newNodes, newCachedHashCode$2)
    }
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_BitmapIndexedSetNode)) {
      const x2 = $as_sci_BitmapIndexedSetNode(that);
      if ((this === x2)) {
        return true
      } else {
        let $$x1;
        if (((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode === x2.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode) && (this.sci_BitmapIndexedSetNode__f_nodeMap === x2.sci_BitmapIndexedSetNode__f_nodeMap)) && (this.sci_BitmapIndexedSetNode__f_dataMap === x2.sci_BitmapIndexedSetNode__f_dataMap)) && (this.sci_BitmapIndexedSetNode__f_size === x2.sci_BitmapIndexedSetNode__f_size))) {
          const a = this.sci_BitmapIndexedSetNode__f_originalHashes;
          const b = x2.sci_BitmapIndexedSetNode__f_originalHashes;
          $$x1 = $m_ju_Arrays$().equals__AI__AI__Z(a, b)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const a1 = this.sci_BitmapIndexedSetNode__f_content;
          const a2 = x2.sci_BitmapIndexedSetNode__f_content;
          const length = this.sci_BitmapIndexedSetNode__f_content.u.length;
          if ((a1 === a2)) {
            return true
          } else {
            let isEqual = true;
            let i = 0;
            while ((isEqual && (i < length))) {
              isEqual = $m_sr_BoxesRunTime$().equals__O__O__Z(a1.get(i), a2.get(i));
              i = ((1 + i) | 0)
            };
            return isEqual
          }
        } else {
          return false
        }
      }
    } else {
      return false
    }
  };
  hashCode__I() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.")
  };
  copy__sci_BitmapIndexedSetNode() {
    const contentClone = $asArrayOf_O(this.sci_BitmapIndexedSetNode__f_content.clone__O(), 1);
    const contentLength = contentClone.u.length;
    const i = this.sci_BitmapIndexedSetNode__f_dataMap;
    let i$1 = $m_jl_Integer$().bitCount__I__I(i);
    while ((i$1 < contentLength)) {
      contentClone.set(i$1, $as_sci_SetNode(contentClone.get(i$1)).copy__sci_SetNode());
      i$1 = ((1 + i$1) | 0)
    };
    return new $c_sci_BitmapIndexedSetNode(this.sci_BitmapIndexedSetNode__f_dataMap, this.sci_BitmapIndexedSetNode__f_nodeMap, contentClone, $asArrayOf_I(this.sci_BitmapIndexedSetNode__f_originalHashes.clone__O(), 1), this.sci_BitmapIndexedSetNode__f_size, this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode)
  };
  copy__sci_SetNode() {
    return this.copy__sci_BitmapIndexedSetNode()
  };
  filterImpl__F1__Z__sci_SetNode(pred, flipped) {
    return this.filterImpl__F1__Z__sci_BitmapIndexedSetNode(pred, flipped)
  };
  removed__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    return this.removed__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, hash, shift)
  };
  updated__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    return this.updated__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, hash, shift)
  };
  getNode__I__sci_Node(index) {
    return this.getNode__I__sci_SetNode(index)
  };
}
function $as_sci_BitmapIndexedSetNode(obj) {
  return (((obj instanceof $c_sci_BitmapIndexedSetNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BitmapIndexedSetNode"))
}
function $isArrayOf_sci_BitmapIndexedSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BitmapIndexedSetNode)))
}
function $asArrayOf_sci_BitmapIndexedSetNode(obj, depth) {
  return (($isArrayOf_sci_BitmapIndexedSetNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BitmapIndexedSetNode;", depth))
}
const $d_sci_BitmapIndexedSetNode = new $TypeData().initClass({
  sci_BitmapIndexedSetNode: 0
}, false, "scala.collection.immutable.BitmapIndexedSetNode", {
  sci_BitmapIndexedSetNode: 1,
  sci_SetNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_BitmapIndexedSetNode.prototype.$classData = $d_sci_BitmapIndexedSetNode;
class $c_sci_HashCollisionMapNode extends $c_sci_MapNode {
  constructor(originalHash, hash, content) {
    super();
    this.sci_HashCollisionMapNode__f_originalHash = 0;
    this.sci_HashCollisionMapNode__f_hash = 0;
    this.sci_HashCollisionMapNode__f_content = null;
    this.sci_HashCollisionMapNode__f_originalHash = originalHash;
    this.sci_HashCollisionMapNode__f_hash = hash;
    this.sci_HashCollisionMapNode__f_content = content;
    $m_s_Predef$().require__Z__V((this.sci_HashCollisionMapNode__f_content.length__I() >= 2))
  };
  indexOf__O__I(key) {
    const iter = this.sci_HashCollisionMapNode__f_content.iterator__sc_Iterator();
    let i = 0;
    while (iter.hasNext__Z()) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z($as_T2(iter.next__O()).T2__f__1, key)) {
        return i
      };
      i = ((1 + i) | 0)
    };
    return (-1)
  };
  size__I() {
    return this.sci_HashCollisionMapNode__f_content.length__I()
  };
  apply__O__I__I__I__O(key, originalHash, hash, shift) {
    const this$1 = this.get__O__I__I__I__s_Option(key, originalHash, hash, shift);
    if (this$1.isEmpty__Z()) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    } else {
      return this$1.get__O()
    }
  };
  get__O__I__I__I__s_Option(key, originalHash, hash, shift) {
    if ((this.sci_HashCollisionMapNode__f_hash === hash)) {
      const index = this.indexOf__O__I(key);
      return ((index >= 0) ? new $c_s_Some($as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index)).T2__f__2) : $m_s_None$())
    } else {
      return $m_s_None$()
    }
  };
  getOrElse__O__I__I__I__F0__O(key, originalHash, hash, shift, f) {
    if ((this.sci_HashCollisionMapNode__f_hash === hash)) {
      const x1 = this.indexOf__O__I(key);
      return ((x1 === (-1)) ? f.apply__O() : $as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(x1)).T2__f__2)
    } else {
      return f.apply__O()
    }
  };
  containsKey__O__I__I__I__Z(key, originalHash, hash, shift) {
    return ((this.sci_HashCollisionMapNode__f_hash === hash) && (this.indexOf__O__I(key) >= 0))
  };
  updated__O__O__I__I__I__Z__sci_MapNode(key, value, originalHash, hash, shift, replaceValue) {
    const index = this.indexOf__O__I(key);
    if ((index >= 0)) {
      if (replaceValue) {
        if (Object.is($as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index)).T2__f__2, value)) {
          return this
        } else {
          const this$1 = this.sci_HashCollisionMapNode__f_content;
          const elem = new $c_T2(key, value);
          return new $c_sci_HashCollisionMapNode(originalHash, hash, this$1.updateAt__I__O__sci_Vector(index, elem))
        }
      } else {
        return this
      }
    } else {
      return new $c_sci_HashCollisionMapNode(originalHash, hash, this.sci_HashCollisionMapNode__f_content.appended__O__sci_Vector(new $c_T2(key, value)))
    }
  };
  removed__O__I__I__I__sci_MapNode(key, originalHash, hash, shift) {
    if ((!this.containsKey__O__I__I__I__Z(key, originalHash, hash, shift))) {
      return this
    } else {
      const this$1 = this.sci_HashCollisionMapNode__f_content;
      $m_sci_Vector$();
      const b = new $c_sci_VectorBuilder();
      const it = this$1.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        const elem = it.next__O();
        const keyValuePair = $as_T2(elem);
        if (($m_sr_BoxesRunTime$().equals__O__O__Z(keyValuePair.T2__f__1, key) !== true)) {
          b.addOne__O__sci_VectorBuilder(elem)
        }
      };
      const updatedContent = b.result__sci_Vector();
      const x1 = updatedContent.length__I();
      if ((x1 === 1)) {
        const x1$2 = $as_T2(updatedContent.apply__I__O(0));
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2)
        };
        const k = x1$2.T2__f__1;
        const v = x1$2.T2__f__2;
        const $$x1 = $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(hash, 0));
        const array = [k, v];
        const xs = new $c_sjsr_WrappedVarArgs(array);
        $m_s_reflect_ManifestFactory$AnyManifest$();
        const len = xs.length__I();
        const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
        const this$9 = new $c_sc_IndexedSeqView$Id(xs);
        const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$9);
        let i = 0;
        while (iterator.hasNext__Z()) {
          array$1.set(i, iterator.next__O());
          i = ((1 + i) | 0)
        };
        return new $c_sci_BitmapIndexedMapNode($$x1, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalHash]), 1, hash)
      } else {
        return new $c_sci_HashCollisionMapNode(originalHash, hash, updatedContent)
      }
    }
  };
  hasNodes__Z() {
    return false
  };
  nodeArity__I() {
    return 0
  };
  getNode__I__sci_MapNode(index) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.")
  };
  hasPayload__Z() {
    return true
  };
  payloadArity__I() {
    return this.sci_HashCollisionMapNode__f_content.length__I()
  };
  getKey__I__O(index) {
    return $as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index)).T2__f__1
  };
  getValue__I__O(index) {
    return $as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index)).T2__f__2
  };
  getPayload__I__T2(index) {
    return $as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index))
  };
  getHash__I__I(index) {
    return this.sci_HashCollisionMapNode__f_originalHash
  };
  foreachWithHash__F3__V(f) {
    const iter = this.sci_HashCollisionMapNode__f_content.iterator__sc_Iterator();
    while (iter.hasNext__Z()) {
      const next = $as_T2(iter.next__O());
      f.apply__O__O__O__O(next.T2__f__1, next.T2__f__2, this.sci_HashCollisionMapNode__f_originalHash)
    }
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashCollisionMapNode)) {
      const x2 = $as_sci_HashCollisionMapNode(that);
      if ((this === x2)) {
        return true
      } else if (((this.sci_HashCollisionMapNode__f_hash === x2.sci_HashCollisionMapNode__f_hash) && (this.sci_HashCollisionMapNode__f_content.length__I() === x2.sci_HashCollisionMapNode__f_content.length__I()))) {
        const iter = this.sci_HashCollisionMapNode__f_content.iterator__sc_Iterator();
        while (iter.hasNext__Z()) {
          const x1$2 = $as_T2(iter.next__O());
          if ((x1$2 === null)) {
            throw new $c_s_MatchError(x1$2)
          };
          const key = x1$2.T2__f__1;
          const value = x1$2.T2__f__2;
          const index = x2.indexOf__O__I(key);
          if (((index < 0) || (!$m_sr_BoxesRunTime$().equals__O__O__Z(value, $as_T2(x2.sci_HashCollisionMapNode__f_content.apply__I__O(index)).T2__f__2)))) {
            return false
          }
        };
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  };
  filterImpl__F1__Z__sci_MapNode(pred, flipped) {
    const this$1 = this.sci_HashCollisionMapNode__f_content;
    const newContent = $as_sci_Vector($f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this$1, pred, flipped));
    const newContentLength = newContent.length__I();
    if ((newContentLength === 0)) {
      const this$2 = $m_sci_MapNode$();
      return this$2.sci_MapNode$__f_EmptyMapNode
    } else if ((newContentLength === 1)) {
      const x1 = $as_T2(newContent.head__O());
      if ((x1 === null)) {
        throw new $c_s_MatchError(x1)
      };
      const k = x1.T2__f__1;
      const v = x1.T2__f__2;
      const $$x1 = $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(this.sci_HashCollisionMapNode__f_hash, 0));
      const array = [k, v];
      const xs = new $c_sjsr_WrappedVarArgs(array);
      $m_s_reflect_ManifestFactory$AnyManifest$();
      const len = xs.length__I();
      const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
      const this$9 = new $c_sc_IndexedSeqView$Id(xs);
      const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$9);
      let i = 0;
      while (iterator.hasNext__Z()) {
        array$1.set(i, iterator.next__O());
        i = ((1 + i) | 0)
      };
      return new $c_sci_BitmapIndexedMapNode($$x1, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_HashCollisionMapNode__f_originalHash]), 1, this.sci_HashCollisionMapNode__f_hash)
    } else {
      return ((newContentLength === this.sci_HashCollisionMapNode__f_content.length__I()) ? this : new $c_sci_HashCollisionMapNode(this.sci_HashCollisionMapNode__f_originalHash, this.sci_HashCollisionMapNode__f_hash, newContent))
    }
  };
  hashCode__I() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.")
  };
  cachedJavaKeySetHashCode__I() {
    return $imul(this.sci_HashCollisionMapNode__f_content.length__I(), this.sci_HashCollisionMapNode__f_hash)
  };
  copy__sci_MapNode() {
    return new $c_sci_HashCollisionMapNode(this.sci_HashCollisionMapNode__f_originalHash, this.sci_HashCollisionMapNode__f_hash, this.sci_HashCollisionMapNode__f_content)
  };
  getNode__I__sci_Node(index) {
    return this.getNode__I__sci_MapNode(index)
  };
}
function $as_sci_HashCollisionMapNode(obj) {
  return (((obj instanceof $c_sci_HashCollisionMapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashCollisionMapNode"))
}
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashCollisionMapNode)))
}
function $asArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (($isArrayOf_sci_HashCollisionMapNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashCollisionMapNode;", depth))
}
const $d_sci_HashCollisionMapNode = new $TypeData().initClass({
  sci_HashCollisionMapNode: 0
}, false, "scala.collection.immutable.HashCollisionMapNode", {
  sci_HashCollisionMapNode: 1,
  sci_MapNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_HashCollisionMapNode.prototype.$classData = $d_sci_HashCollisionMapNode;
class $c_sci_HashCollisionSetNode extends $c_sci_SetNode {
  constructor(originalHash, hash, content) {
    super();
    this.sci_HashCollisionSetNode__f_originalHash = 0;
    this.sci_HashCollisionSetNode__f_hash = 0;
    this.sci_HashCollisionSetNode__f_content = null;
    this.sci_HashCollisionSetNode__f_originalHash = originalHash;
    this.sci_HashCollisionSetNode__f_hash = hash;
    this.sci_HashCollisionSetNode__f_content = content;
    $m_s_Predef$().require__Z__V((this.sci_HashCollisionSetNode__f_content.length__I() >= 2))
  };
  contains__O__I__I__I__Z(element, originalHash, hash, shift) {
    if ((this.sci_HashCollisionSetNode__f_hash === hash)) {
      const this$1 = this.sci_HashCollisionSetNode__f_content;
      return $f_sc_SeqOps__contains__O__Z(this$1, element)
    } else {
      return false
    }
  };
  updated__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    return (this.contains__O__I__I__I__Z(element, originalHash, hash, shift) ? this : new $c_sci_HashCollisionSetNode(originalHash, hash, this.sci_HashCollisionSetNode__f_content.appended__O__sci_Vector(element)))
  };
  removed__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    if ((!this.contains__O__I__I__I__Z(element, originalHash, hash, shift))) {
      return this
    } else {
      const this$1 = this.sci_HashCollisionSetNode__f_content;
      $m_sci_Vector$();
      const b = new $c_sci_VectorBuilder();
      const it = this$1.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        const elem = it.next__O();
        if (($m_sr_BoxesRunTime$().equals__O__O__Z(elem, element) !== true)) {
          b.addOne__O__sci_VectorBuilder(elem)
        }
      };
      const updatedContent = b.result__sci_Vector();
      const x1 = updatedContent.length__I();
      if ((x1 === 1)) {
        const $$x1 = $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(hash, 0));
        const array = [updatedContent.apply__I__O(0)];
        const xs = new $c_sjsr_WrappedVarArgs(array);
        $m_s_reflect_ManifestFactory$AnyManifest$();
        const len = xs.length__I();
        const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
        const this$9 = new $c_sc_IndexedSeqView$Id(xs);
        const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$9);
        let i = 0;
        while (iterator.hasNext__Z()) {
          array$1.set(i, iterator.next__O());
          i = ((1 + i) | 0)
        };
        return new $c_sci_BitmapIndexedSetNode($$x1, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalHash]), 1, hash)
      } else {
        return new $c_sci_HashCollisionSetNode(originalHash, hash, updatedContent)
      }
    }
  };
  hasNodes__Z() {
    return false
  };
  nodeArity__I() {
    return 0
  };
  getNode__I__sci_SetNode(index) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.")
  };
  hasPayload__Z() {
    return true
  };
  payloadArity__I() {
    return this.sci_HashCollisionSetNode__f_content.length__I()
  };
  getPayload__I__O(index) {
    return this.sci_HashCollisionSetNode__f_content.apply__I__O(index)
  };
  getHash__I__I(index) {
    return this.sci_HashCollisionSetNode__f_originalHash
  };
  size__I() {
    return this.sci_HashCollisionSetNode__f_content.length__I()
  };
  cachedJavaKeySetHashCode__I() {
    return $imul(this.sci_HashCollisionSetNode__f_content.length__I(), this.sci_HashCollisionSetNode__f_hash)
  };
  filterImpl__F1__Z__sci_SetNode(pred, flipped) {
    const this$1 = this.sci_HashCollisionSetNode__f_content;
    const newContent = $as_sci_Vector($f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this$1, pred, flipped));
    const newContentLength = newContent.length__I();
    if ((newContentLength === 0)) {
      const this$2 = $m_sci_SetNode$();
      return this$2.sci_SetNode$__f_EmptySetNode
    } else if ((newContentLength === 1)) {
      const $$x1 = $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(this.sci_HashCollisionSetNode__f_hash, 0));
      const array = [newContent.head__O()];
      const xs = new $c_sjsr_WrappedVarArgs(array);
      $m_s_reflect_ManifestFactory$AnyManifest$();
      const len = xs.length__I();
      const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
      const this$9 = new $c_sc_IndexedSeqView$Id(xs);
      const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$9);
      let i = 0;
      while (iterator.hasNext__Z()) {
        array$1.set(i, iterator.next__O());
        i = ((1 + i) | 0)
      };
      return new $c_sci_BitmapIndexedSetNode($$x1, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_HashCollisionSetNode__f_originalHash]), 1, this.sci_HashCollisionSetNode__f_hash)
    } else {
      return ((newContent.length__I() === this.sci_HashCollisionSetNode__f_content.length__I()) ? this : new $c_sci_HashCollisionSetNode(this.sci_HashCollisionSetNode__f_originalHash, this.sci_HashCollisionSetNode__f_hash, newContent))
    }
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashCollisionSetNode)) {
      const x2 = $as_sci_HashCollisionSetNode(that);
      if ((this === x2)) {
        return true
      } else {
        let $$x1;
        if ((this.sci_HashCollisionSetNode__f_hash === x2.sci_HashCollisionSetNode__f_hash)) {
          const this$1 = this.sci_HashCollisionSetNode__f_content;
          const $$x2 = this$1.length__I();
          const this$2 = x2.sci_HashCollisionSetNode__f_content;
          $$x1 = ($$x2 === this$2.length__I())
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const this$3 = this.sci_HashCollisionSetNode__f_content;
          const eta$0$1 = x2.sci_HashCollisionSetNode__f_content;
          let res = true;
          const it = this$3.iterator__sc_Iterator();
          while ((res && it.hasNext__Z())) {
            const arg1 = it.next__O();
            res = $f_sc_SeqOps__contains__O__Z(eta$0$1, arg1)
          };
          return res
        } else {
          return false
        }
      }
    } else {
      return false
    }
  };
  hashCode__I() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.")
  };
  copy__sci_SetNode() {
    return new $c_sci_HashCollisionSetNode(this.sci_HashCollisionSetNode__f_originalHash, this.sci_HashCollisionSetNode__f_hash, this.sci_HashCollisionSetNode__f_content)
  };
  getNode__I__sci_Node(index) {
    return this.getNode__I__sci_SetNode(index)
  };
}
function $as_sci_HashCollisionSetNode(obj) {
  return (((obj instanceof $c_sci_HashCollisionSetNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashCollisionSetNode"))
}
function $isArrayOf_sci_HashCollisionSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashCollisionSetNode)))
}
function $asArrayOf_sci_HashCollisionSetNode(obj, depth) {
  return (($isArrayOf_sci_HashCollisionSetNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashCollisionSetNode;", depth))
}
const $d_sci_HashCollisionSetNode = new $TypeData().initClass({
  sci_HashCollisionSetNode: 0
}, false, "scala.collection.immutable.HashCollisionSetNode", {
  sci_HashCollisionSetNode: 1,
  sci_SetNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_HashCollisionSetNode.prototype.$classData = $d_sci_HashCollisionSetNode;
class $c_sci_HashMap$ extends $c_O {
  constructor() {
    super();
    this.sci_HashMap$__f_EmptyMap = null;
    $n_sci_HashMap$ = this;
    const this$1 = $m_sci_MapNode$();
    this.sci_HashMap$__f_EmptyMap = new $c_sci_HashMap(this$1.sci_MapNode$__f_EmptyMapNode)
  };
  from__sc_IterableOnce__sci_HashMap(source) {
    if ((source instanceof $c_sci_HashMap)) {
      const x2 = $as_sci_HashMap(source);
      return x2
    } else {
      const this$1 = new $c_sci_HashMapBuilder();
      const this$2 = this$1.addAll__sc_IterableOnce__sci_HashMapBuilder(source);
      return this$2.result__sci_HashMap()
    }
  };
  newBuilder__scm_Builder() {
    return new $c_sci_HashMapBuilder()
  };
  from__sc_IterableOnce__O(it) {
    return this.from__sc_IterableOnce__sci_HashMap(it)
  };
}
const $d_sci_HashMap$ = new $TypeData().initClass({
  sci_HashMap$: 0
}, false, "scala.collection.immutable.HashMap$", {
  sci_HashMap$: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashMap$.prototype.$classData = $d_sci_HashMap$;
let $n_sci_HashMap$ = (void 0);
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$()
  };
  return $n_sci_HashMap$
}
class $c_sci_HashSet$ extends $c_O {
  constructor() {
    super();
    this.sci_HashSet$__f_EmptySet = null;
    $n_sci_HashSet$ = this;
    const this$1 = $m_sci_SetNode$();
    this.sci_HashSet$__f_EmptySet = new $c_sci_HashSet(this$1.sci_SetNode$__f_EmptySetNode)
  };
  from__sc_IterableOnce__sci_HashSet(source) {
    if ((source instanceof $c_sci_HashSet)) {
      const x2 = $as_sci_HashSet(source);
      return x2
    } else if ((source.knownSize__I() === 0)) {
      return this.sci_HashSet$__f_EmptySet
    } else {
      const this$1 = new $c_sci_HashSetBuilder();
      const this$2 = this$1.addAll__sc_IterableOnce__sci_HashSetBuilder(source);
      return this$2.result__sci_HashSet()
    }
  };
  newBuilder__scm_Builder() {
    return new $c_sci_HashSetBuilder()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_HashSet(source)
  };
}
const $d_sci_HashSet$ = new $TypeData().initClass({
  sci_HashSet$: 0
}, false, "scala.collection.immutable.HashSet$", {
  sci_HashSet$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$.prototype.$classData = $d_sci_HashSet$;
let $n_sci_HashSet$ = (void 0);
function $m_sci_HashSet$() {
  if ((!$n_sci_HashSet$)) {
    $n_sci_HashSet$ = new $c_sci_HashSet$()
  };
  return $n_sci_HashSet$
}
class $c_sci_LazyList$State$Cons extends $c_O {
  constructor(head, tail) {
    super();
    this.sci_LazyList$State$Cons__f_head = null;
    this.sci_LazyList$State$Cons__f_tail = null;
    this.sci_LazyList$State$Cons__f_head = head;
    this.sci_LazyList$State$Cons__f_tail = tail
  };
  head__O() {
    return this.sci_LazyList$State$Cons__f_head
  };
  tail__sci_LazyList() {
    return this.sci_LazyList$State$Cons__f_tail
  };
}
const $d_sci_LazyList$State$Cons = new $TypeData().initClass({
  sci_LazyList$State$Cons: 0
}, false, "scala.collection.immutable.LazyList$State$Cons", {
  sci_LazyList$State$Cons: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Cons.prototype.$classData = $d_sci_LazyList$State$Cons;
class $c_sci_LazyList$State$Empty$ extends $c_O {
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty lazy list")
  };
  tail__sci_LazyList() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty lazy list")
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_LazyList$State$Empty$ = new $TypeData().initClass({
  sci_LazyList$State$Empty$: 0
}, false, "scala.collection.immutable.LazyList$State$Empty$", {
  sci_LazyList$State$Empty$: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Empty$.prototype.$classData = $d_sci_LazyList$State$Empty$;
let $n_sci_LazyList$State$Empty$ = (void 0);
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$()
  };
  return $n_sci_LazyList$State$Empty$
}
class $c_sci_Map$ extends $c_O {
  from__sc_IterableOnce__sci_Map(it) {
    if ($is_sci_Iterable(it)) {
      const x2 = $as_sci_Iterable(it);
      if (x2.isEmpty__Z()) {
        return $m_sci_Map$EmptyMap$()
      }
    };
    if ($is_sci_Map(it)) {
      const x3 = $as_sci_Map(it);
      return x3
    };
    const this$1 = new $c_sci_MapBuilderImpl();
    const this$2 = this$1.addAll__sc_IterableOnce__sci_MapBuilderImpl(it);
    return this$2.result__sci_Map()
  };
  newBuilder__scm_Builder() {
    return new $c_sci_MapBuilderImpl()
  };
  from__sc_IterableOnce__O(it) {
    return this.from__sc_IterableOnce__sci_Map(it)
  };
}
const $d_sci_Map$ = new $TypeData().initClass({
  sci_Map$: 0
}, false, "scala.collection.immutable.Map$", {
  sci_Map$: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$.prototype.$classData = $d_sci_Map$;
let $n_sci_Map$ = (void 0);
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$()
  };
  return $n_sci_Map$
}
class $c_sci_Set$ extends $c_O {
  from__sc_IterableOnce__sci_Set(it) {
    if ($is_sci_SortedSet(it)) {
      const this$1 = new $c_sci_SetBuilderImpl();
      const this$2 = this$1.addAll__sc_IterableOnce__sci_SetBuilderImpl(it);
      return this$2.result__sci_Set()
    } else if ((it.knownSize__I() === 0)) {
      return $m_sci_Set$EmptySet$()
    } else if ($is_sci_Set(it)) {
      const x3 = $as_sci_Set(it);
      return x3
    } else {
      const this$3 = new $c_sci_SetBuilderImpl();
      const this$4 = this$3.addAll__sc_IterableOnce__sci_SetBuilderImpl(it);
      return this$4.result__sci_Set()
    }
  };
  newBuilder__scm_Builder() {
    return new $c_sci_SetBuilderImpl()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Set(source)
  };
}
const $d_sci_Set$ = new $TypeData().initClass({
  sci_Set$: 0
}, false, "scala.collection.immutable.Set$", {
  sci_Set$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$.prototype.$classData = $d_sci_Set$;
let $n_sci_Set$ = (void 0);
function $m_sci_Set$() {
  if ((!$n_sci_Set$)) {
    $n_sci_Set$ = new $c_sci_Set$()
  };
  return $n_sci_Set$
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth))
}
class $c_scm_HashMap$ extends $c_O {
  from__sc_IterableOnce__scm_HashMap(it) {
    const k = it.knownSize__I();
    const cap = ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16);
    return $ct_scm_HashMap__I__D__(new $c_scm_HashMap(), cap, 0.75).addAll__sc_IterableOnce__scm_HashMap(it)
  };
  newBuilder__scm_Builder() {
    return new $c_scm_HashMap$$anon$5(16, 0.75)
  };
  from__sc_IterableOnce__O(it) {
    return this.from__sc_IterableOnce__scm_HashMap(it)
  };
}
const $d_scm_HashMap$ = new $TypeData().initClass({
  scm_HashMap$: 0
}, false, "scala.collection.mutable.HashMap$", {
  scm_HashMap$: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_HashMap$.prototype.$classData = $d_scm_HashMap$;
let $n_scm_HashMap$ = (void 0);
function $m_scm_HashMap$() {
  if ((!$n_scm_HashMap$)) {
    $n_scm_HashMap$ = new $c_scm_HashMap$()
  };
  return $n_scm_HashMap$
}
class $c_s_math_Equiv$ extends $c_O {
}
const $d_s_math_Equiv$ = new $TypeData().initClass({
  s_math_Equiv$: 0
}, false, "scala.math.Equiv$", {
  s_math_Equiv$: 1,
  O: 1,
  s_math_LowPriorityEquiv: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Equiv$.prototype.$classData = $d_s_math_Equiv$;
let $n_s_math_Equiv$ = (void 0);
function $m_s_math_Equiv$() {
  if ((!$n_s_math_Equiv$)) {
    $n_s_math_Equiv$ = new $c_s_math_Equiv$()
  };
  return $n_s_math_Equiv$
}
class $c_s_math_Ordering$ extends $c_O {
}
const $d_s_math_Ordering$ = new $TypeData().initClass({
  s_math_Ordering$: 0
}, false, "scala.math.Ordering$", {
  s_math_Ordering$: 1,
  O: 1,
  s_math_LowPriorityOrderingImplicits: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$.prototype.$classData = $d_s_math_Ordering$;
let $n_s_math_Ordering$ = (void 0);
function $m_s_math_Ordering$() {
  if ((!$n_s_math_Ordering$)) {
    $n_s_math_Ordering$ = new $c_s_math_Ordering$()
  };
  return $n_s_math_Ordering$
}
class $c_s_math_ScalaNumber {
}
function $as_s_math_ScalaNumber(obj) {
  return (((obj instanceof $c_s_math_ScalaNumber) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
class $c_s_reflect_NoManifest$ extends $c_O {
  toString__T() {
    return "<?>"
  };
}
const $d_s_reflect_NoManifest$ = new $TypeData().initClass({
  s_reflect_NoManifest$: 0
}, false, "scala.reflect.NoManifest$", {
  s_reflect_NoManifest$: 1,
  O: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_NoManifest$.prototype.$classData = $d_s_reflect_NoManifest$;
let $n_s_reflect_NoManifest$ = (void 0);
function $m_s_reflect_NoManifest$() {
  if ((!$n_s_reflect_NoManifest$)) {
    $n_s_reflect_NoManifest$ = new $c_s_reflect_NoManifest$()
  };
  return $n_s_reflect_NoManifest$
}
const $d_sr_Nothing$ = new $TypeData().initClass({
  sr_Nothing$: 0
}, false, "scala.runtime.Nothing$", {
  sr_Nothing$: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
class $c_sjsr_AnonFunction0 extends $c_sr_AbstractFunction0 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction0__f_f = null;
    this.sjsr_AnonFunction0__f_f = f
  };
  apply__O() {
    return (0, this.sjsr_AnonFunction0__f_f)()
  };
}
const $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
class $c_sjsr_AnonFunction1 extends $c_sr_AbstractFunction1 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction1__f_f = null;
    this.sjsr_AnonFunction1__f_f = f
  };
  apply__O__O(arg1) {
    return (0, this.sjsr_AnonFunction1__f_f)(arg1)
  };
}
const $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
class $c_sjsr_AnonFunction3 extends $c_sr_AbstractFunction3 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction3__f_f = null;
    this.sjsr_AnonFunction3__f_f = f
  };
  apply__O__O__O__O(arg1, arg2, arg3) {
    return (0, this.sjsr_AnonFunction3__f_f)(arg1, arg2, arg3)
  };
}
const $d_sjsr_AnonFunction3 = new $TypeData().initClass({
  sjsr_AnonFunction3: 0
}, false, "scala.scalajs.runtime.AnonFunction3", {
  sjsr_AnonFunction3: 1,
  sr_AbstractFunction3: 1,
  O: 1,
  F3: 1
});
$c_sjsr_AnonFunction3.prototype.$classData = $d_sjsr_AnonFunction3;
class $c_s_util_Random$ extends $c_s_util_Random {
  constructor() {
    super();
    $ct_s_util_Random__ju_Random__(this, $ct_ju_Random__(new $c_ju_Random()))
  };
}
const $d_s_util_Random$ = new $TypeData().initClass({
  s_util_Random$: 0
}, false, "scala.util.Random$", {
  s_util_Random$: 1,
  s_util_Random: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Random$.prototype.$classData = $d_s_util_Random$;
let $n_s_util_Random$ = (void 0);
function $m_s_util_Random$() {
  if ((!$n_s_util_Random$)) {
    $n_s_util_Random$ = new $c_s_util_Random$()
  };
  return $n_s_util_Random$
}
class $c_s_xml_MinimizeMode$ extends $c_s_Enumeration {
  constructor() {
    super();
    this.s_xml_MinimizeMode$__f_Default = null;
    this.s_xml_MinimizeMode$__f_Always = null;
    this.s_xml_MinimizeMode$__f_Never = null;
    $ct_s_Enumeration__I__(this, 0);
    $n_s_xml_MinimizeMode$ = this;
    const name = (((this.s_Enumeration__f_nextName !== null) && this.s_Enumeration__f_nextName.hasNext__Z()) ? $as_T(this.s_Enumeration__f_nextName.next__O()) : "Default");
    const i = this.s_Enumeration__f_nextId;
    this.s_xml_MinimizeMode$__f_Default = new $c_s_Enumeration$Val(this, i, name);
    const name$1 = (((this.s_Enumeration__f_nextName !== null) && this.s_Enumeration__f_nextName.hasNext__Z()) ? $as_T(this.s_Enumeration__f_nextName.next__O()) : "Always");
    const i$1 = this.s_Enumeration__f_nextId;
    this.s_xml_MinimizeMode$__f_Always = new $c_s_Enumeration$Val(this, i$1, name$1);
    const name$2 = (((this.s_Enumeration__f_nextName !== null) && this.s_Enumeration__f_nextName.hasNext__Z()) ? $as_T(this.s_Enumeration__f_nextName.next__O()) : "Never");
    const i$2 = this.s_Enumeration__f_nextId;
    this.s_xml_MinimizeMode$__f_Never = new $c_s_Enumeration$Val(this, i$2, name$2)
  };
}
const $d_s_xml_MinimizeMode$ = new $TypeData().initClass({
  s_xml_MinimizeMode$: 0
}, false, "scala.xml.MinimizeMode$", {
  s_xml_MinimizeMode$: 1,
  s_Enumeration: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_xml_MinimizeMode$.prototype.$classData = $d_s_xml_MinimizeMode$;
let $n_s_xml_MinimizeMode$ = (void 0);
function $m_s_xml_MinimizeMode$() {
  if ((!$n_s_xml_MinimizeMode$)) {
    $n_s_xml_MinimizeMode$ = new $c_s_xml_MinimizeMode$()
  };
  return $n_s_xml_MinimizeMode$
}
class $c_Ljava_io_IOException {
}
function $as_Ljava_io_IOException(obj) {
  return (((obj instanceof $c_Ljava_io_IOException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.IOException"))
}
function $isArrayOf_Ljava_io_IOException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_IOException)))
}
function $asArrayOf_Ljava_io_IOException(obj, depth) {
  return (($isArrayOf_Ljava_io_IOException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.IOException;", depth))
}
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    const message = ("" + detailMessage);
    let cause;
    if ((detailMessage instanceof $c_jl_Throwable)) {
      const x2 = $as_jl_Throwable(detailMessage);
      cause = x2
    } else {
      cause = null
    };
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
const $d_jl_AssertionError = new $TypeData().initClass({
  jl_AssertionError: 0
}, false, "java.lang.AssertionError", {
  jl_AssertionError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_AssertionError.prototype.$classData = $d_jl_AssertionError;
const $f_jl_Byte__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Byte__hashCode__I = (function($thiz) {
  return $uB($thiz)
});
const $f_jl_Byte__toString__T = (function($thiz) {
  const b = $uB($thiz);
  return ("" + b)
});
const $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
const $ct_jl_CloneNotSupportedException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_CloneNotSupportedException extends $c_jl_Exception {
}
const $d_jl_CloneNotSupportedException = new $TypeData().initClass({
  jl_CloneNotSupportedException: 0
}, false, "java.lang.CloneNotSupportedException", {
  jl_CloneNotSupportedException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_CloneNotSupportedException.prototype.$classData = $d_jl_CloneNotSupportedException;
const $f_jl_Double__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Double__hashCode__I = (function($thiz) {
  const value = $uD($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
const $f_jl_Double__toString__T = (function($thiz) {
  const d = $uD($thiz);
  return ("" + d)
});
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
const $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
const $f_jl_Float__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Float__hashCode__I = (function($thiz) {
  const value = $uF($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
const $f_jl_Float__toString__T = (function($thiz) {
  const f = $uF($thiz);
  return ("" + f)
});
const $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
const $f_jl_Integer__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Integer__hashCode__I = (function($thiz) {
  return $uI($thiz)
});
const $f_jl_Integer__toString__T = (function($thiz) {
  const i = $uI($thiz);
  return ("" + i)
});
function $as_jl_Integer(obj) {
  return (($isInt(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Integer"))
}
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Integer)))
}
function $asArrayOf_jl_Integer(obj, depth) {
  return (($isArrayOf_jl_Integer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Integer;", depth))
}
const $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
const $f_jl_Long__equals__O__Z = (function($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    const x2 = $as_jl_Long(that);
    const t = $uJ($thiz);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const b = $uJ(x2);
    return ((lo === b.RTLong__f_lo) && (hi === b.RTLong__f_hi))
  } else {
    return false
  }
});
const $f_jl_Long__hashCode__I = (function($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return (lo ^ hi)
});
const $f_jl_Long__toString__T = (function($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi)
});
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
const $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
const $f_jl_Short__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Short__hashCode__I = (function($thiz) {
  return $uS($thiz)
});
const $f_jl_Short__toString__T = (function($thiz) {
  const s = $uS($thiz);
  return ("" + s)
});
const $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
const $f_T__hashCode__I = (function($thiz) {
  let res = 0;
  let mul = 1;
  let i = (((-1) + $uI($thiz.length)) | 0);
  while ((i >= 0)) {
    const $$x1 = res;
    const index = i;
    res = (($$x1 + $imul((65535 & $uI($thiz.charCodeAt(index))), mul)) | 0);
    mul = $imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
});
const $f_T__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_T__endsWith__T__Z = (function($thiz, suffix) {
  return ($as_T($thiz.substring((($uI($thiz.length) - $uI(suffix.length)) | 0))) === suffix)
});
const $f_T__getChars__I__I__AC__I__V = (function($thiz, srcBegin, srcEnd, dst, dstBegin) {
  if (((((srcEnd > $uI($thiz.length)) || (srcBegin < 0)) || (srcEnd < 0)) || (srcBegin > srcEnd))) {
    throw $ct_jl_StringIndexOutOfBoundsException__T__(new $c_jl_StringIndexOutOfBoundsException(), "Index out of Bound")
  };
  const offset = ((dstBegin - srcBegin) | 0);
  let i = srcBegin;
  while ((i < srcEnd)) {
    const $$x1 = i;
    const index = i;
    dst.set((($$x1 + offset) | 0), (65535 & $uI($thiz.charCodeAt(index))));
    i = ((1 + i) | 0)
  }
});
const $f_T__indexOf__I__I = (function($thiz, ch) {
  const str = $m_jl_String$().java$lang$_String$$fromCodePoint__I__T(ch);
  return $uI($thiz.indexOf(str))
});
const $f_T__split__T__I__AT = (function($thiz, regex, limit) {
  const this$1 = $m_ju_regex_Pattern$();
  return this$1.compile__T__I__ju_regex_Pattern(regex, 0).split__jl_CharSequence__I__AT($thiz, limit)
});
const $f_T__subSequence__I__I__jl_CharSequence = (function($thiz, beginIndex, endIndex) {
  return $as_T($thiz.substring(beginIndex, endIndex))
});
const $f_T__toString__T = (function($thiz) {
  return $thiz
});
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
const $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
const $ct_jl_StringBuilder__ = (function($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
});
const $ct_jl_StringBuilder__T__ = (function($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException()
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
});
class $c_jl_StringBuilder extends $c_O {
  constructor() {
    super();
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
  };
  append__AC__jl_StringBuilder(str) {
    const this$1 = $m_jl_String$();
    const count = str.u.length;
    const str$1 = this$1.new__AC__I__I__T(str, 0, count);
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
    return this
  };
  toString__T() {
    return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  length__I() {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return $uI(this$1.length)
  };
  charAt__I__C(index) {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return (65535 & $uI(this$1.charCodeAt(index)))
  };
  getChars__I__I__AC__I__V(srcBegin, srcEnd, dst, dstBegin) {
    $f_T__getChars__I__I__AC__I__V(this.jl_StringBuilder__f_java$lang$StringBuilder$$content, srcBegin, srcEnd, dst, dstBegin)
  };
  subSequence__I__I__jl_CharSequence(start, end) {
    return this.substring__I__I__T(start, end)
  };
  substring__I__I__T(start, end) {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return $as_T(this$1.substring(start, end))
  };
}
const $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
const $p_ju_Formatter__sendToDest__T__V = (function($thiz, s) {
  if (($thiz.ju_Formatter__f_dest === null)) {
    $thiz.ju_Formatter__f_stringOutput = (("" + $thiz.ju_Formatter__f_stringOutput) + s)
  } else {
    $p_ju_Formatter__sendToDestSlowPath__sjs_js_Array__V($thiz, [s])
  }
});
const $p_ju_Formatter__sendToDest__T__T__V = (function($thiz, s1, s2) {
  if (($thiz.ju_Formatter__f_dest === null)) {
    $thiz.ju_Formatter__f_stringOutput = ((("" + $thiz.ju_Formatter__f_stringOutput) + s1) + s2)
  } else {
    $p_ju_Formatter__sendToDestSlowPath__sjs_js_Array__V($thiz, [s1, s2])
  }
});
const $p_ju_Formatter__sendToDest__T__T__T__V = (function($thiz, s1, s2, s3) {
  if (($thiz.ju_Formatter__f_dest === null)) {
    $thiz.ju_Formatter__f_stringOutput = (($thiz.ju_Formatter__f_stringOutput + (("" + s1) + s2)) + s3)
  } else {
    $p_ju_Formatter__sendToDestSlowPath__sjs_js_Array__V($thiz, [s1, s2, s3])
  }
});
const $p_ju_Formatter__sendToDestSlowPath__sjs_js_Array__V = (function($thiz, ss) {
  try {
    const len = $uI(ss.length);
    let i = 0;
    while ((i < len)) {
      const arg1 = ss[i];
      const x$1 = $as_T(arg1);
      const this$3 = $thiz.ju_Formatter__f_dest;
      this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + x$1);
      i = ((1 + i) | 0)
    }
  } catch (e) {
    if ((e instanceof $c_Ljava_io_IOException)) {
      const th = $as_Ljava_io_IOException(e);
      $thiz.ju_Formatter__f_java$util$Formatter$$lastIOException = th
    } else {
      throw e
    }
  }
});
const $p_ju_Formatter__parseFlags__T__C__I = (function($thiz, flags, conversion) {
  let bits = ((conversion <= 90) ? 256 : 0);
  const len = $uI(flags.length);
  let i = 0;
  while ((i !== len)) {
    const index = i;
    const f = (65535 & $uI(flags.charCodeAt(index)));
    let bit;
    switch (f) {
      case 45: {
        bit = 1;
        break
      }
      case 35: {
        bit = 2;
        break
      }
      case 43: {
        bit = 4;
        break
      }
      case 32: {
        bit = 8;
        break
      }
      case 48: {
        bit = 16;
        break
      }
      case 44: {
        bit = 32;
        break
      }
      case 40: {
        bit = 64;
        break
      }
      case 60: {
        bit = 128;
        break
      }
      default: {
        throw new $c_s_MatchError($bC(f))
      }
    };
    if (((bits & bit) !== 0)) {
      throw new $c_ju_DuplicateFormatFlagsException($as_T(String.fromCharCode(f)))
    };
    bits = (bits | bit);
    i = ((1 + i) | 0)
  };
  return bits
});
const $p_ju_Formatter__parsePositiveIntSilent__sjs_js_$bar__I__I = (function($thiz, capture, default$1) {
  if ((capture === (void 0))) {
    return default$1
  } else {
    const s = $as_T(capture);
    const x = $uD(parseInt(s, 10));
    return ((x <= 2.147483647E9) ? $doubleToInt(x) : (-1))
  }
});
const $p_ju_Formatter__formatArg__O__C__I__I__I__V = (function($thiz, arg, conversion, flags, width, precision) {
  switch (conversion) {
    case 98:
    case 66: {
      if (((126 & flags) !== 0)) {
        $p_ju_Formatter__flagsConversionMismatch$1__I__I__C__E($thiz, flags, 126, conversion)
      };
      const str = (((arg === false) || (arg === null)) ? "false" : "true");
      $p_ju_Formatter__formatNonNumericString__I__I__I__T__V($thiz, flags, width, precision, str);
      break
    }
    case 104:
    case 72: {
      if (((126 & flags) !== 0)) {
        $p_ju_Formatter__flagsConversionMismatch$1__I__I__C__E($thiz, flags, 126, conversion)
      };
      let str$2;
      if ((arg === null)) {
        str$2 = "null"
      } else {
        const i = $dp_hashCode__I(arg);
        str$2 = $as_T($uD((i >>> 0)).toString(16))
      };
      $p_ju_Formatter__formatNonNumericString__I__I__I__T__V($thiz, flags, width, precision, str$2);
      break
    }
    case 115:
    case 83: {
      if ($is_ju_Formattable(arg)) {
        const x2 = $as_ju_Formattable(arg);
        if (((124 & flags) !== 0)) {
          $p_ju_Formatter__flagsConversionMismatch$1__I__I__C__E($thiz, flags, 124, conversion)
        };
        const formattableFlags = (((((1 & flags) !== 0) ? 1 : 0) | (((2 & flags) !== 0) ? 4 : 0)) | (((256 & flags) !== 0) ? 2 : 0));
        x2.formatTo__ju_Formatter__I__I__I__V($thiz, formattableFlags, width, precision)
      } else {
        if (((126 & flags) !== 0)) {
          $p_ju_Formatter__flagsConversionMismatch$1__I__I__C__E($thiz, flags, 126, conversion)
        };
        const str$3 = ("" + arg);
        $p_ju_Formatter__formatNonNumericString__I__I__I__T__V($thiz, flags, width, precision, str$3)
      };
      break
    }
    case 99:
    case 67: {
      if (((126 & flags) !== 0)) {
        $p_ju_Formatter__flagsConversionMismatch$1__I__I__C__E($thiz, flags, 126, conversion)
      };
      if ((precision >= 0)) {
        throw new $c_ju_IllegalFormatPrecisionException(precision)
      };
      if ((arg instanceof $Char)) {
        const x2$2 = $uC(arg);
        $p_ju_Formatter__formatNonNumericString__I__I__I__T__V($thiz, flags, width, (-1), $as_T(String.fromCharCode(x2$2)))
      } else if ($isInt(arg)) {
        const x3 = $uI(arg);
        if ((!((x3 >= 0) && (x3 <= 1114111)))) {
          throw new $c_ju_IllegalFormatCodePointException(x3)
        };
        let str$4;
        if ((x3 < 65536)) {
          str$4 = String.fromCharCode(x3)
        } else {
          const $$x1 = String;
          const value = (55296 | (((-64) + (x3 >> 10)) | 0));
          const value$1 = (56320 | (1023 & x3));
          str$4 = $$x1.fromCharCode(value, value$1)
        };
        $p_ju_Formatter__formatNonNumericString__I__I__I__T__V($thiz, flags, width, (-1), $as_T(str$4))
      } else {
        $p_ju_Formatter__formatNullOrThrowIllegalFormatConversion$1__O__I__I__I__C__V($thiz, arg, flags, width, precision, conversion)
      };
      break
    }
    case 100: {
      if (((2 & flags) !== 0)) {
        $p_ju_Formatter__flagsConversionMismatch$1__I__I__C__E($thiz, flags, 2, conversion)
      };
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $p_ju_Formatter__illegalFlags$1__I__E($thiz, flags)
      };
      if ((precision >= 0)) {
        throw new $c_ju_IllegalFormatPrecisionException(precision)
      };
      if ($isInt(arg)) {
        const x2$3 = $uI(arg);
        $thiz.java$util$Formatter$$formatNumericString__I__I__T__V(flags, width, ("" + x2$3))
      } else if ((arg instanceof $c_RTLong)) {
        const t = $uJ(arg);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        $thiz.java$util$Formatter$$formatNumericString__I__I__T__V(flags, width, $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi))
      } else {
        $p_ju_Formatter__formatNullOrThrowIllegalFormatConversion$1__O__I__I__I__C__V($thiz, arg, flags, width, precision, conversion)
      };
      break
    }
    case 111: {
      if (((108 & flags) !== 0)) {
        $p_ju_Formatter__flagsConversionMismatch$1__I__I__C__E($thiz, flags, 108, conversion)
      };
      if (((17 & flags) === 17)) {
        $p_ju_Formatter__illegalFlags$1__I__E($thiz, flags)
      };
      if ((precision >= 0)) {
        throw new $c_ju_IllegalFormatPrecisionException(precision)
      };
      const prefix = (((2 & flags) !== 0) ? "0" : "");
      if ($isInt(arg)) {
        const x2$4 = $uI(arg);
        $p_ju_Formatter__padAndSendToDest__I__I__T__T__V($thiz, flags, width, prefix, $as_T($uD((x2$4 >>> 0)).toString(8)))
      } else if ((arg instanceof $c_RTLong)) {
        const t$1 = $uJ(arg);
        const lo$1 = t$1.RTLong__f_lo;
        const hi$1 = t$1.RTLong__f_hi;
        const this$14 = $m_jl_Long$();
        $p_ju_Formatter__padAndSendToDest__I__I__T__T__V($thiz, flags, width, prefix, this$14.java$lang$Long$$toOctalString__I__I__T(lo$1, hi$1))
      } else {
        $p_ju_Formatter__formatNullOrThrowIllegalFormatConversion$1__O__I__I__I__C__V($thiz, arg, flags, width, precision, conversion)
      };
      break
    }
    case 120:
    case 88: {
      if (((108 & flags) !== 0)) {
        $p_ju_Formatter__flagsConversionMismatch$1__I__I__C__E($thiz, flags, 108, conversion)
      };
      if (((17 & flags) === 17)) {
        $p_ju_Formatter__illegalFlags$1__I__E($thiz, flags)
      };
      if ((precision >= 0)) {
        throw new $c_ju_IllegalFormatPrecisionException(precision)
      };
      const prefix$2 = (((2 & flags) === 0) ? "" : (((256 & flags) !== 0) ? "0X" : "0x"));
      if ($isInt(arg)) {
        const x2$5 = $uI(arg);
        $p_ju_Formatter__padAndSendToDest__I__I__T__T__V($thiz, flags, width, prefix$2, $p_ju_Formatter__applyUpperCase__I__T__T($thiz, flags, $as_T($uD((x2$5 >>> 0)).toString(16))))
      } else if ((arg instanceof $c_RTLong)) {
        const t$2 = $uJ(arg);
        const lo$2 = t$2.RTLong__f_lo;
        const hi$2 = t$2.RTLong__f_hi;
        const this$18 = $m_jl_Long$();
        $p_ju_Formatter__padAndSendToDest__I__I__T__T__V($thiz, flags, width, prefix$2, $p_ju_Formatter__applyUpperCase__I__T__T($thiz, flags, this$18.java$lang$Long$$toHexString__I__I__T(lo$2, hi$2)))
      } else {
        $p_ju_Formatter__formatNullOrThrowIllegalFormatConversion$1__O__I__I__I__C__V($thiz, arg, flags, width, precision, conversion)
      };
      break
    }
    case 101:
    case 69: {
      if (((32 & flags) !== 0)) {
        $p_ju_Formatter__flagsConversionMismatch$1__I__I__C__E($thiz, flags, 32, conversion)
      };
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $p_ju_Formatter__illegalFlags$1__I__E($thiz, flags)
      };
      if (((typeof arg) === "number")) {
        const x2$1 = $uD(arg);
        if (((x2$1 !== x2$1) || ((x2$1 === Infinity) || (x2$1 === (-Infinity))))) {
          $thiz.java$util$Formatter$$formatNaNOrInfinite__I__I__D__V(flags, width, x2$1)
        } else {
          const forceDecimalSep = ((2 & flags) !== 0);
          const arg2 = ((precision >= 0) ? precision : 6);
          $thiz.java$util$Formatter$$formatNumericString__I__I__T__V(flags, width, $p_ju_Formatter__computerizedScientificNotation__D__I__Z__T($thiz, x2$1, arg2, forceDecimalSep))
        }
      } else {
        $p_ju_Formatter__formatNullOrThrowIllegalFormatConversion$1__O__I__I__I__C__V($thiz, arg, flags, width, precision, conversion)
      };
      break
    }
    case 103:
    case 71: {
      if (((2 & flags) !== 0)) {
        $p_ju_Formatter__flagsConversionMismatch$1__I__I__C__E($thiz, flags, 2, conversion)
      };
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $p_ju_Formatter__illegalFlags$1__I__E($thiz, flags)
      };
      if (((typeof arg) === "number")) {
        const x2$6 = $uD(arg);
        if (((x2$6 !== x2$6) || ((x2$6 === Infinity) || (x2$6 === (-Infinity))))) {
          $thiz.java$util$Formatter$$formatNaNOrInfinite__I__I__D__V(flags, width, x2$6)
        } else {
          const forceDecimalSep$1 = ((2 & flags) !== 0);
          const arg2$1 = ((precision >= 0) ? precision : 6);
          $thiz.java$util$Formatter$$formatNumericString__I__I__T__V(flags, width, $p_ju_Formatter__generalScientificNotation__D__I__Z__T($thiz, x2$6, arg2$1, forceDecimalSep$1))
        }
      } else {
        $p_ju_Formatter__formatNullOrThrowIllegalFormatConversion$1__O__I__I__I__C__V($thiz, arg, flags, width, precision, conversion)
      };
      break
    }
    case 102: {
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $p_ju_Formatter__illegalFlags$1__I__E($thiz, flags)
      };
      if (((typeof arg) === "number")) {
        const x2$7 = $uD(arg);
        if (((x2$7 !== x2$7) || ((x2$7 === Infinity) || (x2$7 === (-Infinity))))) {
          $thiz.java$util$Formatter$$formatNaNOrInfinite__I__I__D__V(flags, width, x2$7)
        } else {
          const forceDecimalSep$2 = ((2 & flags) !== 0);
          const arg2$2 = ((precision >= 0) ? precision : 6);
          $thiz.java$util$Formatter$$formatNumericString__I__I__T__V(flags, width, $p_ju_Formatter__decimalNotation__D__I__Z__T($thiz, x2$7, arg2$2, forceDecimalSep$2))
        }
      } else {
        $p_ju_Formatter__formatNullOrThrowIllegalFormatConversion$1__O__I__I__I__C__V($thiz, arg, flags, width, precision, conversion)
      };
      break
    }
    case 37: {
      if (((254 & flags) !== 0)) {
        $p_ju_Formatter__illegalFlags$2__I__E($thiz, flags)
      };
      if ((precision >= 0)) {
        throw new $c_ju_IllegalFormatPrecisionException(precision)
      };
      if ((((1 & flags) !== 0) && (width < 0))) {
        throw new $c_ju_MissingFormatWidthException("%-%")
      };
      $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, "%");
      break
    }
    case 110: {
      if (((255 & flags) !== 0)) {
        $p_ju_Formatter__illegalFlags$2__I__E($thiz, flags)
      };
      if ((precision >= 0)) {
        throw new $c_ju_IllegalFormatPrecisionException(precision)
      };
      if ((width >= 0)) {
        throw new $c_ju_IllegalFormatWidthException(width)
      };
      $p_ju_Formatter__sendToDest__T__V($thiz, "\n");
      break
    }
    default: {
      throw new $c_ju_UnknownFormatConversionException($as_T(String.fromCharCode(conversion)))
    }
  }
});
const $p_ju_Formatter__flagsToString__I__T = (function($thiz, flags) {
  return ((((((((((1 & flags) !== 0) ? "-" : "") + (((2 & flags) !== 0) ? "#" : "")) + (((4 & flags) !== 0) ? "+" : "")) + (((8 & flags) !== 0) ? " " : "")) + (((16 & flags) !== 0) ? "0" : "")) + (((32 & flags) !== 0) ? "," : "")) + (((64 & flags) !== 0) ? "(" : "")) + (((128 & flags) !== 0) ? "<" : ""))
});
const $p_ju_Formatter__computerizedScientificNotation__D__I__Z__T = (function($thiz, x, precision, forceDecimalSep) {
  const s1 = $as_T(x.toExponential(precision));
  const s2 = (((x === 0.0) && ((1.0 / x) < 0.0)) ? ("-" + s1) : s1);
  const len = $uI(s2.length);
  const index = (((-3) + len) | 0);
  let s3;
  if (((65535 & $uI(s2.charCodeAt(index))) !== 101)) {
    s3 = s2
  } else {
    const endIndex = (((-1) + len) | 0);
    const $$x1 = $as_T(s2.substring(0, endIndex));
    const beginIndex = (((-1) + len) | 0);
    s3 = (($$x1 + "0") + $as_T(s2.substring(beginIndex)))
  };
  if (((!forceDecimalSep) || ($uI(s3.indexOf(".")) >= 0))) {
    return s3
  } else {
    const pos = $uI(s3.indexOf("e"));
    return (($as_T(s3.substring(0, pos)) + ".") + $as_T(s3.substring(pos)))
  }
});
const $p_ju_Formatter__generalScientificNotation__D__I__Z__T = (function($thiz, x, precision, forceDecimalSep) {
  const m = $uD(Math.abs(x));
  const p = ((precision === 0) ? 1 : precision);
  let $$x1;
  if ((m >= 1.0E-4)) {
    const b = p;
    $$x1 = (m < $uD(Math.pow(10.0, b)))
  } else {
    $$x1 = false
  };
  if ($$x1) {
    const a = $uD(Math.log10(m));
    const sig0 = $doubleToInt($uD(Math.ceil(a)));
    const b$1 = sig0;
    let sig;
    if (($uD(Math.pow(10.0, b$1)) <= m)) {
      sig = ((1 + sig0) | 0)
    } else {
      sig = sig0
    };
    const a$1 = ((p - sig) | 0);
    return $p_ju_Formatter__decimalNotation__D__I__Z__T($thiz, x, ((a$1 > 0) ? a$1 : 0), forceDecimalSep)
  } else {
    return $p_ju_Formatter__computerizedScientificNotation__D__I__Z__T($thiz, x, (((-1) + p) | 0), forceDecimalSep)
  }
});
const $p_ju_Formatter__decimalNotation__D__I__Z__T = (function($thiz, x, precision, forceDecimalSep) {
  const s1 = $as_T(x.toFixed(precision));
  const s2 = (((x === 0.0) && ((1.0 / x) < 0.0)) ? ("-" + s1) : s1);
  return ((forceDecimalSep && ($uI(s2.indexOf(".")) < 0)) ? (s2 + ".") : s2)
});
const $p_ju_Formatter__formatNonNumericString__I__I__I__T__V = (function($thiz, flags, width, precision, str) {
  const truncatedStr = ((precision < 0) ? str : $as_T(str.substring(0, precision)));
  $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyUpperCase__I__T__T($thiz, flags, truncatedStr))
});
const $p_ju_Formatter__insertGroupingSeps__T__T = (function($thiz, s) {
  const len = $uI(s.length);
  let index = 0;
  while (true) {
    let $$x1;
    if ((index !== len)) {
      const index$1 = index;
      const c = (65535 & $uI(s.charCodeAt(index$1)));
      $$x1 = ((c >= 48) && (c <= 57))
    } else {
      $$x1 = false
    };
    if ($$x1) {
      index = ((1 + index) | 0)
    } else {
      break
    }
  };
  index = (((-3) + index) | 0);
  if ((index <= 0)) {
    return s
  } else {
    const beginIndex = index;
    let result = $as_T(s.substring(beginIndex));
    while ((index > 3)) {
      const next = (((-3) + index) | 0);
      const endIndex = index;
      result = (($as_T(s.substring(next, endIndex)) + ",") + result);
      index = next
    };
    const endIndex$1 = index;
    return (($as_T(s.substring(0, endIndex$1)) + ",") + result)
  }
});
const $p_ju_Formatter__applyUpperCase__I__T__T = (function($thiz, flags, str) {
  return (((256 & flags) !== 0) ? $as_T(str.toUpperCase()) : str)
});
const $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V = (function($thiz, flags, width, str) {
  const len = $uI(str.length);
  if ((len >= width)) {
    $p_ju_Formatter__sendToDest__T__V($thiz, str)
  } else if (((1 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, str, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)))
  } else {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)), str)
  }
});
const $p_ju_Formatter__padAndSendToDest__I__I__T__T__V = (function($thiz, flags, width, prefix, str) {
  const len = (($uI(prefix.length) + $uI(str.length)) | 0);
  if ((len >= width)) {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, prefix, str)
  } else if (((16 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, prefix, $p_ju_Formatter__strRepeat__T__I__T($thiz, "0", ((width - len) | 0)), str)
  } else if (((1 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, prefix, str, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)))
  } else {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)), prefix, str)
  }
});
const $p_ju_Formatter__strRepeat__T__I__T = (function($thiz, s, times) {
  let result = "";
  let i = 0;
  while ((i !== times)) {
    result = (("" + result) + s);
    i = ((1 + i) | 0)
  };
  return result
});
const $p_ju_Formatter__formatNullOrThrowIllegalFormatConversion$1__O__I__I__I__C__V = (function($thiz, arg$1, flags$1, width$1, precision$1, conversion$1) {
  if ((arg$1 === null)) {
    $p_ju_Formatter__formatNonNumericString__I__I__I__T__V($thiz, flags$1, width$1, precision$1, "null")
  } else {
    throw new $c_ju_IllegalFormatConversionException(conversion$1, $objectGetClass(arg$1))
  }
});
const $p_ju_Formatter__flagsConversionMismatch$1__I__I__C__E = (function($thiz, flags$2, invalidFlags$1, conversion$2) {
  throw new $c_ju_FormatFlagsConversionMismatchException($p_ju_Formatter__flagsToString__I__T($thiz, (flags$2 & invalidFlags$1)), conversion$2)
});
const $p_ju_Formatter__illegalFlags$1__I__E = (function($thiz, flags$2) {
  throw new $c_ju_IllegalFormatFlagsException($p_ju_Formatter__flagsToString__I__T($thiz, flags$2))
});
const $p_ju_Formatter__illegalFlags$2__I__E = (function($thiz, flags$3) {
  throw new $c_ju_IllegalFormatFlagsException($p_ju_Formatter__flagsToString__I__T($thiz, flags$3))
});
const $ct_ju_Formatter__jl_Appendable__ = (function($thiz, dest) {
  $thiz.ju_Formatter__f_dest = dest;
  $thiz.ju_Formatter__f_stringOutput = "";
  $thiz.ju_Formatter__f_java$util$Formatter$$closed = false;
  $thiz.ju_Formatter__f_java$util$Formatter$$lastIOException = null;
  return $thiz
});
const $ct_ju_Formatter__ = (function($thiz) {
  $ct_ju_Formatter__jl_Appendable__($thiz, null);
  return $thiz
});
class $c_ju_Formatter extends $c_O {
  constructor() {
    super();
    this.ju_Formatter__f_dest = null;
    this.ju_Formatter__f_stringOutput = null;
    this.ju_Formatter__f_java$util$Formatter$$closed = false;
    this.ju_Formatter__f_java$util$Formatter$$lastIOException = null
  };
  close__V() {
    if (((!this.ju_Formatter__f_java$util$Formatter$$closed) && (this.ju_Formatter__f_dest !== null))) {
      const x1 = this.ju_Formatter__f_dest;
      if ($is_Ljava_io_Closeable(x1)) {
        try {
          $as_Ljava_io_Closeable(x1).close__V()
        } catch (e) {
          if ((e instanceof $c_Ljava_io_IOException)) {
            const th = $as_Ljava_io_IOException(e);
            this.ju_Formatter__f_java$util$Formatter$$lastIOException = th
          } else {
            throw e
          }
        }
      }
    };
    this.ju_Formatter__f_java$util$Formatter$$closed = true
  };
  format__T__AO__ju_Formatter(format, args) {
    if (this.ju_Formatter__f_java$util$Formatter$$closed) {
      throw new $c_ju_FormatterClosedException()
    };
    let lastImplicitArgIndex = 0;
    let lastArgIndex = 0;
    const fmtLength = $uI(format.length);
    let fmtIndex = 0;
    while ((fmtIndex !== fmtLength)) {
      const fromIndex = fmtIndex;
      const nextPercentIndex = $uI(format.indexOf("%", fromIndex));
      if ((nextPercentIndex < 0)) {
        const beginIndex = fmtIndex;
        $p_ju_Formatter__sendToDest__T__V(this, $as_T(format.substring(beginIndex)));
        return this
      };
      const beginIndex$1 = fmtIndex;
      $p_ju_Formatter__sendToDest__T__V(this, $as_T(format.substring(beginIndex$1, nextPercentIndex)));
      const formatSpecifierIndex = ((1 + nextPercentIndex) | 0);
      const re = $m_ju_Formatter$().ju_Formatter$__f_java$util$Formatter$$FormatSpecifier;
      re.lastIndex = formatSpecifierIndex;
      const execResult = re.exec(format);
      if (((execResult === null) || ($uI(execResult.index) !== formatSpecifierIndex))) {
        let conversion;
        if ((formatSpecifierIndex === fmtLength)) {
          conversion = "%"
        } else {
          const endIndex = ((1 + formatSpecifierIndex) | 0);
          conversion = $as_T(format.substring(formatSpecifierIndex, endIndex))
        };
        throw new $c_ju_UnknownFormatConversionException(conversion)
      };
      fmtIndex = $uI(re.lastIndex);
      const index = (((-1) + fmtIndex) | 0);
      const conversion$2 = (65535 & $uI(format.charCodeAt(index)));
      const flags = $p_ju_Formatter__parseFlags__T__C__I(this, $as_T(execResult[2]), conversion$2);
      const width = $p_ju_Formatter__parsePositiveIntSilent__sjs_js_$bar__I__I(this, execResult[3], (-1));
      const precision = $p_ju_Formatter__parsePositiveIntSilent__sjs_js_$bar__I__I(this, execResult[4], (-1));
      let arg;
      if (((conversion$2 === 37) || (conversion$2 === 110))) {
        arg = null
      } else {
        if ((((1 & flags) !== 0) && (width < 0))) {
          throw new $c_ju_MissingFormatWidthException(("%" + execResult[0]))
        };
        let argIndex;
        if (((128 & flags) !== 0)) {
          argIndex = lastArgIndex
        } else {
          const i = $p_ju_Formatter__parsePositiveIntSilent__sjs_js_$bar__I__I(this, execResult[1], 0);
          if ((i === 0)) {
            lastImplicitArgIndex = ((1 + lastImplicitArgIndex) | 0);
            argIndex = lastImplicitArgIndex
          } else {
            argIndex = ((i < 0) ? lastArgIndex : i)
          }
        };
        if (((argIndex <= 0) || (argIndex > args.u.length))) {
          const conversionStr = $as_T(String.fromCharCode(conversion$2));
          if (($uI("bBhHsHcCdoxXeEgGfn%".indexOf(conversionStr)) < 0)) {
            throw new $c_ju_UnknownFormatConversionException(conversionStr)
          } else {
            throw new $c_ju_MissingFormatArgumentException(("%" + execResult[0]))
          }
        };
        lastArgIndex = argIndex;
        arg = args.get((((-1) + argIndex) | 0))
      };
      $p_ju_Formatter__formatArg__O__C__I__I__I__V(this, arg, conversion$2, flags, width, precision)
    };
    return this
  };
  java$util$Formatter$$formatNaNOrInfinite__I__I__D__V(flags, width, x) {
    const str = ((x !== x) ? "NaN" : ((x > 0.0) ? (((4 & flags) !== 0) ? "+Infinity" : (((8 & flags) !== 0) ? " Infinity" : "Infinity")) : (((64 & flags) !== 0) ? "(Infinity)" : "-Infinity")));
    $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V(this, flags, width, $p_ju_Formatter__applyUpperCase__I__T__T(this, flags, str))
  };
  java$util$Formatter$$formatNumericString__I__I__T__V(flags, width, str) {
    if ((($uI(str.length) >= width) && ((108 & flags) === 0))) {
      $p_ju_Formatter__sendToDest__T__V(this, $p_ju_Formatter__applyUpperCase__I__T__T(this, flags, str))
    } else if (((124 & flags) === 0)) {
      $p_ju_Formatter__formatNonNumericString__I__I__I__T__V(this, flags, width, (-1), str)
    } else {
      let x1___1;
      let x1___2;
      if (((65535 & $uI(str.charCodeAt(0))) !== 45)) {
        if (((4 & flags) !== 0)) {
          const $$x1___1 = "+";
          const $$x1___2 = str;
          x1___1 = $$x1___1;
          x1___2 = $$x1___2
        } else if (((8 & flags) !== 0)) {
          const $$x2___1 = " ";
          const $$x2___2 = str;
          x1___1 = $$x2___1;
          x1___2 = $$x2___2
        } else {
          const $$x3___1 = "";
          const $$x3___2 = str;
          x1___1 = $$x3___1;
          x1___2 = $$x3___2
        }
      } else if (((64 & flags) !== 0)) {
        const _2 = ($as_T(str.substring(1)) + ")");
        const $$x4___1 = "(";
        const $$x4___2 = _2;
        x1___1 = $$x4___1;
        x1___2 = $$x4___2
      } else {
        const _2$1 = $as_T(str.substring(1));
        const $$x5___1 = "-";
        const $$x5___2 = _2$1;
        x1___1 = $$x5___1;
        x1___2 = $$x5___2
      };
      const prefix = $as_T(x1___1);
      const rest0 = $as_T(x1___2);
      const rest = (((32 & flags) !== 0) ? $p_ju_Formatter__insertGroupingSeps__T__T(this, rest0) : rest0);
      $p_ju_Formatter__padAndSendToDest__I__I__T__T__V(this, flags, width, prefix, $p_ju_Formatter__applyUpperCase__I__T__T(this, flags, rest))
    }
  };
  toString__T() {
    if (this.ju_Formatter__f_java$util$Formatter$$closed) {
      throw new $c_ju_FormatterClosedException()
    };
    return ((this.ju_Formatter__f_dest === null) ? this.ju_Formatter__f_stringOutput : this.ju_Formatter__f_dest.jl_StringBuilder__f_java$lang$StringBuilder$$content)
  };
}
const $d_ju_Formatter = new $TypeData().initClass({
  ju_Formatter: 0
}, false, "java.util.Formatter", {
  ju_Formatter: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
});
$c_ju_Formatter.prototype.$classData = $d_ju_Formatter;
class $c_Lorg_scalajs_dom_ext_Color extends $c_O {
  constructor(r, g, b) {
    super();
    this.Lorg_scalajs_dom_ext_Color__f_r = 0;
    this.Lorg_scalajs_dom_ext_Color__f_g = 0;
    this.Lorg_scalajs_dom_ext_Color__f_b = 0;
    this.Lorg_scalajs_dom_ext_Color__f_r = r;
    this.Lorg_scalajs_dom_ext_Color__f_g = g;
    this.Lorg_scalajs_dom_ext_Color__f_b = b
  };
  toString__T() {
    return (((((("rgb(" + this.Lorg_scalajs_dom_ext_Color__f_r) + ", ") + this.Lorg_scalajs_dom_ext_Color__f_g) + ", ") + this.Lorg_scalajs_dom_ext_Color__f_b) + ")")
  };
  toHex__T() {
    const arg$macro$1 = this.Lorg_scalajs_dom_ext_Color__f_r;
    const arg$macro$2 = this.Lorg_scalajs_dom_ext_Color__f_g;
    const arg$macro$3 = this.Lorg_scalajs_dom_ext_Color__f_b;
    const $$x1 = $m_sc_StringOps$();
    const array = [arg$macro$1, arg$macro$2, arg$macro$3];
    return $$x1.format$extension__T__sci_Seq__T("#%02x%02x%02x", new $c_sjsr_WrappedVarArgs(array))
  };
  productPrefix__T() {
    return "Color"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lorg_scalajs_dom_ext_Color__f_r;
        break
      }
      case 1: {
        return this.Lorg_scalajs_dom_ext_Color__f_g;
        break
      }
      case 2: {
        return this.Lorg_scalajs_dom_ext_Color__f_b;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("Color");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const data$1 = this.Lorg_scalajs_dom_ext_Color__f_r;
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const data$2 = this.Lorg_scalajs_dom_ext_Color__f_g;
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const data$3 = this.Lorg_scalajs_dom_ext_Color__f_b;
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$4, 3)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lorg_scalajs_dom_ext_Color)) {
      const Color$1 = $as_Lorg_scalajs_dom_ext_Color(x$1);
      return (((this.Lorg_scalajs_dom_ext_Color__f_r === Color$1.Lorg_scalajs_dom_ext_Color__f_r) && (this.Lorg_scalajs_dom_ext_Color__f_g === Color$1.Lorg_scalajs_dom_ext_Color__f_g)) && (this.Lorg_scalajs_dom_ext_Color__f_b === Color$1.Lorg_scalajs_dom_ext_Color__f_b))
    } else {
      return false
    }
  };
}
function $as_Lorg_scalajs_dom_ext_Color(obj) {
  return (((obj instanceof $c_Lorg_scalajs_dom_ext_Color) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.dom.ext.Color"))
}
function $isArrayOf_Lorg_scalajs_dom_ext_Color(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_dom_ext_Color)))
}
function $asArrayOf_Lorg_scalajs_dom_ext_Color(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_dom_ext_Color(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.dom.ext.Color;", depth))
}
const $d_Lorg_scalajs_dom_ext_Color = new $TypeData().initClass({
  Lorg_scalajs_dom_ext_Color: 0
}, false, "org.scalajs.dom.ext.Color", {
  Lorg_scalajs_dom_ext_Color: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_dom_ext_Color.prototype.$classData = $d_Lorg_scalajs_dom_ext_Color;
class $c_RTLong extends $c_jl_Number {
  constructor(lo, hi) {
    super();
    this.RTLong__f_lo = 0;
    this.RTLong__f_hi = 0;
    this.RTLong__f_lo = lo;
    this.RTLong__f_hi = hi
  };
  equals__O__Z(that) {
    if ((that instanceof $c_RTLong)) {
      const x2 = $as_RTLong(that);
      return ((this.RTLong__f_lo === x2.RTLong__f_lo) && (this.RTLong__f_hi === x2.RTLong__f_hi))
    } else {
      return false
    }
  };
  hashCode__I() {
    return (this.RTLong__f_lo ^ this.RTLong__f_hi)
  };
  toString__T() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  toInt__I() {
    return this.RTLong__f_lo
  };
  toDouble__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  byteValue__B() {
    return ((this.RTLong__f_lo << 24) >> 24)
  };
  shortValue__S() {
    return ((this.RTLong__f_lo << 16) >> 16)
  };
  intValue__I() {
    return this.RTLong__f_lo
  };
  longValue__J() {
    return $uJ(this)
  };
  floatValue__F() {
    return $fround($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi))
  };
  doubleValue__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  compareTo__jl_Long__I(that) {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
  equals__RTLong__Z(b) {
    return ((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi))
  };
  notEquals__RTLong__Z(b) {
    return (!((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi)))
  };
  $less__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $less$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $greater__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  $greater$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  unary_$tilde__RTLong() {
    return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
  };
  $bar__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo | b.RTLong__f_lo), (this.RTLong__f_hi | b.RTLong__f_hi))
  };
  $amp__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo & b.RTLong__f_lo), (this.RTLong__f_hi & b.RTLong__f_hi))
  };
  $up__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo ^ b.RTLong__f_lo), (this.RTLong__f_hi ^ b.RTLong__f_hi))
  };
  $less$less__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (this.RTLong__f_lo << n) : 0), (((32 & n) === 0) ? (((((this.RTLong__f_lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (this.RTLong__f_lo << n)))
  };
  $greater$greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : ((this.RTLong__f_hi >>> n) | 0)), (((32 & n) === 0) ? ((this.RTLong__f_hi >>> n) | 0) : 0))
  };
  $greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : (this.RTLong__f_hi >> n)), (((32 & n) === 0) ? (this.RTLong__f_hi >> n) : (this.RTLong__f_hi >> 31)))
  };
  unary_$minus__RTLong() {
    const lo = this.RTLong__f_lo;
    const hi = this.RTLong__f_hi;
    return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
  };
  $plus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo + b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
  };
  $minus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo - b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
  };
  $times__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const blo = b.RTLong__f_lo;
    const a0 = (65535 & alo);
    const a1 = ((alo >>> 16) | 0);
    const b0 = (65535 & blo);
    const b1 = ((blo >>> 16) | 0);
    const a0b0 = $imul(a0, b0);
    const a1b0 = $imul(a1, b0);
    const a0b1 = $imul(a0, b1);
    const lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    const c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    const hi = (((((((($imul(alo, b.RTLong__f_hi) + $imul(this.RTLong__f_hi, blo)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    return new $c_RTLong(lo, hi)
  };
  $div__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  $percent__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  compareTo__O__I(x$1) {
    const that = $as_jl_Long(x$1);
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
}
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
const $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
class $c_s_$eq$colon$eq extends $c_s_$less$colon$less {
}
const $ct_s_Enumeration$Value__s_Enumeration__ = (function($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.s_Enumeration$Value__f_$outer = outer
  };
  $thiz.s_Enumeration$Value__f_scala$Enumeration$$outerEnum = outer;
  return $thiz
});
class $c_s_Enumeration$Value extends $c_O {
  constructor() {
    super();
    this.s_Enumeration$Value__f_scala$Enumeration$$outerEnum = null;
    this.s_Enumeration$Value__f_$outer = null
  };
  equals__O__Z(other) {
    if ((other instanceof $c_s_Enumeration$Value)) {
      const x2 = $as_s_Enumeration$Value(other);
      return ((this.s_Enumeration$Value__f_scala$Enumeration$$outerEnum === x2.s_Enumeration$Value__f_scala$Enumeration$$outerEnum) && (this.s_Enumeration$Val__f_i === x2.s_Enumeration$Val__f_i))
    } else {
      return false
    }
  };
  hashCode__I() {
    return this.s_Enumeration$Val__f_i
  };
}
function $as_s_Enumeration$Value(obj) {
  return (((obj instanceof $c_s_Enumeration$Value) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Enumeration$Value"))
}
function $isArrayOf_s_Enumeration$Value(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Enumeration$Value)))
}
function $asArrayOf_s_Enumeration$Value(obj, depth) {
  return (($isArrayOf_s_Enumeration$Value(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Enumeration$Value;", depth))
}
class $c_sc_AbstractIterator extends $c_O {
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I(xs, start) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I(this, xs, start)
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  toArray__s_reflect_ClassTag__O(evidence$2) {
    return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2)
  };
  knownSize__I() {
    return (-1)
  };
}
class $c_sc_Iterable$ extends $c_sc_IterableFactory$Delegate {
  constructor() {
    super();
    $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$())
  };
}
const $d_sc_Iterable$ = new $TypeData().initClass({
  sc_Iterable$: 0
}, false, "scala.collection.Iterable$", {
  sc_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterable$.prototype.$classData = $d_sc_Iterable$;
let $n_sc_Iterable$ = (void 0);
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$()
  };
  return $n_sc_Iterable$
}
class $c_sc_Map$ extends $c_sc_MapFactory$Delegate {
  constructor() {
    super();
    this.sc_Map$__f_scala$collection$Map$$DefaultSentinel = null;
    $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
    $n_sc_Map$ = this;
    this.sc_Map$__f_scala$collection$Map$$DefaultSentinel = $ct_O__(new $c_O())
  };
}
const $d_sc_Map$ = new $TypeData().initClass({
  sc_Map$: 0
}, false, "scala.collection.Map$", {
  sc_Map$: 1,
  sc_MapFactory$Delegate: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Map$.prototype.$classData = $d_sc_Map$;
let $n_sc_Map$ = (void 0);
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$()
  };
  return $n_sc_Map$
}
const $ct_sc_SeqFactory$Delegate__sc_SeqFactory__ = (function($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_SeqFactory$Delegate extends $c_O {
  constructor() {
    super();
    this.sc_SeqFactory$Delegate__f_delegate = null
  };
  apply__sci_Seq__sc_SeqOps(elems) {
    return $as_sc_SeqOps(this.sc_SeqFactory$Delegate__f_delegate.apply__sci_Seq__O(elems))
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return $as_sc_SeqOps(this.sc_SeqFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it))
  };
  newBuilder__scm_Builder() {
    return this.sc_SeqFactory$Delegate__f_delegate.newBuilder__scm_Builder()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sc_SeqOps(source)
  };
  apply__sci_Seq__O(elems) {
    return this.apply__sci_Seq__sc_SeqOps(elems)
  };
}
const $f_sc_SeqOps__indexOf__O__I__I = (function($thiz, elem, from) {
  return $thiz.indexWhere__F1__I__I(new $c_sjsr_AnonFunction1(((this$1, elem$1) => ((x$1$2) => $m_sr_BoxesRunTime$().equals__O__O__Z(elem$1, x$1$2)))($thiz, elem)), from)
});
const $f_sc_SeqOps__contains__O__Z = (function($thiz, elem) {
  return $thiz.exists__F1__Z(new $c_sjsr_AnonFunction1(((this$1, elem$1) => ((x$3$2) => $m_sr_BoxesRunTime$().equals__O__O__Z(x$3$2, elem$1)))($thiz, elem)))
});
const $f_sc_SeqOps__isEmpty__Z = (function($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
});
const $f_sc_SeqOps__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  const thisKnownSize = $thiz.knownSize__I();
  let knownSizeDifference;
  if ((thisKnownSize !== (-1))) {
    const thatKnownSize = that.knownSize__I();
    knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize))
  } else {
    knownSizeDifference = false
  };
  if ((!knownSizeDifference)) {
    const this$1 = $thiz.iterator__sc_Iterator();
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that)
  } else {
    return false
  }
});
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)))
}
function $as_sc_SeqOps(obj) {
  return (($is_sc_SeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqOps"))
}
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)))
}
function $asArrayOf_sc_SeqOps(obj, depth) {
  return (($isArrayOf_sc_SeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.SeqOps;", depth))
}
const $f_sc_StrictOptimizedIterableOps__map__F1__O = (function($thiz, f) {
  const b = $thiz.iterableFactory__sc_IterableFactory().newBuilder__scm_Builder();
  const it = $thiz.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    const elem = f.apply__O__O(it.next__O());
    b.addOne__O__scm_Growable(elem)
  };
  return b.result__O()
});
const $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O = (function($thiz, pred, isFlipped) {
  const b = $thiz.newSpecificBuilder__scm_Builder();
  const it = $thiz.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    const elem = it.next__O();
    if (($uZ(pred.apply__O__O(elem)) !== isFlipped)) {
      b.addOne__O__scm_Growable(elem)
    }
  };
  return b.result__O()
});
class $c_sci_Iterable$ extends $c_sc_IterableFactory$Delegate {
  constructor() {
    super();
    $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$())
  };
  from__sc_IterableOnce__sci_Iterable(it) {
    if ($is_sci_Iterable(it)) {
      const x2 = $as_sci_Iterable(it);
      return x2
    } else {
      return $as_sci_Iterable($c_sc_IterableFactory$Delegate.prototype.from__sc_IterableOnce__O.call(this, it))
    }
  };
  from__sc_IterableOnce__O(it) {
    return this.from__sc_IterableOnce__sci_Iterable(it)
  };
}
const $d_sci_Iterable$ = new $TypeData().initClass({
  sci_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", {
  sci_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Iterable$.prototype.$classData = $d_sci_Iterable$;
let $n_sci_Iterable$ = (void 0);
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$()
  };
  return $n_sci_Iterable$
}
class $c_sci_LazyList$ extends $c_O {
  constructor() {
    super();
    this.sci_LazyList$__f__empty = null;
    this.sci_LazyList$__f_scala$collection$immutable$LazyList$$anyToMarker = null;
    $n_sci_LazyList$ = this;
    const state = new $c_sjsr_AnonFunction0(((this$1) => (() => $m_sci_LazyList$State$Empty$()))(this));
    this.sci_LazyList$__f__empty = new $c_sci_LazyList(state).force__sci_LazyList();
    this.sci_LazyList$__f_scala$collection$immutable$LazyList$$anyToMarker = new $c_sjsr_AnonFunction1(((this$2) => ((x$10$2) => $m_sr_Statics$PFMarker$()))(this))
  };
  apply__sci_Seq__O(elems) {
    return this.from__sc_IterableOnce__sci_LazyList(elems)
  };
  scala$collection$immutable$LazyList$$filterImpl__sci_LazyList__F1__Z__sci_LazyList(ll, p, isFlipped) {
    const restRef = new $c_sr_ObjectRef(ll);
    const state = new $c_sjsr_AnonFunction0(((this$2, restRef$1, p$1, isFlipped$1) => (() => {
      let elem = null;
      let found = false;
      let rest = $as_sci_LazyList(restRef$1.sr_ObjectRef__f_elem);
      while (((!found) && (!rest.isEmpty__Z()))) {
        const this$3 = rest;
        elem = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        found = ($uZ(p$1.apply__O__O(elem)) !== isFlipped$1);
        const this$4 = rest;
        rest = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        restRef$1.sr_ObjectRef__f_elem = rest
      };
      if (found) {
        $m_sci_LazyList$();
        const hd = elem;
        const tl = $m_sci_LazyList$().scala$collection$immutable$LazyList$$filterImpl__sci_LazyList__F1__Z__sci_LazyList(rest, p$1, isFlipped$1);
        return new $c_sci_LazyList$State$Cons(hd, tl)
      } else {
        return $m_sci_LazyList$State$Empty$()
      }
    }))(this, restRef, p, isFlipped));
    return new $c_sci_LazyList(state)
  };
  scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(ll, n) {
    const restRef = new $c_sr_ObjectRef(ll);
    const iRef = new $c_sr_IntRef(n);
    const state = new $c_sjsr_AnonFunction0(((this$3, restRef$1, iRef$1) => (() => {
      let rest = $as_sci_LazyList(restRef$1.sr_ObjectRef__f_elem);
      let i = iRef$1.sr_IntRef__f_elem;
      while (((i > 0) && (!rest.isEmpty__Z()))) {
        const this$4 = rest;
        rest = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        restRef$1.sr_ObjectRef__f_elem = rest;
        i = (((-1) + i) | 0);
        iRef$1.sr_IntRef__f_elem = i
      };
      return rest.scala$collection$immutable$LazyList$$state__sci_LazyList$State()
    }))(this, restRef, iRef));
    return new $c_sci_LazyList(state)
  };
  from__sc_IterableOnce__sci_LazyList(coll) {
    if ((coll instanceof $c_sci_LazyList)) {
      const x2 = $as_sci_LazyList(coll);
      return x2
    } else if ((coll.knownSize__I() === 0)) {
      return this.sci_LazyList$__f__empty
    } else {
      const state = new $c_sjsr_AnonFunction0(((this$1, coll$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(coll$1.iterator__sc_Iterator())))(this, coll));
      return new $c_sci_LazyList(state)
    }
  };
  scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(it, suffix) {
    if (it.hasNext__Z()) {
      const hd = it.next__O();
      const state = new $c_sjsr_AnonFunction0(((this$1, it$1, suffix$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(it$1, suffix$1)))(this, it, suffix));
      const tl = new $c_sci_LazyList(state);
      return new $c_sci_LazyList$State$Cons(hd, tl)
    } else {
      return $as_sci_LazyList$State(suffix.apply__O())
    }
  };
  scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it) {
    if (it.hasNext__Z()) {
      const hd = it.next__O();
      const state = new $c_sjsr_AnonFunction0(((this$1, it$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it$1)))(this, it));
      const tl = new $c_sci_LazyList(state);
      return new $c_sci_LazyList$State$Cons(hd, tl)
    } else {
      return $m_sci_LazyList$State$Empty$()
    }
  };
  newBuilder__scm_Builder() {
    return new $c_sci_LazyList$LazyBuilder()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_LazyList(source)
  };
}
const $d_sci_LazyList$ = new $TypeData().initClass({
  sci_LazyList$: 0
}, false, "scala.collection.immutable.LazyList$", {
  sci_LazyList$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$.prototype.$classData = $d_sci_LazyList$;
let $n_sci_LazyList$ = (void 0);
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$()
  };
  return $n_sci_LazyList$
}
class $c_sci_Stream$ extends $c_O {
  apply__sci_Seq__O(elems) {
    return this.from__sc_IterableOnce__sci_Stream(elems)
  };
  from__sc_IterableOnce__sci_Stream(coll) {
    if ((coll instanceof $c_sci_Stream)) {
      const x2 = $as_sci_Stream(coll);
      return x2
    } else {
      return this.fromIterator__sc_Iterator__sci_Stream(coll.iterator__sc_Iterator())
    }
  };
  fromIterator__sc_Iterator__sci_Stream(it) {
    return (it.hasNext__Z() ? new $c_sci_Stream$Cons(it.next__O(), new $c_sjsr_AnonFunction0(((this$1, it$1) => (() => $m_sci_Stream$().fromIterator__sc_Iterator__sci_Stream(it$1)))(this, it))) : $m_sci_Stream$Empty$())
  };
  newBuilder__scm_Builder() {
    const this$3 = new $c_scm_ArrayBuffer$$anon$1();
    const f = new $c_sjsr_AnonFunction1(((this$2) => ((array$2) => {
      const array = $as_scm_ArrayBuffer(array$2);
      return $m_sci_Stream$().from__sc_IterableOnce__sci_Stream(array)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$3, f)
  };
  filteredTail__sci_Stream__F1__Z__sci_Stream(stream, p, isFlipped) {
    const hd = stream.head__O();
    const tl = new $c_sjsr_AnonFunction0(((this$1, stream$1, p$1, isFlipped$1) => (() => $as_sci_Stream(stream$1.tail__O()).filterImpl__F1__Z__sci_Stream(p$1, isFlipped$1)))(this, stream, p, isFlipped));
    return new $c_sci_Stream$Cons(hd, tl)
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Stream(source)
  };
}
const $d_sci_Stream$ = new $TypeData().initClass({
  sci_Stream$: 0
}, false, "scala.collection.immutable.Stream$", {
  sci_Stream$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$.prototype.$classData = $d_sci_Stream$;
let $n_sci_Stream$ = (void 0);
function $m_sci_Stream$() {
  if ((!$n_sci_Stream$)) {
    $n_sci_Stream$ = new $c_sci_Stream$()
  };
  return $n_sci_Stream$
}
class $c_sci_WrappedString$ extends $c_O {
  constructor() {
    super();
    this.sci_WrappedString$__f_empty = null;
    $n_sci_WrappedString$ = this;
    this.sci_WrappedString$__f_empty = new $c_sci_WrappedString("")
  };
  fromSpecific__sc_IterableOnce__sci_WrappedString(it) {
    const b = this.newBuilder__scm_Builder();
    const s = it.knownSize__I();
    if ((s >= 0)) {
      b.sizeHint__I__V(s)
    };
    b.addAll__sc_IterableOnce__scm_Growable(it);
    return $as_sci_WrappedString(b.result__O())
  };
  newBuilder__scm_Builder() {
    const this$2 = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
    const f = new $c_sjsr_AnonFunction1(((this$1) => ((x$2) => {
      const x = $as_T(x$2);
      return new $c_sci_WrappedString(x)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$2, f)
  };
}
const $d_sci_WrappedString$ = new $TypeData().initClass({
  sci_WrappedString$: 0
}, false, "scala.collection.immutable.WrappedString$", {
  sci_WrappedString$: 1,
  O: 1,
  sc_SpecificIterableFactory: 1,
  sc_Factory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_WrappedString$.prototype.$classData = $d_sci_WrappedString$;
let $n_sci_WrappedString$ = (void 0);
function $m_sci_WrappedString$() {
  if ((!$n_sci_WrappedString$)) {
    $n_sci_WrappedString$ = new $c_sci_WrappedString$()
  };
  return $n_sci_WrappedString$
}
class $c_scm_Builder$$anon$1 extends $c_O {
  constructor(outer, f$1) {
    super();
    this.scm_Builder$$anon$1__f_$outer = null;
    this.scm_Builder$$anon$1__f_f$1 = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.scm_Builder$$anon$1__f_$outer = outer
    };
    this.scm_Builder$$anon$1__f_f$1 = f$1
  };
  addOne__O__scm_Builder$$anon$1(x) {
    const this$1 = this.scm_Builder$$anon$1__f_$outer;
    this$1.addOne__O__scm_Growable(x);
    return this
  };
  addAll__sc_IterableOnce__scm_Builder$$anon$1(xs) {
    const this$1 = this.scm_Builder$$anon$1__f_$outer;
    this$1.addAll__sc_IterableOnce__scm_Growable(xs);
    return this
  };
  sizeHint__I__V(size) {
    this.scm_Builder$$anon$1__f_$outer.sizeHint__I__V(size)
  };
  result__O() {
    return this.scm_Builder$$anon$1__f_f$1.apply__O__O(this.scm_Builder$$anon$1__f_$outer.result__O())
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_Builder$$anon$1(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_Builder$$anon$1(elem)
  };
}
const $d_scm_Builder$$anon$1 = new $TypeData().initClass({
  scm_Builder$$anon$1: 0
}, false, "scala.collection.mutable.Builder$$anon$1", {
  scm_Builder$$anon$1: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_Builder$$anon$1.prototype.$classData = $d_scm_Builder$$anon$1;
const $ct_scm_GrowableBuilder__scm_Growable__ = (function($thiz, elems) {
  $thiz.scm_GrowableBuilder__f_elems = elems;
  return $thiz
});
class $c_scm_GrowableBuilder extends $c_O {
  constructor() {
    super();
    this.scm_GrowableBuilder__f_elems = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  addOne__O__scm_GrowableBuilder(elem) {
    const this$1 = this.scm_GrowableBuilder__f_elems;
    this$1.addOne__O__scm_Growable(elem);
    return this
  };
  addAll__sc_IterableOnce__scm_GrowableBuilder(xs) {
    this.scm_GrowableBuilder__f_elems.addAll__sc_IterableOnce__scm_Growable(xs);
    return this
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_GrowableBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_GrowableBuilder(elem)
  };
  result__O() {
    return this.scm_GrowableBuilder__f_elems
  };
}
const $d_scm_GrowableBuilder = new $TypeData().initClass({
  scm_GrowableBuilder: 0
}, false, "scala.collection.mutable.GrowableBuilder", {
  scm_GrowableBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_GrowableBuilder.prototype.$classData = $d_scm_GrowableBuilder;
class $c_scm_Iterable$ extends $c_sc_IterableFactory$Delegate {
  constructor() {
    super();
    $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_scm_ArrayBuffer$())
  };
}
const $d_scm_Iterable$ = new $TypeData().initClass({
  scm_Iterable$: 0
}, false, "scala.collection.mutable.Iterable$", {
  scm_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_Iterable$.prototype.$classData = $d_scm_Iterable$;
let $n_scm_Iterable$ = (void 0);
function $m_scm_Iterable$() {
  if ((!$n_scm_Iterable$)) {
    $n_scm_Iterable$ = new $c_scm_Iterable$()
  };
  return $n_scm_Iterable$
}
const $ct_Lbon_jo_phy_Phy$PointDynamicImpl__Lbon_jo_phy_Phy$P__Lbon_jo_phy_Phy$V__Lbon_jo_phy_Phy$A__ = (function($thiz, p, v, a) {
  $thiz.Lbon_jo_phy_Phy$PointDynamicImpl__f_p = p;
  $thiz.Lbon_jo_phy_Phy$PointDynamicImpl__f_v = v;
  $thiz.Lbon_jo_phy_Phy$PointDynamicImpl__f_a = a;
  return $thiz
});
class $c_Lbon_jo_phy_Phy$PointDynamicImpl extends $c_O {
  constructor() {
    super();
    this.Lbon_jo_phy_Phy$PointDynamicImpl__f_p = null;
    this.Lbon_jo_phy_Phy$PointDynamicImpl__f_v = null;
    this.Lbon_jo_phy_Phy$PointDynamicImpl__f_a = null
  };
  addDt__F__V(t) {
    const newV = $as_Lbon_jo_phy_Phy$V(this.Lbon_jo_phy_Phy$PointDynamicImpl__f_a.$times__F__Lbon_jo_phy_Phy$V(t).$plus__Lbon_jo_phy_Phy$XYT__Lbon_jo_phy_Phy$XYT(this.Lbon_jo_phy_Phy$PointDynamicImpl__f_v));
    const newP = $as_Lbon_jo_phy_Phy$P(newV.$times__F__Lbon_jo_phy_Phy$P(t).$plus__Lbon_jo_phy_Phy$XYT__Lbon_jo_phy_Phy$XYT(this.Lbon_jo_phy_Phy$PointDynamicImpl__f_p));
    this.Lbon_jo_phy_Phy$PointDynamicImpl__f_v = newV;
    this.Lbon_jo_phy_Phy$PointDynamicImpl__f_p = newP
  };
  productPrefix__T() {
    return "PointDynamicImpl"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lbon_jo_phy_Phy$PointDynamicImpl__f_p;
        break
      }
      case 1: {
        return this.Lbon_jo_phy_Phy$PointDynamicImpl__f_v;
        break
      }
      case 2: {
        return this.Lbon_jo_phy_Phy$PointDynamicImpl__f_a;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lbon_jo_phy_Phy$PointDynamicImpl)) {
      const PointDynamicImpl$1 = $as_Lbon_jo_phy_Phy$PointDynamicImpl(x$1);
      const x = this.Lbon_jo_phy_Phy$PointDynamicImpl__f_p;
      const x$2 = PointDynamicImpl$1.Lbon_jo_phy_Phy$PointDynamicImpl__f_p;
      let $$x1;
      if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
        const x$3 = this.Lbon_jo_phy_Phy$PointDynamicImpl__f_v;
        const x$4 = PointDynamicImpl$1.Lbon_jo_phy_Phy$PointDynamicImpl__f_v;
        $$x1 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
      } else {
        $$x1 = false
      };
      if ($$x1) {
        const x$5 = this.Lbon_jo_phy_Phy$PointDynamicImpl__f_a;
        const x$6 = PointDynamicImpl$1.Lbon_jo_phy_Phy$PointDynamicImpl__f_a;
        return ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $as_Lbon_jo_phy_Phy$PointDynamicImpl(obj) {
  return (((obj instanceof $c_Lbon_jo_phy_Phy$PointDynamicImpl) || (obj === null)) ? obj : $throwClassCastException(obj, "bon.jo.phy.Phy$PointDynamicImpl"))
}
function $isArrayOf_Lbon_jo_phy_Phy$PointDynamicImpl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lbon_jo_phy_Phy$PointDynamicImpl)))
}
function $asArrayOf_Lbon_jo_phy_Phy$PointDynamicImpl(obj, depth) {
  return (($isArrayOf_Lbon_jo_phy_Phy$PointDynamicImpl(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lbon.jo.phy.Phy$PointDynamicImpl;", depth))
}
const $d_Lbon_jo_phy_Phy$PointDynamicImpl = new $TypeData().initClass({
  Lbon_jo_phy_Phy$PointDynamicImpl: 0
}, false, "bon.jo.phy.Phy$PointDynamicImpl", {
  Lbon_jo_phy_Phy$PointDynamicImpl: 1,
  O: 1,
  Lbon_jo_phy_Phy$PointDynamic: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lbon_jo_phy_Phy$PointDynamicImpl.prototype.$classData = $d_Lbon_jo_phy_Phy$PointDynamicImpl;
const $ct_jl_ArithmeticException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
}
const $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
const $ct_jl_ClassCastException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
}
function $as_jl_ClassCastException(obj) {
  return (((obj instanceof $c_jl_ClassCastException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ClassCastException"))
}
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ClassCastException)))
}
function $asArrayOf_jl_ClassCastException(obj, depth) {
  return (($isArrayOf_jl_ClassCastException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ClassCastException;", depth))
}
const $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
const $ct_jl_IllegalArgumentException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_IllegalArgumentException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
const $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
const $ct_jl_IllegalStateException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
}
const $d_jl_IllegalStateException = new $TypeData().initClass({
  jl_IllegalStateException: 0
}, false, "java.lang.IllegalStateException", {
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalStateException.prototype.$classData = $d_jl_IllegalStateException;
const $ct_jl_IndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
function $as_jl_IndexOutOfBoundsException(obj) {
  return (((obj instanceof $c_jl_IndexOutOfBoundsException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.IndexOutOfBoundsException"))
}
function $isArrayOf_jl_IndexOutOfBoundsException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_IndexOutOfBoundsException)))
}
function $asArrayOf_jl_IndexOutOfBoundsException(obj, depth) {
  return (($isArrayOf_jl_IndexOutOfBoundsException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.IndexOutOfBoundsException;", depth))
}
const $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
const $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
const $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
class $c_jl_SecurityException {
}
function $as_jl_SecurityException(obj) {
  return (((obj instanceof $c_jl_SecurityException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.SecurityException"))
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)))
}
function $asArrayOf_jl_SecurityException(obj, depth) {
  return (($isArrayOf_jl_SecurityException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth))
}
const $ct_jl_UnsupportedOperationException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
const $ct_jl_UnsupportedOperationException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
}
const $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
const $ct_ju_NoSuchElementException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_ju_NoSuchElementException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
const $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
const $ct_Lorg_scalajs_linker_runtime_UndefinedBehaviorError__jl_Throwable__ = (function($thiz, cause) {
  const message = ((cause === null) ? null : cause.toString__T());
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, message, cause, true, true);
  return $thiz
});
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
}
const $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
class $c_s_$less$colon$less$$anon$1 extends $c_s_$eq$colon$eq {
  apply__O__O(x) {
    return x
  };
  toString__T() {
    return "generalized constraint"
  };
}
const $d_s_$less$colon$less$$anon$1 = new $TypeData().initClass({
  s_$less$colon$less$$anon$1: 0
}, false, "scala.$less$colon$less$$anon$1", {
  s_$less$colon$less$$anon$1: 1,
  s_$eq$colon$eq: 1,
  s_$less$colon$less: 1,
  O: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$$anon$1.prototype.$classData = $d_s_$less$colon$less$$anon$1;
class $c_s_Enumeration$Val extends $c_s_Enumeration$Value {
  constructor(outer, i, name) {
    super();
    this.s_Enumeration$Val__f_i = 0;
    this.s_Enumeration$Val__f_name = null;
    this.s_Enumeration$Val__f_i = i;
    this.s_Enumeration$Val__f_name = name;
    $ct_s_Enumeration$Value__s_Enumeration__(this, outer);
    const this$1 = outer.s_Enumeration__f_scala$Enumeration$$vmap;
    const assertion = (!this$1.contains__O__Z(i));
    if ((!assertion)) {
      throw new $c_jl_AssertionError((("assertion failed: " + "Duplicate id: ") + this.s_Enumeration$Val__f_i))
    };
    const this$3 = outer.s_Enumeration__f_scala$Enumeration$$vmap;
    $p_scm_HashMap__put0__O__O__Z__s_Some(this$3, i, this, false);
    outer.s_Enumeration__f_scala$Enumeration$$vsetDefined = false;
    outer.s_Enumeration__f_nextId = ((1 + i) | 0);
    if ((outer.s_Enumeration__f_nextId > outer.s_Enumeration__f_scala$Enumeration$$topId)) {
      outer.s_Enumeration__f_scala$Enumeration$$topId = outer.s_Enumeration__f_nextId
    };
    if ((i < outer.s_Enumeration__f_scala$Enumeration$$bottomId)) {
      outer.s_Enumeration__f_scala$Enumeration$$bottomId = i
    }
  };
  toString__T() {
    return ((this.s_Enumeration$Val__f_name !== null) ? this.s_Enumeration$Val__f_name : (((("<Unknown name for enum field #" + this.s_Enumeration$Val__f_i) + " of class ") + $objectGetClass(this)) + ">"))
  };
}
const $d_s_Enumeration$Val = new $TypeData().initClass({
  s_Enumeration$Val: 0
}, false, "scala.Enumeration$Val", {
  s_Enumeration$Val: 1,
  s_Enumeration$Value: 1,
  O: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Enumeration$Val.prototype.$classData = $d_s_Enumeration$Val;
const $p_s_MatchError__objString$lzycompute__T = (function($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
});
const $p_s_MatchError__objString__T = (function($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
});
const $p_s_MatchError__ofClass$1__T = (function($thiz) {
  const this$1 = $thiz.s_MatchError__f_obj;
  return ("of class " + $objectGetClass(this$1).getName__T())
});
const $p_s_MatchError__liftedTree1$1__T = (function($thiz) {
  try {
    return ((($dp_toString__T($thiz.s_MatchError__f_obj) + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
    if ((e$2 !== null)) {
      return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
    } else {
      throw e
    }
  }
});
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
const $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
class $c_s_Option extends $c_O {
  isEmpty__Z() {
    return (this === $m_s_None$())
  };
  knownSize__I() {
    return (this.isEmpty__Z() ? 0 : 1)
  };
  iterator__sc_Iterator() {
    if (this.isEmpty__Z()) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
    } else {
      $m_sc_Iterator$();
      const a = this.get__O();
      return new $c_sc_Iterator$$anon$20(a)
    }
  };
}
class $c_s_Product$$anon$1 extends $c_sc_AbstractIterator {
  constructor(outer) {
    super();
    this.s_Product$$anon$1__f_c = 0;
    this.s_Product$$anon$1__f_cmax = 0;
    this.s_Product$$anon$1__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.s_Product$$anon$1__f_$outer = outer
    };
    this.s_Product$$anon$1__f_c = 0;
    this.s_Product$$anon$1__f_cmax = outer.productArity__I()
  };
  hasNext__Z() {
    return (this.s_Product$$anon$1__f_c < this.s_Product$$anon$1__f_cmax)
  };
  next__O() {
    const result = this.s_Product$$anon$1__f_$outer.productElement__I__O(this.s_Product$$anon$1__f_c);
    this.s_Product$$anon$1__f_c = ((1 + this.s_Product$$anon$1__f_c) | 0);
    return result
  };
}
const $d_s_Product$$anon$1 = new $TypeData().initClass({
  s_Product$$anon$1: 0
}, false, "scala.Product$$anon$1", {
  s_Product$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_s_Product$$anon$1.prototype.$classData = $d_s_Product$$anon$1;
class $c_T2 extends $c_O {
  constructor(_1, _2) {
    super();
    this.T2__f__1 = null;
    this.T2__f__2 = null;
    this.T2__f__1 = _1;
    this.T2__f__2 = _2
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(n) {
    return $f_s_Product2__productElement__I__O(this, n)
  };
  _1__O() {
    return this.T2__f__1
  };
  _2__O() {
    return this.T2__f__2
  };
  toString__T() {
    return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")")
  };
  productPrefix__T() {
    return "Tuple2"
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_T2)) {
      const Tuple2$1 = $as_T2(x$1);
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, Tuple2$1.T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, Tuple2$1.T2__f__2))
    } else {
      return false
    }
  };
}
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
const $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
const $f_sc_IndexedSeqOps__drop__I__O = (function($thiz, n) {
  return $thiz.fromSpecific__sc_IterableOnce__O(new $c_sc_IndexedSeqView$Drop($thiz, n))
});
const $f_sc_IndexedSeqOps__map__F1__O = (function($thiz, f) {
  return $thiz.iterableFactory__sc_IterableFactory().from__sc_IterableOnce__O(new $c_sc_IndexedSeqView$Map($thiz, f))
});
const $f_sc_Iterable__toString__T = (function($thiz) {
  const start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")")
});
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterable)))
}
function $as_sc_Iterable(obj) {
  return (($is_sc_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterable"))
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterable)))
}
function $asArrayOf_sc_Iterable(obj, depth) {
  return (($isArrayOf_sc_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterable;", depth))
}
class $c_sc_Iterator$$anon$19 extends $c_sc_AbstractIterator {
  hasNext__Z() {
    return false
  };
  next__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator")
  };
  knownSize__I() {
    return 0
  };
  next__O() {
    this.next__E()
  };
}
const $d_sc_Iterator$$anon$19 = new $TypeData().initClass({
  sc_Iterator$$anon$19: 0
}, false, "scala.collection.Iterator$$anon$19", {
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$19.prototype.$classData = $d_sc_Iterator$$anon$19;
class $c_sc_Iterator$$anon$20 extends $c_sc_AbstractIterator {
  constructor(a$1) {
    super();
    this.sc_Iterator$$anon$20__f_consumed = false;
    this.sc_Iterator$$anon$20__f_a$1 = null;
    this.sc_Iterator$$anon$20__f_a$1 = a$1;
    this.sc_Iterator$$anon$20__f_consumed = false
  };
  hasNext__Z() {
    return (!this.sc_Iterator$$anon$20__f_consumed)
  };
  next__O() {
    if (this.sc_Iterator$$anon$20__f_consumed) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      this.sc_Iterator$$anon$20__f_consumed = true;
      return this.sc_Iterator$$anon$20__f_a$1
    }
  };
}
const $d_sc_Iterator$$anon$20 = new $TypeData().initClass({
  sc_Iterator$$anon$20: 0
}, false, "scala.collection.Iterator$$anon$20", {
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$20.prototype.$classData = $d_sc_Iterator$$anon$20;
class $c_sc_Iterator$$anon$6 extends $c_sc_AbstractIterator {
  constructor(outer, p$1, isFlipped$1) {
    super();
    this.sc_Iterator$$anon$6__f_hd = null;
    this.sc_Iterator$$anon$6__f_hdDefined = false;
    this.sc_Iterator$$anon$6__f_$outer = null;
    this.sc_Iterator$$anon$6__f_p$1 = null;
    this.sc_Iterator$$anon$6__f_isFlipped$1 = false;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sc_Iterator$$anon$6__f_$outer = outer
    };
    this.sc_Iterator$$anon$6__f_p$1 = p$1;
    this.sc_Iterator$$anon$6__f_isFlipped$1 = isFlipped$1;
    this.sc_Iterator$$anon$6__f_hdDefined = false
  };
  hasNext__Z() {
    if (this.sc_Iterator$$anon$6__f_hdDefined) {
      return true
    } else {
      do {
        if ((!this.sc_Iterator$$anon$6__f_$outer.hasNext__Z())) {
          return false
        };
        this.sc_Iterator$$anon$6__f_hd = this.sc_Iterator$$anon$6__f_$outer.next__O()
      } while (($uZ(this.sc_Iterator$$anon$6__f_p$1.apply__O__O(this.sc_Iterator$$anon$6__f_hd)) === this.sc_Iterator$$anon$6__f_isFlipped$1));
      this.sc_Iterator$$anon$6__f_hdDefined = true;
      return true
    }
  };
  next__O() {
    if (this.hasNext__Z()) {
      this.sc_Iterator$$anon$6__f_hdDefined = false;
      return this.sc_Iterator$$anon$6__f_hd
    } else {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
}
const $d_sc_Iterator$$anon$6 = new $TypeData().initClass({
  sc_Iterator$$anon$6: 0
}, false, "scala.collection.Iterator$$anon$6", {
  sc_Iterator$$anon$6: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$6.prototype.$classData = $d_sc_Iterator$$anon$6;
class $c_sc_Iterator$$anon$9 extends $c_sc_AbstractIterator {
  constructor(outer, f$2) {
    super();
    this.sc_Iterator$$anon$9__f_$outer = null;
    this.sc_Iterator$$anon$9__f_f$2 = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sc_Iterator$$anon$9__f_$outer = outer
    };
    this.sc_Iterator$$anon$9__f_f$2 = f$2
  };
  knownSize__I() {
    return this.sc_Iterator$$anon$9__f_$outer.knownSize__I()
  };
  hasNext__Z() {
    return this.sc_Iterator$$anon$9__f_$outer.hasNext__Z()
  };
  next__O() {
    return this.sc_Iterator$$anon$9__f_f$2.apply__O__O(this.sc_Iterator$$anon$9__f_$outer.next__O())
  };
}
const $d_sc_Iterator$$anon$9 = new $TypeData().initClass({
  sc_Iterator$$anon$9: 0
}, false, "scala.collection.Iterator$$anon$9", {
  sc_Iterator$$anon$9: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$9.prototype.$classData = $d_sc_Iterator$$anon$9;
const $p_sc_Iterator$ConcatIterator__advance__Z = (function($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_tail === null)) {
      $thiz.sc_Iterator$ConcatIterator__f_current = null;
      $thiz.sc_Iterator$ConcatIterator__f_last = null;
      return false
    } else {
      $thiz.sc_Iterator$ConcatIterator__f_current = $thiz.sc_Iterator$ConcatIterator__f_tail.headIterator__sc_Iterator();
      $thiz.sc_Iterator$ConcatIterator__f_tail = $thiz.sc_Iterator$ConcatIterator__f_tail.sc_Iterator$ConcatIteratorCell__f_tail;
      $p_sc_Iterator$ConcatIterator__merge__V($thiz);
      if ($thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
        return true
      } else if ((($thiz.sc_Iterator$ConcatIterator__f_current !== null) && $thiz.sc_Iterator$ConcatIterator__f_current.hasNext__Z())) {
        $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
        return true
      }
    }
  }
});
const $p_sc_Iterator$ConcatIterator__merge__V = (function($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_current instanceof $c_sc_Iterator$ConcatIterator)) {
      const c = $as_sc_Iterator$ConcatIterator($thiz.sc_Iterator$ConcatIterator__f_current);
      $thiz.sc_Iterator$ConcatIterator__f_current = c.sc_Iterator$ConcatIterator__f_current;
      $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = c.sc_Iterator$ConcatIterator__f_currentHasNextChecked;
      if ((c.sc_Iterator$ConcatIterator__f_tail !== null)) {
        c.sc_Iterator$ConcatIterator__f_last.sc_Iterator$ConcatIteratorCell__f_tail = $thiz.sc_Iterator$ConcatIterator__f_tail;
        $thiz.sc_Iterator$ConcatIterator__f_tail = c.sc_Iterator$ConcatIterator__f_tail
      };
      continue
    };
    break
  }
});
class $c_sc_Iterator$ConcatIterator extends $c_sc_AbstractIterator {
  constructor(current) {
    super();
    this.sc_Iterator$ConcatIterator__f_current = null;
    this.sc_Iterator$ConcatIterator__f_tail = null;
    this.sc_Iterator$ConcatIterator__f_last = null;
    this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
    this.sc_Iterator$ConcatIterator__f_current = current;
    this.sc_Iterator$ConcatIterator__f_tail = null;
    this.sc_Iterator$ConcatIterator__f_last = null;
    this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false
  };
  hasNext__Z() {
    if (this.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
      return true
    } else if ((this.sc_Iterator$ConcatIterator__f_current !== null)) {
      if (this.sc_Iterator$ConcatIterator__f_current.hasNext__Z()) {
        this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
        return true
      } else {
        return $p_sc_Iterator$ConcatIterator__advance__Z(this)
      }
    } else {
      return false
    }
  };
  next__O() {
    if (this.hasNext__Z()) {
      this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
      return this.sc_Iterator$ConcatIterator__f_current.next__O()
    } else {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
  concat__F0__sc_Iterator(that) {
    const c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
    if ((this.sc_Iterator$ConcatIterator__f_tail === null)) {
      this.sc_Iterator$ConcatIterator__f_tail = c;
      this.sc_Iterator$ConcatIterator__f_last = c
    } else {
      this.sc_Iterator$ConcatIterator__f_last.sc_Iterator$ConcatIteratorCell__f_tail = c;
      this.sc_Iterator$ConcatIterator__f_last = c
    };
    if ((this.sc_Iterator$ConcatIterator__f_current === null)) {
      this.sc_Iterator$ConcatIterator__f_current = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
    };
    return this
  };
}
function $as_sc_Iterator$ConcatIterator(obj) {
  return (((obj instanceof $c_sc_Iterator$ConcatIterator) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator$ConcatIterator"))
}
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator$ConcatIterator)))
}
function $asArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (($isArrayOf_sc_Iterator$ConcatIterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator$ConcatIterator;", depth))
}
const $d_sc_Iterator$ConcatIterator = new $TypeData().initClass({
  sc_Iterator$ConcatIterator: 0
}, false, "scala.collection.Iterator$ConcatIterator", {
  sc_Iterator$ConcatIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$ConcatIterator.prototype.$classData = $d_sc_Iterator$ConcatIterator;
class $c_sc_LinearSeqIterator extends $c_sc_AbstractIterator {
  constructor(coll) {
    super();
    this.sc_LinearSeqIterator__f_coll = null;
    this.sc_LinearSeqIterator__f_these = null;
    this.sc_LinearSeqIterator__f_coll = coll;
    this.sc_LinearSeqIterator__f_these = new $c_sc_LinearSeqIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1) => (() => this$1.sc_LinearSeqIterator__f_coll))(this)))
  };
  hasNext__Z() {
    const this$1 = this.sc_LinearSeqIterator__f_these.v__sc_LinearSeqOps();
    return (!this$1.isEmpty__Z())
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      const cur = this.sc_LinearSeqIterator__f_these.v__sc_LinearSeqOps();
      const result = cur.head__O();
      this.sc_LinearSeqIterator__f_these = new $c_sc_LinearSeqIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1, cur$1) => (() => $as_sc_LinearSeq(cur$1.tail__O())))(this, cur)));
      return result
    }
  };
}
const $d_sc_LinearSeqIterator = new $TypeData().initClass({
  sc_LinearSeqIterator: 0
}, false, "scala.collection.LinearSeqIterator", {
  sc_LinearSeqIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_LinearSeqIterator.prototype.$classData = $d_sc_LinearSeqIterator;
const $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I = (function($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      const temp$i = ((1 + i) | 0);
      const temp$xs = $as_sc_LinearSeq(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
});
const $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z = (function($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      const this$1 = a;
      let $$x1;
      if ((!this$1.isEmpty__Z())) {
        const this$2 = b;
        $$x1 = (!this$2.isEmpty__Z())
      } else {
        $$x1 = false
      };
      if (($$x1 && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        const temp$a = $as_sc_LinearSeq(a.tail__O());
        const temp$b = $as_sc_LinearSeq(b.tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (a.isEmpty__Z() && b.isEmpty__Z())
      }
    }
  }
});
const $f_sc_LinearSeqOps__iterator__sc_Iterator = (function($thiz) {
  return (($thiz.knownSize__I() === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_LinearSeqIterator($thiz))
});
const $f_sc_LinearSeqOps__length__I = (function($thiz) {
  let these = $as_sc_LinearSeq($thiz);
  let len = 0;
  while (true) {
    const this$1 = these;
    if ((!this$1.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sc_LinearSeq(these.tail__O())
    } else {
      break
    }
  };
  return len
});
const $f_sc_LinearSeqOps__lengthCompare__I__I = (function($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $as_sc_LinearSeq($thiz), len))
});
const $f_sc_LinearSeqOps__apply__I__O = (function($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  const skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if (skipped.isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return skipped.head__O()
});
const $f_sc_LinearSeqOps__forall__F1__Z = (function($thiz, p) {
  let these = $as_sc_LinearSeq($thiz);
  while ((!these.isEmpty__Z())) {
    if ((!$uZ(p.apply__O__O(these.head__O())))) {
      return false
    };
    these = $as_sc_LinearSeq(these.tail__O())
  };
  return true
});
const $f_sc_LinearSeqOps__exists__F1__Z = (function($thiz, p) {
  let these = $as_sc_LinearSeq($thiz);
  while ((!these.isEmpty__Z())) {
    if ($uZ(p.apply__O__O(these.head__O()))) {
      return true
    };
    these = $as_sc_LinearSeq(these.tail__O())
  };
  return false
});
const $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    const x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2)
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that)
  }
});
const $f_sc_LinearSeqOps__indexWhere__F1__I__I = (function($thiz, p, from) {
  let i = ((from > 0) ? from : 0);
  let these = $as_sc_LinearSeq($thiz.drop__I__O(from));
  while (true) {
    const this$3 = these;
    if ((!this$3.isEmpty__Z())) {
      if ($uZ(p.apply__O__O(these.head__O()))) {
        return i
      };
      i = ((1 + i) | 0);
      these = $as_sc_LinearSeq(these.tail__O())
    } else {
      break
    }
  };
  return (-1)
});
function $is_sc_LinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqOps)))
}
function $as_sc_LinearSeqOps(obj) {
  return (($is_sc_LinearSeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqOps"))
}
function $isArrayOf_sc_LinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqOps)))
}
function $asArrayOf_sc_LinearSeqOps(obj, depth) {
  return (($isArrayOf_sc_LinearSeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqOps;", depth))
}
class $c_sc_Seq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Seq$())
  };
}
const $d_sc_Seq$ = new $TypeData().initClass({
  sc_Seq$: 0
}, false, "scala.collection.Seq$", {
  sc_Seq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Seq$.prototype.$classData = $d_sc_Seq$;
let $n_sc_Seq$ = (void 0);
function $m_sc_Seq$() {
  if ((!$n_sc_Seq$)) {
    $n_sc_Seq$ = new $c_sc_Seq$()
  };
  return $n_sc_Seq$
}
class $c_sc_StrictOptimizedLinearSeqOps$$anon$1 extends $c_sc_AbstractIterator {
  constructor(outer) {
    super();
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer
  };
  hasNext__Z() {
    return (!this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.isEmpty__Z())
  };
  next__O() {
    const r = this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.head__O();
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_Iterable(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.tail__O());
    return r
  };
}
const $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 0
}, false, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", {
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.$classData = $d_sc_StrictOptimizedLinearSeqOps$$anon$1;
class $c_sc_StringOps$StringIterator extends $c_sc_AbstractIterator {
  constructor(s) {
    super();
    this.sc_StringOps$StringIterator__f_s = null;
    this.sc_StringOps$StringIterator__f_pos = 0;
    this.sc_StringOps$StringIterator__f_s = s;
    this.sc_StringOps$StringIterator__f_pos = 0
  };
  hasNext__Z() {
    const $$x1 = this.sc_StringOps$StringIterator__f_pos;
    const this$1 = this.sc_StringOps$StringIterator__f_s;
    return ($$x1 < $uI(this$1.length))
  };
  next__C() {
    try {
      const this$1 = this.sc_StringOps$StringIterator__f_s;
      const index = this.sc_StringOps$StringIterator__f_pos;
      const r = (65535 & $uI(this$1.charCodeAt(index)));
      this.sc_StringOps$StringIterator__f_pos = ((1 + this.sc_StringOps$StringIterator__f_pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_IndexOutOfBoundsException)) {
        return $uC($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
      } else {
        throw e
      }
    }
  };
  next__O() {
    return $bC(this.next__C())
  };
}
const $d_sc_StringOps$StringIterator = new $TypeData().initClass({
  sc_StringOps$StringIterator: 0
}, false, "scala.collection.StringOps$StringIterator", {
  sc_StringOps$StringIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StringOps$StringIterator.prototype.$classData = $d_sc_StringOps$StringIterator;
const $p_sci_HashMapBuilder__isAliased__Z = (function($thiz) {
  return ($thiz.sci_HashMapBuilder__f_aliased !== null)
});
const $p_sci_HashMapBuilder__insertElement__AI__I__I__AI = (function($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  if ((ix > as.u.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  const result = $newArrayObject($d_I.getArrayOf(), [((1 + as.u.length) | 0)]);
  $systemArraycopy(as, 0, result, 0, ix);
  result.set(ix, elem);
  const destPos = ((1 + ix) | 0);
  const length = ((as.u.length - ix) | 0);
  $systemArraycopy(as, ix, result, destPos, length);
  return result
});
const $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V = (function($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  const dataIx = bm.dataIndex__I__I(bitpos);
  const idx = (dataIx << 1);
  const src = bm.sci_BitmapIndexedMapNode__f_content;
  const dst = $newArrayObject($d_O.getArrayOf(), [((2 + src.u.length) | 0)]);
  $systemArraycopy(src, 0, dst, 0, idx);
  dst.set(idx, key);
  dst.set(((1 + idx) | 0), value);
  const destPos = ((2 + idx) | 0);
  const length = ((src.u.length - idx) | 0);
  $systemArraycopy(src, idx, dst, destPos, length);
  const dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.sci_BitmapIndexedMapNode__f_originalHashes, dataIx, originalHash);
  bm.sci_BitmapIndexedMapNode__f_dataMap = (bm.sci_BitmapIndexedMapNode__f_dataMap | bitpos);
  bm.sci_BitmapIndexedMapNode__f_content = dst;
  bm.sci_BitmapIndexedMapNode__f_originalHashes = dstHashes;
  bm.sci_BitmapIndexedMapNode__f_size = ((1 + bm.sci_BitmapIndexedMapNode__f_size) | 0);
  bm.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((bm.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + keyHash) | 0)
});
const $p_sci_HashMapBuilder__ensureUnaliased__V = (function($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz)
  };
  $thiz.sci_HashMapBuilder__f_aliased = null
});
const $p_sci_HashMapBuilder__copyElems__V = (function($thiz) {
  $thiz.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = $thiz.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode.copy__sci_BitmapIndexedMapNode()
});
class $c_sci_HashMapBuilder extends $c_O {
  constructor() {
    super();
    this.sci_HashMapBuilder__f_aliased = null;
    this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = null;
    this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyObjectArray, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, 0, 0)
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  update__sci_MapNode__O__O__I__I__I__V(mapNode, key, value, originalHash, keyHash, shift) {
    if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
      const x2 = $as_sci_BitmapIndexedMapNode(mapNode);
      const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
      const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
      if (((x2.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
        const index = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
        const key0 = x2.getKey__I__O(index);
        const key0UnimprovedHash = x2.getHash__I__I(index);
        if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key0, key))) {
          x2.sci_BitmapIndexedMapNode__f_content.set(((1 + (index << 1)) | 0), value)
        } else {
          const value0 = x2.getValue__I__O(index);
          const key0Hash = $m_sc_Hashing$().improve__I__I(key0UnimprovedHash);
          const subNodeNew = x2.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
          x2.migrateFromInlineToNodeInPlace__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, key0Hash, subNodeNew)
        }
      } else if (((x2.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
        const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
        const subNode = x2.getNode__I__sci_MapNode(index$2);
        const beforeSize = subNode.size__I();
        const beforeHash = subNode.cachedJavaKeySetHashCode__I();
        this.update__sci_MapNode__O__O__I__I__I__V(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
        x2.sci_BitmapIndexedMapNode__f_size = ((x2.sci_BitmapIndexedMapNode__f_size + ((subNode.size__I() - beforeSize) | 0)) | 0);
        x2.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((x2.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + ((subNode.cachedJavaKeySetHashCode__I() - beforeHash) | 0)) | 0)
      } else {
        $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, x2, bitpos, key, originalHash, keyHash, value)
      }
    } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
      const x3 = $as_sci_HashCollisionMapNode(mapNode);
      const index$3 = x3.indexOf__O__I(key);
      if ((index$3 < 0)) {
        x3.sci_HashCollisionMapNode__f_content = x3.sci_HashCollisionMapNode__f_content.appended__O__sci_Vector(new $c_T2(key, value))
      } else {
        const this$1 = x3.sci_HashCollisionMapNode__f_content;
        const elem = new $c_T2(key, value);
        x3.sci_HashCollisionMapNode__f_content = this$1.updateAt__I__O__sci_Vector(index$3, elem)
      }
    } else {
      throw new $c_s_MatchError(mapNode)
    }
  };
  result__sci_HashMap() {
    if ((this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode.sci_BitmapIndexedMapNode__f_size === 0)) {
      const this$1 = $m_sci_HashMap$();
      return this$1.sci_HashMap$__f_EmptyMap
    } else if ((this.sci_HashMapBuilder__f_aliased !== null)) {
      return this.sci_HashMapBuilder__f_aliased
    } else {
      this.sci_HashMapBuilder__f_aliased = new $c_sci_HashMap(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode);
      return this.sci_HashMapBuilder__f_aliased
    }
  };
  addOne__T2__sci_HashMapBuilder(elem) {
    $p_sci_HashMapBuilder__ensureUnaliased__V(this);
    const x = elem.T2__f__1;
    const h = $m_sr_Statics$().anyHash__O__I(x);
    const im = $m_sc_Hashing$().improve__I__I(h);
    this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, elem.T2__f__1, elem.T2__f__2, h, im, 0);
    return this
  };
  addOne__O__O__sci_HashMapBuilder(key, value) {
    $p_sci_HashMapBuilder__ensureUnaliased__V(this);
    const originalHash = $m_sr_Statics$().anyHash__O__I(key);
    this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, key, value, originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
    return this
  };
  addAll__sc_IterableOnce__sci_HashMapBuilder(xs) {
    $p_sci_HashMapBuilder__ensureUnaliased__V(this);
    if ((xs instanceof $c_sci_HashMap)) {
      const x2 = $as_sci_HashMap(xs);
      new $c_sci_HashMapBuilder$$anon$2(this, x2)
    } else if ((xs instanceof $c_scm_HashMap)) {
      const x3 = $as_scm_HashMap(xs);
      const iter = x3.nodeIterator__sc_Iterator();
      while (iter.hasNext__Z()) {
        const next = $as_scm_HashMap$Node(iter.next__O());
        const improvedHash = next.scm_HashMap$Node__f__hash;
        const originalHash = (improvedHash ^ ((improvedHash >>> 16) | 0));
        const hash = $m_sc_Hashing$().improve__I__I(originalHash);
        this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, next.scm_HashMap$Node__f__key, next.scm_HashMap$Node__f__value, originalHash, hash, 0)
      }
    } else {
      const it = xs.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        this.addOne__T2__sci_HashMapBuilder($as_T2(it.next__O()))
      }
    };
    return this
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_HashMapBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__T2__sci_HashMapBuilder($as_T2(elem))
  };
  result__O() {
    return this.result__sci_HashMap()
  };
}
const $d_sci_HashMapBuilder = new $TypeData().initClass({
  sci_HashMapBuilder: 0
}, false, "scala.collection.immutable.HashMapBuilder", {
  sci_HashMapBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_HashMapBuilder.prototype.$classData = $d_sci_HashMapBuilder;
const $p_sci_HashSetBuilder__isAliased__Z = (function($thiz) {
  return ($thiz.sci_HashSetBuilder__f_aliased !== null)
});
const $p_sci_HashSetBuilder__insertElement__AI__I__I__AI = (function($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  if ((ix > as.u.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  const result = $newArrayObject($d_I.getArrayOf(), [((1 + as.u.length) | 0)]);
  $systemArraycopy(as, 0, result, 0, ix);
  result.set(ix, elem);
  const destPos = ((1 + ix) | 0);
  const length = ((as.u.length - ix) | 0);
  $systemArraycopy(as, ix, result, destPos, length);
  return result
});
const $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V = (function($thiz, bm, bitpos, key, originalHash, keyHash) {
  const dataIx = bm.dataIndex__I__I(bitpos);
  const src = bm.sci_BitmapIndexedSetNode__f_content;
  const dst = $newArrayObject($d_O.getArrayOf(), [((1 + src.u.length) | 0)]);
  $systemArraycopy(src, 0, dst, 0, dataIx);
  dst.set(dataIx, key);
  const destPos = ((1 + dataIx) | 0);
  const length = ((src.u.length - dataIx) | 0);
  $systemArraycopy(src, dataIx, dst, destPos, length);
  const dstHashes = $p_sci_HashSetBuilder__insertElement__AI__I__I__AI($thiz, bm.sci_BitmapIndexedSetNode__f_originalHashes, dataIx, originalHash);
  bm.sci_BitmapIndexedSetNode__f_dataMap = (bm.sci_BitmapIndexedSetNode__f_dataMap | bitpos);
  bm.sci_BitmapIndexedSetNode__f_content = dst;
  bm.sci_BitmapIndexedSetNode__f_originalHashes = dstHashes;
  bm.sci_BitmapIndexedSetNode__f_size = ((1 + bm.sci_BitmapIndexedSetNode__f_size) | 0);
  bm.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = ((bm.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode + keyHash) | 0)
});
const $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V = (function($thiz, bm, bitpos, elem) {
  const dataIx = bm.dataIndex__I__I(bitpos);
  bm.sci_BitmapIndexedSetNode__f_content.set(dataIx, elem)
});
const $p_sci_HashSetBuilder__ensureUnaliased__V = (function($thiz) {
  if ($p_sci_HashSetBuilder__isAliased__Z($thiz)) {
    $p_sci_HashSetBuilder__copyElems__V($thiz)
  };
  $thiz.sci_HashSetBuilder__f_aliased = null
});
const $p_sci_HashSetBuilder__copyElems__V = (function($thiz) {
  $thiz.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode = $thiz.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode.copy__sci_BitmapIndexedSetNode()
});
class $c_sci_HashSetBuilder extends $c_O {
  constructor() {
    super();
    this.sci_HashSetBuilder__f_aliased = null;
    this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode = null;
    this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode = new $c_sci_BitmapIndexedSetNode(0, 0, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyObjectArray, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, 0, 0)
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  update__sci_SetNode__O__I__I__I__V(setNode, element, originalHash, elementHash, shift) {
    if ((setNode instanceof $c_sci_BitmapIndexedSetNode)) {
      const x2 = $as_sci_BitmapIndexedSetNode(setNode);
      const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
      const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
      if (((x2.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
        const index = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
        const element0 = x2.getPayload__I__O(index);
        const element0UnimprovedHash = x2.getHash__I__I(index);
        if (((element0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(element0, element))) {
          $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V(this, x2, bitpos, element0)
        } else {
          const element0Hash = $m_sc_Hashing$().improve__I__I(element0UnimprovedHash);
          const subNodeNew = x2.mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0));
          x2.migrateFromInlineToNodeInPlace__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, element0Hash, subNodeNew)
        }
      } else if (((x2.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
        const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
        const subNode = x2.getNode__I__sci_SetNode(index$2);
        const beforeSize = subNode.size__I();
        const beforeHashCode = subNode.cachedJavaKeySetHashCode__I();
        this.update__sci_SetNode__O__I__I__I__V(subNode, element, originalHash, elementHash, ((5 + shift) | 0));
        x2.sci_BitmapIndexedSetNode__f_size = ((x2.sci_BitmapIndexedSetNode__f_size + ((subNode.size__I() - beforeSize) | 0)) | 0);
        x2.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = ((x2.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode + ((subNode.cachedJavaKeySetHashCode__I() - beforeHashCode) | 0)) | 0)
      } else {
        $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V(this, x2, bitpos, element, originalHash, elementHash)
      }
    } else if ((setNode instanceof $c_sci_HashCollisionSetNode)) {
      const x3 = $as_sci_HashCollisionSetNode(setNode);
      const this$1 = x3.sci_HashCollisionSetNode__f_content;
      const index$3 = $f_sc_SeqOps__indexOf__O__I__I(this$1, element, 0);
      if ((index$3 < 0)) {
        x3.sci_HashCollisionSetNode__f_content = x3.sci_HashCollisionSetNode__f_content.appended__O__sci_Vector(element)
      } else {
        const this$2 = x3.sci_HashCollisionSetNode__f_content;
        x3.sci_HashCollisionSetNode__f_content = this$2.updateAt__I__O__sci_Vector(index$3, element)
      }
    } else {
      throw new $c_s_MatchError(setNode)
    }
  };
  result__sci_HashSet() {
    if ((this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode.sci_BitmapIndexedSetNode__f_size === 0)) {
      const this$1 = $m_sci_HashSet$();
      return this$1.sci_HashSet$__f_EmptySet
    } else if ((this.sci_HashSetBuilder__f_aliased !== null)) {
      return this.sci_HashSetBuilder__f_aliased
    } else {
      this.sci_HashSetBuilder__f_aliased = new $c_sci_HashSet(this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode);
      return this.sci_HashSetBuilder__f_aliased
    }
  };
  addOne__O__sci_HashSetBuilder(elem) {
    $p_sci_HashSetBuilder__ensureUnaliased__V(this);
    const h = $m_sr_Statics$().anyHash__O__I(elem);
    const im = $m_sc_Hashing$().improve__I__I(h);
    this.update__sci_SetNode__O__I__I__I__V(this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode, elem, h, im, 0);
    return this
  };
  addAll__sc_IterableOnce__sci_HashSetBuilder(xs) {
    $p_sci_HashSetBuilder__ensureUnaliased__V(this);
    if ((xs instanceof $c_sci_HashSet)) {
      const x2 = $as_sci_HashSet(xs);
      new $c_sci_HashSetBuilder$$anon$1(this, x2)
    } else {
      const it = xs.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        this.addOne__O__sci_HashSetBuilder(it.next__O())
      }
    };
    return this
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_HashSetBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_HashSetBuilder(elem)
  };
  result__O() {
    return this.result__sci_HashSet()
  };
}
const $d_sci_HashSetBuilder = new $TypeData().initClass({
  sci_HashSetBuilder: 0
}, false, "scala.collection.immutable.HashSetBuilder", {
  sci_HashSetBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_HashSetBuilder.prototype.$classData = $d_sci_HashSetBuilder;
class $c_sci_IndexedSeq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$())
  };
  from__sc_IterableOnce__sci_IndexedSeq(it) {
    if ($is_sci_IndexedSeq(it)) {
      const x2 = $as_sci_IndexedSeq(it);
      return x2
    } else {
      return $as_sci_IndexedSeq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_IndexedSeq(source)
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return this.from__sc_IterableOnce__sci_IndexedSeq(it)
  };
}
const $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
let $n_sci_IndexedSeq$ = (void 0);
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
class $c_sci_LazyList$LazyBuilder extends $c_O {
  constructor() {
    super();
    this.sci_LazyList$LazyBuilder__f_next = null;
    this.sci_LazyList$LazyBuilder__f_list = null;
    this.clear__V()
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  clear__V() {
    const deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    $m_sci_LazyList$();
    const state = new $c_sjsr_AnonFunction0(((this$1, deferred$1) => (() => deferred$1.eval__sci_LazyList$State()))(this, deferred));
    this.sci_LazyList$LazyBuilder__f_list = new $c_sci_LazyList(state);
    this.sci_LazyList$LazyBuilder__f_next = deferred
  };
  result__sci_LazyList() {
    this.sci_LazyList$LazyBuilder__f_next.init__F0__V(new $c_sjsr_AnonFunction0(((this$1) => (() => $m_sci_LazyList$State$Empty$()))(this)));
    return this.sci_LazyList$LazyBuilder__f_list
  };
  addOne__O__sci_LazyList$LazyBuilder(elem) {
    const deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.sci_LazyList$LazyBuilder__f_next.init__F0__V(new $c_sjsr_AnonFunction0(((this$1, elem$1, deferred$1) => (() => {
      $m_sci_LazyList$();
      $m_sci_LazyList$();
      const state = new $c_sjsr_AnonFunction0(((this$2, deferred$2) => (() => deferred$2.eval__sci_LazyList$State()))(this$1, deferred$1));
      const tl = new $c_sci_LazyList(state);
      return new $c_sci_LazyList$State$Cons(elem$1, tl)
    }))(this, elem, deferred)));
    this.sci_LazyList$LazyBuilder__f_next = deferred;
    return this
  };
  addAll__sc_IterableOnce__sci_LazyList$LazyBuilder(xs) {
    if ((xs.knownSize__I() !== 0)) {
      const deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
      this.sci_LazyList$LazyBuilder__f_next.init__F0__V(new $c_sjsr_AnonFunction0(((this$1, xs$1, deferred$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(xs$1.iterator__sc_Iterator(), new $c_sjsr_AnonFunction0(((this$2, deferred$3) => (() => deferred$3.eval__sci_LazyList$State()))(this$1, deferred$1)))))(this, xs, deferred)));
      this.sci_LazyList$LazyBuilder__f_next = deferred
    };
    return this
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_LazyList$LazyBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_LazyList$LazyBuilder(elem)
  };
  result__O() {
    return this.result__sci_LazyList()
  };
}
const $d_sci_LazyList$LazyBuilder = new $TypeData().initClass({
  sci_LazyList$LazyBuilder: 0
}, false, "scala.collection.immutable.LazyList$LazyBuilder", {
  sci_LazyList$LazyBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_LazyList$LazyBuilder.prototype.$classData = $d_sci_LazyList$LazyBuilder;
class $c_sci_LazyList$LazyIterator extends $c_sc_AbstractIterator {
  constructor(lazyList) {
    super();
    this.sci_LazyList$LazyIterator__f_lazyList = null;
    this.sci_LazyList$LazyIterator__f_lazyList = lazyList
  };
  hasNext__Z() {
    return (!this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z())
  };
  next__O() {
    if (this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z()) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      const this$1 = this.sci_LazyList$LazyIterator__f_lazyList;
      const res = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
      const this$2 = this.sci_LazyList$LazyIterator__f_lazyList;
      this.sci_LazyList$LazyIterator__f_lazyList = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      return res
    }
  };
}
const $d_sci_LazyList$LazyIterator = new $TypeData().initClass({
  sci_LazyList$LazyIterator: 0
}, false, "scala.collection.immutable.LazyList$LazyIterator", {
  sci_LazyList$LazyIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_LazyList$LazyIterator.prototype.$classData = $d_sci_LazyList$LazyIterator;
class $c_sci_List$ extends $c_O {
  constructor() {
    super();
    this.sci_List$__f_partialNotApplied = null;
    $n_sci_List$ = this;
    this.sci_List$__f_partialNotApplied = new $c_sci_List$$anon$1()
  };
  apply__sci_Seq__O(elems) {
    return this.from__sc_IterableOnce__sci_List(elems)
  };
  from__sc_IterableOnce__sci_List(coll) {
    if ((coll instanceof $c_sci_List)) {
      const x2 = $as_sci_List(coll);
      return x2
    } else if ((coll.knownSize__I() === 0)) {
      return $m_sci_Nil$()
    } else if ((coll instanceof $c_scm_ListBuffer)) {
      const x3 = $as_scm_ListBuffer(coll);
      return x3.toList__sci_List()
    } else {
      const this$2 = new $c_scm_ListBuffer();
      return this$2.addAll__sc_IterableOnce__scm_ListBuffer(coll).toList__sci_List()
    }
  };
  newBuilder__scm_Builder() {
    return new $c_scm_ListBuffer()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_List(source)
  };
}
const $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
let $n_sci_List$ = (void 0);
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
const $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__ = (function($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.sci_Map$Map2$Map2Iterator__f_$outer = outer
  };
  $thiz.sci_Map$Map2$Map2Iterator__f_i = 0;
  return $thiz
});
class $c_sci_Map$Map2$Map2Iterator extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.sci_Map$Map2$Map2Iterator__f_i = 0;
    this.sci_Map$Map2$Map2Iterator__f_$outer = null
  };
  hasNext__Z() {
    return (this.sci_Map$Map2$Map2Iterator__f_i < 2)
  };
  next__O() {
    const x1 = this.sci_Map$Map2$Map2Iterator__f_i;
    let result;
    switch (x1) {
      case 0: {
        const k = this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1;
        const v = this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1;
        result = new $c_T2(k, v);
        break
      }
      case 1: {
        const k$1 = this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2;
        const v$1 = this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2;
        result = new $c_T2(k$1, v$1);
        break
      }
      default: {
        result = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
      }
    };
    this.sci_Map$Map2$Map2Iterator__f_i = ((1 + this.sci_Map$Map2$Map2Iterator__f_i) | 0);
    return result
  };
}
const $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__ = (function($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.sci_Map$Map3$Map3Iterator__f_$outer = outer
  };
  $thiz.sci_Map$Map3$Map3Iterator__f_i = 0;
  return $thiz
});
class $c_sci_Map$Map3$Map3Iterator extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.sci_Map$Map3$Map3Iterator__f_i = 0;
    this.sci_Map$Map3$Map3Iterator__f_$outer = null
  };
  hasNext__Z() {
    return (this.sci_Map$Map3$Map3Iterator__f_i < 3)
  };
  next__O() {
    const x1 = this.sci_Map$Map3$Map3Iterator__f_i;
    let result;
    switch (x1) {
      case 0: {
        const k = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1;
        const v = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1;
        result = new $c_T2(k, v);
        break
      }
      case 1: {
        const k$1 = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2;
        const v$1 = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2;
        result = new $c_T2(k$1, v$1);
        break
      }
      case 2: {
        const k$2 = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3;
        const v$2 = this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3;
        result = new $c_T2(k$2, v$2);
        break
      }
      default: {
        result = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
      }
    };
    this.sci_Map$Map3$Map3Iterator__f_i = ((1 + this.sci_Map$Map3$Map3Iterator__f_i) | 0);
    return result
  };
}
const $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__ = (function($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.sci_Map$Map4$Map4Iterator__f_$outer = outer
  };
  $thiz.sci_Map$Map4$Map4Iterator__f_i = 0;
  return $thiz
});
class $c_sci_Map$Map4$Map4Iterator extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.sci_Map$Map4$Map4Iterator__f_i = 0;
    this.sci_Map$Map4$Map4Iterator__f_$outer = null
  };
  hasNext__Z() {
    return (this.sci_Map$Map4$Map4Iterator__f_i < 4)
  };
  next__O() {
    const x1 = this.sci_Map$Map4$Map4Iterator__f_i;
    let result;
    switch (x1) {
      case 0: {
        const k = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1;
        const v = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1;
        result = new $c_T2(k, v);
        break
      }
      case 1: {
        const k$1 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2;
        const v$1 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2;
        result = new $c_T2(k$1, v$1);
        break
      }
      case 2: {
        const k$2 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3;
        const v$2 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3;
        result = new $c_T2(k$2, v$2);
        break
      }
      case 3: {
        const k$3 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4;
        const v$3 = this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4;
        result = new $c_T2(k$3, v$3);
        break
      }
      default: {
        result = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
      }
    };
    this.sci_Map$Map4$Map4Iterator__f_i = ((1 + this.sci_Map$Map4$Map4Iterator__f_i) | 0);
    return result
  };
}
class $c_sci_MapBuilderImpl extends $c_O {
  constructor() {
    super();
    this.sci_MapBuilderImpl__f_elems = null;
    this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = false;
    this.sci_MapBuilderImpl__f_hashMapBuilder = null;
    this.sci_MapBuilderImpl__f_elems = $m_sci_Map$EmptyMap$();
    this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = false
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  result__sci_Map() {
    return (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder ? this.sci_MapBuilderImpl__f_hashMapBuilder.result__sci_HashMap() : this.sci_MapBuilderImpl__f_elems)
  };
  addOne__O__O__sci_MapBuilderImpl(key, value) {
    if (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder) {
      this.sci_MapBuilderImpl__f_hashMapBuilder.addOne__O__O__sci_HashMapBuilder(key, value)
    } else if ((this.sci_MapBuilderImpl__f_elems.size__I() < 4)) {
      this.sci_MapBuilderImpl__f_elems = $as_sci_Map(this.sci_MapBuilderImpl__f_elems.updated__O__O__sci_MapOps(key, value))
    } else if (this.sci_MapBuilderImpl__f_elems.contains__O__Z(key)) {
      this.sci_MapBuilderImpl__f_elems = $as_sci_Map(this.sci_MapBuilderImpl__f_elems.updated__O__O__sci_MapOps(key, value))
    } else {
      this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = true;
      if ((this.sci_MapBuilderImpl__f_hashMapBuilder === null)) {
        this.sci_MapBuilderImpl__f_hashMapBuilder = new $c_sci_HashMapBuilder()
      };
      $as_sci_Map$Map4(this.sci_MapBuilderImpl__f_elems).buildTo__sci_HashMapBuilder__sci_HashMapBuilder(this.sci_MapBuilderImpl__f_hashMapBuilder);
      this.sci_MapBuilderImpl__f_hashMapBuilder.addOne__O__O__sci_HashMapBuilder(key, value)
    };
    return this
  };
  addAll__sc_IterableOnce__sci_MapBuilderImpl(xs) {
    return (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder ? (this.sci_MapBuilderImpl__f_hashMapBuilder.addAll__sc_IterableOnce__sci_HashMapBuilder(xs), this) : $as_sci_MapBuilderImpl($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)))
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_MapBuilderImpl(xs)
  };
  addOne__O__scm_Growable(elem) {
    const elem$1 = $as_T2(elem);
    return this.addOne__O__O__sci_MapBuilderImpl(elem$1.T2__f__1, elem$1.T2__f__2)
  };
  result__O() {
    return this.result__sci_Map()
  };
}
function $as_sci_MapBuilderImpl(obj) {
  return (((obj instanceof $c_sci_MapBuilderImpl) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.MapBuilderImpl"))
}
function $isArrayOf_sci_MapBuilderImpl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_MapBuilderImpl)))
}
function $asArrayOf_sci_MapBuilderImpl(obj, depth) {
  return (($isArrayOf_sci_MapBuilderImpl(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.MapBuilderImpl;", depth))
}
const $d_sci_MapBuilderImpl = new $TypeData().initClass({
  sci_MapBuilderImpl: 0
}, false, "scala.collection.immutable.MapBuilderImpl", {
  sci_MapBuilderImpl: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_MapBuilderImpl.prototype.$classData = $d_sci_MapBuilderImpl;
class $c_sci_MapKeyValueTupleIterator extends $c_sci_ChampBaseIterator {
  constructor(rootNode) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode)
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I(xs, start) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I(this, xs, start)
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  toArray__s_reflect_ClassTag__O(evidence$2) {
    return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2)
  };
  knownSize__I() {
    return (-1)
  };
  next__T2() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    const payload = $as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode).getPayload__I__T2(this.sci_ChampBaseIterator__f_currentValueCursor);
    this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
    return payload
  };
  next__O() {
    return this.next__T2()
  };
}
const $d_sci_MapKeyValueTupleIterator = new $TypeData().initClass({
  sci_MapKeyValueTupleIterator: 0
}, false, "scala.collection.immutable.MapKeyValueTupleIterator", {
  sci_MapKeyValueTupleIterator: 1,
  sci_ChampBaseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_MapKeyValueTupleIterator.prototype.$classData = $d_sci_MapKeyValueTupleIterator;
class $c_sci_Seq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_List$())
  };
  from__sc_IterableOnce__sci_Seq(it) {
    if ($is_sci_Seq(it)) {
      const x2 = $as_sci_Seq(it);
      return x2
    } else {
      return $as_sci_Seq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Seq(source)
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return this.from__sc_IterableOnce__sci_Seq(it)
  };
}
const $d_sci_Seq$ = new $TypeData().initClass({
  sci_Seq$: 0
}, false, "scala.collection.immutable.Seq$", {
  sci_Seq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Seq$.prototype.$classData = $d_sci_Seq$;
let $n_sci_Seq$ = (void 0);
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$()
  };
  return $n_sci_Seq$
}
class $c_sci_SetBuilderImpl extends $c_O {
  constructor() {
    super();
    this.sci_SetBuilderImpl__f_elems = null;
    this.sci_SetBuilderImpl__f_switchedToHashSetBuilder = false;
    this.sci_SetBuilderImpl__f_hashSetBuilder = null;
    this.sci_SetBuilderImpl__f_elems = $m_sci_Set$EmptySet$();
    this.sci_SetBuilderImpl__f_switchedToHashSetBuilder = false
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  result__sci_Set() {
    return (this.sci_SetBuilderImpl__f_switchedToHashSetBuilder ? this.sci_SetBuilderImpl__f_hashSetBuilder.result__sci_HashSet() : this.sci_SetBuilderImpl__f_elems)
  };
  addOne__O__sci_SetBuilderImpl(elem) {
    if (this.sci_SetBuilderImpl__f_switchedToHashSetBuilder) {
      this.sci_SetBuilderImpl__f_hashSetBuilder.addOne__O__sci_HashSetBuilder(elem)
    } else if ((this.sci_SetBuilderImpl__f_elems.size__I() < 4)) {
      const this$1 = this.sci_SetBuilderImpl__f_elems;
      this.sci_SetBuilderImpl__f_elems = $as_sci_Set(this$1.incl__O__sci_SetOps(elem))
    } else if ((!this.sci_SetBuilderImpl__f_elems.contains__O__Z(elem))) {
      this.sci_SetBuilderImpl__f_switchedToHashSetBuilder = true;
      if ((this.sci_SetBuilderImpl__f_hashSetBuilder === null)) {
        this.sci_SetBuilderImpl__f_hashSetBuilder = new $c_sci_HashSetBuilder()
      };
      $as_sci_Set$Set4(this.sci_SetBuilderImpl__f_elems).buildTo__scm_Builder__scm_Builder(this.sci_SetBuilderImpl__f_hashSetBuilder);
      this.sci_SetBuilderImpl__f_hashSetBuilder.addOne__O__sci_HashSetBuilder(elem)
    };
    return this
  };
  addAll__sc_IterableOnce__sci_SetBuilderImpl(xs) {
    return (this.sci_SetBuilderImpl__f_switchedToHashSetBuilder ? (this.sci_SetBuilderImpl__f_hashSetBuilder.addAll__sc_IterableOnce__sci_HashSetBuilder(xs), this) : $as_sci_SetBuilderImpl($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)))
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_SetBuilderImpl(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_SetBuilderImpl(elem)
  };
  result__O() {
    return this.result__sci_Set()
  };
}
function $as_sci_SetBuilderImpl(obj) {
  return (((obj instanceof $c_sci_SetBuilderImpl) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.SetBuilderImpl"))
}
function $isArrayOf_sci_SetBuilderImpl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SetBuilderImpl)))
}
function $asArrayOf_sci_SetBuilderImpl(obj, depth) {
  return (($isArrayOf_sci_SetBuilderImpl(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.SetBuilderImpl;", depth))
}
const $d_sci_SetBuilderImpl = new $TypeData().initClass({
  sci_SetBuilderImpl: 0
}, false, "scala.collection.immutable.SetBuilderImpl", {
  sci_SetBuilderImpl: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_SetBuilderImpl.prototype.$classData = $d_sci_SetBuilderImpl;
class $c_sci_SetHashIterator extends $c_sci_ChampBaseIterator {
  constructor(rootNode) {
    super();
    this.sci_SetHashIterator__f_hash = 0;
    $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
    this.sci_SetHashIterator__f_hash = 0
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I(xs, start) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I(this, xs, start)
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  toArray__s_reflect_ClassTag__O(evidence$2) {
    return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2)
  };
  knownSize__I() {
    return (-1)
  };
  hashCode__I() {
    return this.sci_SetHashIterator__f_hash
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    this.sci_SetHashIterator__f_hash = this.sci_ChampBaseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseIterator__f_currentValueCursor);
    this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
    return this
  };
}
const $d_sci_SetHashIterator = new $TypeData().initClass({
  sci_SetHashIterator: 0
}, false, "scala.collection.immutable.SetHashIterator", {
  sci_SetHashIterator: 1,
  sci_ChampBaseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_SetHashIterator.prototype.$classData = $d_sci_SetHashIterator;
class $c_sci_SetIterator extends $c_sci_ChampBaseIterator {
  constructor(rootNode) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode)
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I(xs, start) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I(this, xs, start)
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  toArray__s_reflect_ClassTag__O(evidence$2) {
    return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2)
  };
  knownSize__I() {
    return (-1)
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    const payload = $as_sci_SetNode(this.sci_ChampBaseIterator__f_currentValueNode).getPayload__I__O(this.sci_ChampBaseIterator__f_currentValueCursor);
    this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
    return payload
  };
}
const $d_sci_SetIterator = new $TypeData().initClass({
  sci_SetIterator: 0
}, false, "scala.collection.immutable.SetIterator", {
  sci_SetIterator: 1,
  sci_ChampBaseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_SetIterator.prototype.$classData = $d_sci_SetIterator;
const $p_sci_Vector$__liftedTree1$1__I = (function($thiz) {
  try {
    const x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "1024");
    const this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if ((e instanceof $c_jl_SecurityException)) {
      return 1024
    } else {
      throw e
    }
  }
});
class $c_sci_Vector$ extends $c_O {
  constructor() {
    super();
    this.sci_Vector$__f_NIL = null;
    this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
    $n_sci_Vector$ = this;
    this.sci_Vector$__f_NIL = new $c_sci_Vector(0, 0, 0);
    this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $p_sci_Vector$__liftedTree1$1__I(this)
  };
  apply__sci_Seq__O(elems) {
    return this.from__sc_IterableOnce__sci_Vector(elems)
  };
  from__sc_IterableOnce__sci_Vector(it) {
    if ((it instanceof $c_sci_ArraySeq)) {
      const x2 = $as_sci_ArraySeq(it);
      if ((x2.length__I() <= 32)) {
        if (x2.isEmpty__Z()) {
          return this.sci_Vector$__f_NIL
        } else {
          const unsafeArray = x2.unsafeArray__O();
          const len = $m_sr_ScalaRunTime$().array_length__O__I(unsafeArray);
          const v = new $c_sci_Vector(0, len, 0);
          const display0 = $newArrayObject($d_O.getArrayOf(), [len]);
          if ($isArrayOf_O(unsafeArray, 1)) {
            $systemArraycopy(unsafeArray, 0, display0, 0, len)
          } else {
            let i = 0;
            while ((i < len)) {
              display0.set(i, $m_sr_ScalaRunTime$().array_apply__O__I__O(unsafeArray, i));
              i = ((1 + i) | 0)
            }
          };
          v.sci_Vector__f_display0 = display0;
          v.sci_Vector__f_depth = 1;
          return v
        }
      }
    };
    if ((it instanceof $c_sci_Vector)) {
      const x3 = $as_sci_Vector(it);
      return x3
    };
    const knownSize = it.knownSize__I();
    if ((knownSize === 0)) {
      return this.sci_Vector$__f_NIL
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      const display0$2 = $newArrayObject($d_O.getArrayOf(), [knownSize]);
      const this$1 = it.iterator__sc_Iterator();
      $f_sc_IterableOnceOps__copyToArray__O__I__I(this$1, display0$2, 0);
      const v$2 = new $c_sci_Vector(0, knownSize, 0);
      v$2.sci_Vector__f_depth = 1;
      v$2.sci_Vector__f_display0 = display0$2;
      return v$2
    } else {
      const this$2 = new $c_sci_VectorBuilder();
      const this$3 = this$2.addAll__sc_IterableOnce__sci_VectorBuilder(it);
      return this$3.result__sci_Vector()
    }
  };
  scala$collection$immutable$Vector$$single__O__sci_Vector(elem) {
    const s = new $c_sci_Vector(0, 1, 0);
    s.sci_Vector__f_depth = 1;
    s.sci_Vector__f_display0 = $makeNativeArrayWrapper($d_O.getArrayOf(), [elem]);
    return s
  };
  newBuilder__scm_Builder() {
    return new $c_sci_VectorBuilder()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Vector(source)
  };
}
const $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
let $n_sci_Vector$ = (void 0);
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
const $p_scm_ArrayBuffer$__growArray$1__J__I__I__AO__AO = (function($thiz, arrayLength$1, n$1, end$1, array$2) {
  const lo = (arrayLength$1.RTLong__f_lo << 1);
  const hi = (((arrayLength$1.RTLong__f_lo >>> 31) | 0) | (arrayLength$1.RTLong__f_hi << 1));
  const t = (((hi === 0) ? (((-2147483648) ^ lo) > (-2147483632)) : (hi > 0)) ? new $c_RTLong(lo, hi) : new $c_RTLong(16, 0));
  const lo$1 = t.RTLong__f_lo;
  const hi$1 = t.RTLong__f_hi;
  let newSize__lo = lo$1;
  let newSize__hi = hi$1;
  while (true) {
    const hi$2 = (n$1 >> 31);
    const b__lo = newSize__lo;
    const b__hi = newSize__hi;
    const bhi = b__hi;
    if (((hi$2 === bhi) ? (((-2147483648) ^ n$1) > ((-2147483648) ^ b__lo)) : (hi$2 > bhi))) {
      const this$4__lo = newSize__lo;
      const this$4__hi = newSize__hi;
      const lo$2 = (this$4__lo << 1);
      const hi$3 = (((this$4__lo >>> 31) | 0) | (this$4__hi << 1));
      const $$x1__lo = lo$2;
      const $$x1__hi = hi$3;
      newSize__lo = $$x1__lo;
      newSize__hi = $$x1__hi
    } else {
      break
    }
  };
  const this$5__lo = newSize__lo;
  const this$5__hi = newSize__hi;
  const ahi = this$5__hi;
  if (((ahi === 0) ? (((-2147483648) ^ this$5__lo) > (-1)) : (ahi > 0))) {
    if ((end$1 === 2147483647)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O($ct_jl_Exception__T__(new $c_jl_Exception(), "Collections can not have more than 2147483647 elements"))
    };
    const $$x2__lo = 2147483647;
    const $$x2__hi = 0;
    newSize__lo = $$x2__lo;
    newSize__hi = $$x2__hi
  };
  const this$6__lo = newSize__lo;
  const this$6__hi = newSize__hi;
  const newArray = $newArrayObject($d_O.getArrayOf(), [this$6__lo]);
  $m_s_Array$().copy__O__I__O__I__I__V(array$2, 0, newArray, 0, end$1);
  return newArray
});
class $c_scm_ArrayBuffer$ extends $c_O {
  apply__sci_Seq__O(elems) {
    return this.from__sc_IterableOnce__scm_ArrayBuffer(elems)
  };
  from__sc_IterableOnce__scm_ArrayBuffer(coll) {
    const k = coll.knownSize__I();
    if ((k >= 0)) {
      const array = $newArrayObject($d_O.getArrayOf(), [((k > 16) ? k : 16)]);
      const it = coll.iterator__sc_Iterator();
      const isEmpty = (k <= 0);
      const scala$collection$immutable$Range$$lastElement = (((-1) + k) | 0);
      if ((!isEmpty)) {
        let i = 0;
        while (true) {
          const v1 = i;
          array.set(v1, it.next__O());
          if ((i === scala$collection$immutable$Range$$lastElement)) {
            break
          };
          i = ((1 + i) | 0)
        }
      };
      return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k)
    } else {
      const this$10 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
      return this$10.addAll__sc_IterableOnce__scm_ArrayBuffer(coll)
    }
  };
  newBuilder__scm_Builder() {
    return new $c_scm_ArrayBuffer$$anon$1()
  };
  scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(array, end, n) {
    const value = array.u.length;
    const hi = (value >> 31);
    const hi$1 = (n >> 31);
    if (((hi$1 === hi) ? (((-2147483648) ^ n) <= ((-2147483648) ^ value)) : (hi$1 < hi))) {
      return array
    } else {
      return $p_scm_ArrayBuffer$__growArray$1__J__I__I__AO__AO(this, new $c_RTLong(value, hi), n, end, array)
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__scm_ArrayBuffer(source)
  };
}
const $d_scm_ArrayBuffer$ = new $TypeData().initClass({
  scm_ArrayBuffer$: 0
}, false, "scala.collection.mutable.ArrayBuffer$", {
  scm_ArrayBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer$.prototype.$classData = $d_scm_ArrayBuffer$;
let $n_scm_ArrayBuffer$ = (void 0);
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$()
  };
  return $n_scm_ArrayBuffer$
}
class $c_scm_ArrayBuffer$$anon$1 extends $c_scm_GrowableBuilder {
  constructor() {
    super();
    $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()))
  };
  sizeHint__I__V(size) {
    $as_scm_ArrayBuffer(this.scm_GrowableBuilder__f_elems).ensureSize__I__V(size)
  };
}
const $d_scm_ArrayBuffer$$anon$1 = new $TypeData().initClass({
  scm_ArrayBuffer$$anon$1: 0
}, false, "scala.collection.mutable.ArrayBuffer$$anon$1", {
  scm_ArrayBuffer$$anon$1: 1,
  scm_GrowableBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_ArrayBuffer$$anon$1.prototype.$classData = $d_scm_ArrayBuffer$$anon$1;
class $c_scm_ArrayDeque$ extends $c_O {
  apply__sci_Seq__O(elems) {
    return this.from__sc_IterableOnce__scm_ArrayDeque(elems)
  };
  from__sc_IterableOnce__scm_ArrayDeque(coll) {
    const s = coll.knownSize__I();
    if ((s >= 0)) {
      const array = this.alloc__I__AO(s);
      const it = coll.iterator__sc_Iterator();
      let i = 0;
      while (it.hasNext__Z()) {
        array.set(i, it.next__O());
        i = ((1 + i) | 0)
      };
      return $ct_scm_ArrayDeque__AO__I__I__(new $c_scm_ArrayDeque(), array, 0, s)
    } else {
      const this$1 = $ct_scm_ArrayDeque__I__(new $c_scm_ArrayDeque(), 16);
      return this$1.addAll__sc_IterableOnce__scm_ArrayDeque(coll)
    }
  };
  newBuilder__scm_Builder() {
    return new $c_scm_ArrayDeque$$anon$1()
  };
  alloc__I__AO(len) {
    const requirement = (len >= 0);
    if ((!requirement)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: Non-negative array size required")
    };
    const size = ((((-2147483648) >>> $clz32(len)) | 0) << 1);
    const requirement$1 = (size >= 0);
    if ((!requirement$1)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("requirement failed: " + "ArrayDeque too big - cannot allocate ArrayDeque of length ") + len))
    };
    return $newArrayObject($d_O.getArrayOf(), [((size > 16) ? size : 16)])
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__scm_ArrayDeque(source)
  };
}
const $d_scm_ArrayDeque$ = new $TypeData().initClass({
  scm_ArrayDeque$: 0
}, false, "scala.collection.mutable.ArrayDeque$", {
  scm_ArrayDeque$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayDeque$.prototype.$classData = $d_scm_ArrayDeque$;
let $n_scm_ArrayDeque$ = (void 0);
function $m_scm_ArrayDeque$() {
  if ((!$n_scm_ArrayDeque$)) {
    $n_scm_ArrayDeque$ = new $c_scm_ArrayDeque$()
  };
  return $n_scm_ArrayDeque$
}
class $c_scm_ArrayDeque$$anon$1 extends $c_scm_GrowableBuilder {
  constructor() {
    super();
    $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_ArrayDeque__I__(new $c_scm_ArrayDeque(), 16))
  };
  sizeHint__I__V(size) {
    const this$1 = $as_scm_ArrayDeque(this.scm_GrowableBuilder__f_elems);
    const idx = this$1.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
    if (((size > (((this$1.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx) | 0) & (((-1) + this$1.scm_ArrayDeque__f_array.u.length) | 0))) && (size >= this$1.scm_ArrayDeque__f_array.u.length))) {
      this$1.scala$collection$mutable$ArrayDeque$$resize__I__V(size)
    }
  };
}
const $d_scm_ArrayDeque$$anon$1 = new $TypeData().initClass({
  scm_ArrayDeque$$anon$1: 0
}, false, "scala.collection.mutable.ArrayDeque$$anon$1", {
  scm_ArrayDeque$$anon$1: 1,
  scm_GrowableBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_ArrayDeque$$anon$1.prototype.$classData = $d_scm_ArrayDeque$$anon$1;
class $c_scm_HashMap$$anon$5 extends $c_scm_GrowableBuilder {
  constructor(initialCapacity$1, loadFactor$1) {
    super();
    $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashMap__I__D__(new $c_scm_HashMap(), initialCapacity$1, loadFactor$1))
  };
  sizeHint__I__V(size) {
    $as_scm_HashMap(this.scm_GrowableBuilder__f_elems).sizeHint__I__V(size)
  };
}
const $d_scm_HashMap$$anon$5 = new $TypeData().initClass({
  scm_HashMap$$anon$5: 0
}, false, "scala.collection.mutable.HashMap$$anon$5", {
  scm_HashMap$$anon$5: 1,
  scm_GrowableBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_HashMap$$anon$5.prototype.$classData = $d_scm_HashMap$$anon$5;
const $ct_scm_HashMap$HashMapIterator__scm_HashMap__ = (function($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.scm_HashMap$HashMapIterator__f_$outer = outer
  };
  $thiz.scm_HashMap$HashMapIterator__f_i = 0;
  $thiz.scm_HashMap$HashMapIterator__f_node = null;
  $thiz.scm_HashMap$HashMapIterator__f_len = outer.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length;
  return $thiz
});
class $c_scm_HashMap$HashMapIterator extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.scm_HashMap$HashMapIterator__f_i = 0;
    this.scm_HashMap$HashMapIterator__f_node = null;
    this.scm_HashMap$HashMapIterator__f_len = 0;
    this.scm_HashMap$HashMapIterator__f_$outer = null
  };
  hasNext__Z() {
    if ((this.scm_HashMap$HashMapIterator__f_node !== null)) {
      return true
    } else {
      while ((this.scm_HashMap$HashMapIterator__f_i < this.scm_HashMap$HashMapIterator__f_len)) {
        const n = this.scm_HashMap$HashMapIterator__f_$outer.scm_HashMap__f_scala$collection$mutable$HashMap$$table.get(this.scm_HashMap$HashMapIterator__f_i);
        this.scm_HashMap$HashMapIterator__f_i = ((1 + this.scm_HashMap$HashMapIterator__f_i) | 0);
        if ((n !== null)) {
          this.scm_HashMap$HashMapIterator__f_node = n;
          return true
        }
      };
      return false
    }
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      const r = this.extract__scm_HashMap$Node__O(this.scm_HashMap$HashMapIterator__f_node);
      this.scm_HashMap$HashMapIterator__f_node = this.scm_HashMap$HashMapIterator__f_node.scm_HashMap$Node__f__next;
      return r
    }
  };
}
const $ct_scm_ImmutableBuilder__sc_IterableOnce__ = (function($thiz, empty) {
  $thiz.scm_ImmutableBuilder__f_empty = empty;
  $thiz.scm_ImmutableBuilder__f_elems = empty;
  return $thiz
});
class $c_scm_ImmutableBuilder extends $c_O {
  constructor() {
    super();
    this.scm_ImmutableBuilder__f_empty = null;
    this.scm_ImmutableBuilder__f_elems = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  };
  result__O() {
    return this.scm_ImmutableBuilder__f_elems
  };
}
class $c_scm_IndexedSeq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$())
  };
}
const $d_scm_IndexedSeq$ = new $TypeData().initClass({
  scm_IndexedSeq$: 0
}, false, "scala.collection.mutable.IndexedSeq$", {
  scm_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_IndexedSeq$.prototype.$classData = $d_scm_IndexedSeq$;
let $n_scm_IndexedSeq$ = (void 0);
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$()
  };
  return $n_scm_IndexedSeq$
}
class $c_scm_ListBuffer$ extends $c_O {
  apply__sci_Seq__O(elems) {
    const this$1 = new $c_scm_ListBuffer();
    return this$1.addAll__sc_IterableOnce__scm_ListBuffer(elems)
  };
  newBuilder__scm_Builder() {
    return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer())
  };
  from__sc_IterableOnce__O(source) {
    const this$1 = new $c_scm_ListBuffer();
    return this$1.addAll__sc_IterableOnce__scm_ListBuffer(source)
  };
}
const $d_scm_ListBuffer$ = new $TypeData().initClass({
  scm_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", {
  scm_ListBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer$.prototype.$classData = $d_scm_ListBuffer$;
let $n_scm_ListBuffer$ = (void 0);
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$()
  };
  return $n_scm_ListBuffer$
}
class $c_scm_Queue$ extends $c_O {
  apply__sci_Seq__O(elems) {
    const this$1 = new $c_scm_Queue(16);
    return $as_scm_Queue(this$1.addAll__sc_IterableOnce__scm_ArrayDeque(elems))
  };
  newBuilder__scm_Builder() {
    return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_Queue(16))
  };
  from__sc_IterableOnce__O(source) {
    const this$1 = new $c_scm_Queue(16);
    return $as_scm_Queue(this$1.addAll__sc_IterableOnce__scm_ArrayDeque(source))
  };
}
const $d_scm_Queue$ = new $TypeData().initClass({
  scm_Queue$: 0
}, false, "scala.collection.mutable.Queue$", {
  scm_Queue$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_Queue$.prototype.$classData = $d_scm_Queue$;
let $n_scm_Queue$ = (void 0);
function $m_scm_Queue$() {
  if ((!$n_scm_Queue$)) {
    $n_scm_Queue$ = new $c_scm_Queue$()
  };
  return $n_scm_Queue$
}
const $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T = (function($thiz, clazz) {
  return (clazz.isArray__Z() ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.getComponentType__jl_Class())) + "]") : clazz.getName__T())
});
const $f_s_reflect_ClassTag__equals__O__Z = (function($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    const x$2 = $thiz.runtimeClass__jl_Class();
    const x$3 = $as_s_reflect_ClassTag(x).runtimeClass__jl_Class();
    return (x$2 === x$3)
  } else {
    return false
  }
});
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_reflect_ClassTag)))
}
function $as_s_reflect_ClassTag(obj) {
  return (($is_s_reflect_ClassTag(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.reflect.ClassTag"))
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_reflect_ClassTag)))
}
function $asArrayOf_s_reflect_ClassTag(obj, depth) {
  return (($isArrayOf_s_reflect_ClassTag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.reflect.ClassTag;", depth))
}
class $c_sr_ScalaRunTime$$anon$1 extends $c_sc_AbstractIterator {
  constructor(x$2) {
    super();
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = x$2.productArity__I()
  };
  hasNext__Z() {
    return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
  };
  next__O() {
    const result = this.sr_ScalaRunTime$$anon$1__f_x$2.productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
    this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
    return result
  };
}
const $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
class $c_sjs_js_WrappedArray$ extends $c_O {
  apply__sci_Seq__O(elems) {
    return this.from__sc_IterableOnce__sjs_js_WrappedArray(elems)
  };
  newBuilder__scm_Builder() {
    return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray())
  };
  from__sc_IterableOnce__sjs_js_WrappedArray(source) {
    const this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
    return $as_sjs_js_WrappedArray($as_scm_Builder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source)).result__O())
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sjs_js_WrappedArray(source)
  };
}
const $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
let $n_sjs_js_WrappedArray$ = (void 0);
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
class $c_sjsr_WrappedVarArgs$ extends $c_O {
  apply__sci_Seq__O(elems) {
    return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(elems)
  };
  from__sc_IterableOnce__sjsr_WrappedVarArgs(source) {
    const this$1 = this.newBuilder__scm_Builder();
    return $as_sjsr_WrappedVarArgs($as_scm_Builder(this$1.addAll__sc_IterableOnce__scm_Growable(source)).result__O())
  };
  newBuilder__scm_Builder() {
    const array = [];
    const this$4 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    const f = new $c_sjsr_AnonFunction1(((this$2) => ((x$1$2) => {
      const x$1 = $as_sjs_js_WrappedArray(x$1$2);
      return new $c_sjsr_WrappedVarArgs(x$1.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$4, f)
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(source)
  };
}
const $d_sjsr_WrappedVarArgs$ = new $TypeData().initClass({
  sjsr_WrappedVarArgs$: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs$", {
  sjsr_WrappedVarArgs$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs$.prototype.$classData = $d_sjsr_WrappedVarArgs$;
let $n_sjsr_WrappedVarArgs$ = (void 0);
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$()
  };
  return $n_sjsr_WrappedVarArgs$
}
const $ct_s_xml_NamespaceBinding__T__T__s_xml_NamespaceBinding__ = (function($thiz, prefix, uri, parent) {
  $thiz.s_xml_NamespaceBinding__f_prefix = prefix;
  $thiz.s_xml_NamespaceBinding__f_uri = uri;
  $thiz.s_xml_NamespaceBinding__f_parent = parent;
  if ((prefix === "")) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "zero length prefix not allowed")
  };
  return $thiz
});
class $c_s_xml_NamespaceBinding extends $c_O {
  constructor() {
    super();
    this.s_xml_NamespaceBinding__f_prefix = null;
    this.s_xml_NamespaceBinding__f_uri = null;
    this.s_xml_NamespaceBinding__f_parent = null
  };
  hashCode__I() {
    const x = this.basisForHashCode__sc_Seq();
    return $m_sr_Statics$().anyHash__O__I(x)
  };
  equals__O__Z(other) {
    return $p_s_xml_Equality__doComparison__O__Z__Z(this, other, false)
  };
  canEqual__O__Z(other) {
    return (other instanceof $c_s_xml_NamespaceBinding)
  };
  strict_$eq$eq__s_xml_Equality__Z(other) {
    if ((other instanceof $c_s_xml_NamespaceBinding)) {
      const x2 = $as_s_xml_NamespaceBinding(other);
      if (((this.s_xml_NamespaceBinding__f_prefix === x2.s_xml_NamespaceBinding__f_prefix) && (this.s_xml_NamespaceBinding__f_uri === x2.s_xml_NamespaceBinding__f_uri))) {
        const x = this.s_xml_NamespaceBinding__f_parent;
        const x$2 = x2.s_xml_NamespaceBinding__f_parent;
        return ((x === null) ? (x$2 === null) : $p_s_xml_Equality__doComparison__O__Z__Z(x, x$2, false))
      } else {
        return false
      }
    } else {
      return false
    }
  };
  basisForHashCode__sc_Seq() {
    const this$4 = $m_sci_List$();
    const array = [this.s_xml_NamespaceBinding__f_prefix, this.s_xml_NamespaceBinding__f_uri, this.s_xml_NamespaceBinding__f_parent];
    const elems = new $c_sjsr_WrappedVarArgs(array);
    return this$4.from__sc_IterableOnce__sci_List(elems)
  };
  productPrefix__T() {
    return "NamespaceBinding"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.s_xml_NamespaceBinding__f_prefix;
        break
      }
      case 1: {
        return this.s_xml_NamespaceBinding__f_uri;
        break
      }
      case 2: {
        return this.s_xml_NamespaceBinding__f_parent;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
}
function $as_s_xml_NamespaceBinding(obj) {
  return (((obj instanceof $c_s_xml_NamespaceBinding) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.xml.NamespaceBinding"))
}
function $isArrayOf_s_xml_NamespaceBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_xml_NamespaceBinding)))
}
function $asArrayOf_s_xml_NamespaceBinding(obj, depth) {
  return (($isArrayOf_s_xml_NamespaceBinding(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.xml.NamespaceBinding;", depth))
}
const $p_Lbon_jo_html_InDom$simple__me$lzycompute__Lorg_scalajs_dom_raw_HTMLElement = (function($thiz) {
  if ((!$thiz.Lbon_jo_html_InDom$simple__f_bitmap$0)) {
    $thiz.Lbon_jo_html_InDom$simple__f_me = $f_Lbon_jo_html_InDom__me__Lorg_scalajs_dom_raw_HTMLElement($thiz);
    $thiz.Lbon_jo_html_InDom$simple__f_bitmap$0 = true
  };
  return $thiz.Lbon_jo_html_InDom$simple__f_me
});
class $c_Lbon_jo_html_InDom$simple extends $c_O {
  constructor(node) {
    super();
    this.Lbon_jo_html_InDom$simple__f_node = null;
    this.Lbon_jo_html_InDom$simple__f_me = null;
    this.Lbon_jo_html_InDom$simple__f_bitmap$0 = false;
    this.Lbon_jo_html_InDom$simple__f_node = node
  };
  me__Lorg_scalajs_dom_raw_HTMLElement() {
    return ((!this.Lbon_jo_html_InDom$simple__f_bitmap$0) ? $p_Lbon_jo_html_InDom$simple__me$lzycompute__Lorg_scalajs_dom_raw_HTMLElement(this) : this.Lbon_jo_html_InDom$simple__f_me)
  };
  id__T() {
    return this.Lbon_jo_html_InDom$simple__f_node.$bslash$at__T__T("id")
  };
}
const $d_Lbon_jo_html_InDom$simple = new $TypeData().initClass({
  Lbon_jo_html_InDom$simple: 0
}, false, "bon.jo.html.InDom$simple", {
  Lbon_jo_html_InDom$simple: 1,
  O: 1,
  Lbon_jo_html_InDom: 1,
  Lbon_jo_html_IdView: 1,
  Lbon_jo_html_XmlHtmlView: 1,
  Lbon_jo_html_BridgedView: 1,
  Lbon_jo_html_\uff3fView: 1
});
$c_Lbon_jo_html_InDom$simple.prototype.$classData = $d_Lbon_jo_html_InDom$simple;
class $c_Lbon_jo_phy_Phy$P extends $c_Lbon_jo_phy_Phy$XYT {
  constructor(x, y, t) {
    super();
    this.Lbon_jo_phy_Phy$P__f_x = 0.0;
    this.Lbon_jo_phy_Phy$P__f_y = 0.0;
    this.Lbon_jo_phy_Phy$P__f_t = 0.0;
    this.Lbon_jo_phy_Phy$P__f_x = x;
    this.Lbon_jo_phy_Phy$P__f_y = y;
    this.Lbon_jo_phy_Phy$P__f_t = t;
    $ct_Lbon_jo_phy_Phy$XYT__Lbon_jo_phy_Phy$Fact__(this, $m_Lbon_jo_phy_Phy$().Lbon_jo_phy_Phy$__f_pfact)
  };
  x__F() {
    return this.Lbon_jo_phy_Phy$P__f_x
  };
  y__F() {
    return this.Lbon_jo_phy_Phy$P__f_y
  };
  productPrefix__T() {
    return "P"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lbon_jo_phy_Phy$P__f_x;
        break
      }
      case 1: {
        return this.Lbon_jo_phy_Phy$P__f_y;
        break
      }
      case 2: {
        return this.Lbon_jo_phy_Phy$P__f_t;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("P");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const fv = this.Lbon_jo_phy_Phy$P__f_x;
    const this$1 = $m_sr_Statics$();
    const data$1 = this$1.doubleHash__D__I(fv);
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const fv$1 = this.Lbon_jo_phy_Phy$P__f_y;
    const this$2 = $m_sr_Statics$();
    const data$2 = this$2.doubleHash__D__I(fv$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const fv$2 = this.Lbon_jo_phy_Phy$P__f_t;
    const this$3 = $m_sr_Statics$();
    const data$3 = this$3.doubleHash__D__I(fv$2);
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$4, 3)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lbon_jo_phy_Phy$P)) {
      const P$1 = $as_Lbon_jo_phy_Phy$P(x$1);
      return (((this.Lbon_jo_phy_Phy$P__f_x === P$1.Lbon_jo_phy_Phy$P__f_x) && (this.Lbon_jo_phy_Phy$P__f_y === P$1.Lbon_jo_phy_Phy$P__f_y)) && (this.Lbon_jo_phy_Phy$P__f_t === P$1.Lbon_jo_phy_Phy$P__f_t))
    } else {
      return false
    }
  };
}
function $as_Lbon_jo_phy_Phy$P(obj) {
  return (((obj instanceof $c_Lbon_jo_phy_Phy$P) || (obj === null)) ? obj : $throwClassCastException(obj, "bon.jo.phy.Phy$P"))
}
function $isArrayOf_Lbon_jo_phy_Phy$P(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lbon_jo_phy_Phy$P)))
}
function $asArrayOf_Lbon_jo_phy_Phy$P(obj, depth) {
  return (($isArrayOf_Lbon_jo_phy_Phy$P(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lbon.jo.phy.Phy$P;", depth))
}
const $d_Lbon_jo_phy_Phy$P = new $TypeData().initClass({
  Lbon_jo_phy_Phy$P: 0
}, false, "bon.jo.phy.Phy$P", {
  Lbon_jo_phy_Phy$P: 1,
  Lbon_jo_phy_Phy$XYT: 1,
  O: 1,
  Lbon_jo_phy_Phy$\uff3fXYT: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lbon_jo_phy_Phy$P.prototype.$classData = $d_Lbon_jo_phy_Phy$P;
class $c_Lbon_jo_phy_PointDynamicColor extends $c_Lbon_jo_phy_Phy$PointDynamicImpl {
  constructor(p, v, a, c) {
    super();
    this.Lbon_jo_phy_PointDynamicColor__f_c = null;
    this.Lbon_jo_phy_PointDynamicColor__f_c = c;
    $ct_Lbon_jo_phy_Phy$PointDynamicImpl__Lbon_jo_phy_Phy$P__Lbon_jo_phy_Phy$V__Lbon_jo_phy_Phy$A__(this, p, v, a)
  };
}
function $as_Lbon_jo_phy_PointDynamicColor(obj) {
  return (((obj instanceof $c_Lbon_jo_phy_PointDynamicColor) || (obj === null)) ? obj : $throwClassCastException(obj, "bon.jo.phy.PointDynamicColor"))
}
function $isArrayOf_Lbon_jo_phy_PointDynamicColor(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lbon_jo_phy_PointDynamicColor)))
}
function $asArrayOf_Lbon_jo_phy_PointDynamicColor(obj, depth) {
  return (($isArrayOf_Lbon_jo_phy_PointDynamicColor(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lbon.jo.phy.PointDynamicColor;", depth))
}
const $d_Lbon_jo_phy_PointDynamicColor = new $TypeData().initClass({
  Lbon_jo_phy_PointDynamicColor: 0
}, false, "bon.jo.phy.PointDynamicColor", {
  Lbon_jo_phy_PointDynamicColor: 1,
  Lbon_jo_phy_Phy$PointDynamicImpl: 1,
  O: 1,
  Lbon_jo_phy_Phy$PointDynamic: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lbon_jo_phy_PointDynamicColor.prototype.$classData = $d_Lbon_jo_phy_PointDynamicColor;
const $ct_jl_ArrayIndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_ArrayIndexOutOfBoundsException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
function $as_jl_ArrayIndexOutOfBoundsException(obj) {
  return (((obj instanceof $c_jl_ArrayIndexOutOfBoundsException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ArrayIndexOutOfBoundsException"))
}
function $isArrayOf_jl_ArrayIndexOutOfBoundsException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ArrayIndexOutOfBoundsException)))
}
function $asArrayOf_jl_ArrayIndexOutOfBoundsException(obj, depth) {
  return (($isArrayOf_jl_ArrayIndexOutOfBoundsException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ArrayIndexOutOfBoundsException;", depth))
}
const $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_NumberFormatException = new $TypeData().initClass({
  jl_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", {
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NumberFormatException.prototype.$classData = $d_jl_NumberFormatException;
const $ct_jl_StringIndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_StringIndexOutOfBoundsException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
const $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass({
  jl_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", {
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringIndexOutOfBoundsException.prototype.$classData = $d_jl_StringIndexOutOfBoundsException;
class $c_ju_FormatterClosedException extends $c_jl_IllegalStateException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
const $d_ju_FormatterClosedException = new $TypeData().initClass({
  ju_FormatterClosedException: 0
}, false, "java.util.FormatterClosedException", {
  ju_FormatterClosedException: 1,
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_FormatterClosedException.prototype.$classData = $d_ju_FormatterClosedException;
class $c_ju_IllegalFormatException extends $c_jl_IllegalArgumentException {
}
class $c_s_None$ extends $c_s_Option {
  get__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get")
  };
  productPrefix__T() {
    return "None"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    return 2433880
  };
  toString__T() {
    return "None"
  };
  get__O() {
    this.get__E()
  };
}
const $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
let $n_s_None$ = (void 0);
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
class $c_s_Some extends $c_s_Option {
  constructor(value) {
    super();
    this.s_Some__f_value = null;
    this.s_Some__f_value = value
  };
  get__O() {
    return this.s_Some__f_value
  };
  productPrefix__T() {
    return "Some"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_Some)) {
      const Some$1 = $as_s_Some(x$1);
      return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, Some$1.s_Some__f_value)
    } else {
      return false
    }
  };
}
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"))
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth))
}
const $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
class $c_sc_AbstractIterable extends $c_O {
  iterableFactory__sc_IterableFactory() {
    return $m_sc_Iterable$()
  };
  className__T() {
    return this.stringPrefix__T()
  };
  stringPrefix__T() {
    return "Iterable"
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $as_sc_IterableOps(this.iterableFactory__sc_IterableFactory().from__sc_IterableOnce__O(coll))
  };
  newSpecificBuilder__scm_Builder() {
    return this.iterableFactory__sc_IterableFactory().newBuilder__scm_Builder()
  };
  head__O() {
    return this.iterator__sc_Iterator().next__O()
  };
  filter__F1__O(pred) {
    return $f_sc_IterableOps__filter__F1__O(this, pred)
  };
  filterNot__F1__O(pred) {
    return $f_sc_IterableOps__filterNot__F1__O(this, pred)
  };
  drop__I__O(n) {
    return $f_sc_IterableOps__drop__I__O(this, n)
  };
  tail__O() {
    return $f_sc_IterableOps__tail__O(this)
  };
  foreach__F1__V(f) {
    $f_sc_IterableOnceOps__foreach__F1__V(this, f)
  };
  forall__F1__Z(p) {
    return $f_sc_IterableOnceOps__forall__F1__Z(this, p)
  };
  exists__F1__Z(p) {
    return $f_sc_IterableOnceOps__exists__F1__Z(this, p)
  };
  isEmpty__Z() {
    return $f_sc_IterableOnceOps__isEmpty__Z(this)
  };
  copyToArray__O__I__I(xs, start) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I(this, xs, start)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  toList__sci_List() {
    return $m_sci_List$().from__sc_IterableOnce__sci_List(this)
  };
  toArray__s_reflect_ClassTag__O(evidence$2) {
    return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2)
  };
  knownSize__I() {
    return (-1)
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return this.fromSpecific__sc_IterableOnce__sc_IterableOps(coll)
  };
}
class $c_sc_IndexedSeqView$IndexedSeqViewIterator extends $c_sc_AbstractIterator {
  constructor(self) {
    super();
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = self.length__I()
  };
  knownSize__I() {
    return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder
  };
  hasNext__Z() {
    return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder > 0)
  };
  next__O() {
    if (this.hasNext__Z()) {
      const r = this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self.apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder) | 0);
      return r
    } else {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
      const b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder - n) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = ((b < 0) ? 0 : b)
    };
    return this
  };
}
const $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass({
  sc_IndexedSeqView$IndexedSeqViewIterator: 0
}, false, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", {
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.$classData = $d_sc_IndexedSeqView$IndexedSeqViewIterator;
class $c_sc_Iterator$$anon$21 extends $c_scm_ImmutableBuilder {
  constructor() {
    super();
    $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty)
  };
  addOne__O__sc_Iterator$$anon$21(elem) {
    const this$3 = $as_sc_Iterator(this.scm_ImmutableBuilder__f_elems);
    const xs = new $c_sjsr_AnonFunction0(((this$1, elem$1) => (() => {
      $m_sc_Iterator$();
      return new $c_sc_Iterator$$anon$20(elem$1)
    }))(this, elem));
    this.scm_ImmutableBuilder__f_elems = this$3.concat__F0__sc_Iterator(xs);
    return this
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sc_Iterator$$anon$21(elem)
  };
}
const $d_sc_Iterator$$anon$21 = new $TypeData().initClass({
  sc_Iterator$$anon$21: 0
}, false, "scala.collection.Iterator$$anon$21", {
  sc_Iterator$$anon$21: 1,
  scm_ImmutableBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sc_Iterator$$anon$21.prototype.$classData = $d_sc_Iterator$$anon$21;
const $f_sc_MapOps__getOrElse__O__F0__O = (function($thiz, key, default$1) {
  const x1 = $thiz.get__O__s_Option(key);
  if ((x1 instanceof $c_s_Some)) {
    const x2 = $as_s_Some(x1);
    const v = x2.s_Some__f_value;
    return v
  } else {
    const x = $m_s_None$();
    if ((x === x1)) {
      return default$1.apply__O()
    } else {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sc_MapOps__default__O__O = (function($thiz, key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
});
const $f_sc_MapOps__map__F1__sc_IterableOps = (function($thiz, f) {
  return $as_sc_IterableOps($thiz.mapFactory__sc_MapFactory().from__sc_IterableOnce__O($ct_sc_View$Map__sc_IterableOps__F1__(new $c_sc_View$Map(), $thiz, f)))
});
const $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function($thiz, sb, start, sep, end) {
  const this$2 = $thiz.iterator__sc_Iterator();
  const f = new $c_sjsr_AnonFunction1(((this$1) => ((x0$1$2) => {
    const x0$1 = $as_T2(x0$1$2);
    if ((x0$1 !== null)) {
      const k = x0$1.T2__f__1;
      const v = x0$1.T2__f__2;
      return ((k + " -> ") + v)
    } else {
      throw new $c_s_MatchError(x0$1)
    }
  }))($thiz));
  const this$3 = new $c_sc_Iterator$$anon$9(this$2, f);
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this$3, sb, start, sep, end)
});
const $f_sc_StrictOptimizedSeqOps__appended__O__O = (function($thiz, elem) {
  const b = $thiz.iterableFactory__sc_SeqFactory().newBuilder__scm_Builder();
  if (($thiz.knownSize__I() >= 0)) {
    b.sizeHint__I__V(((1 + $thiz.length__I()) | 0))
  };
  b.addAll__sc_IterableOnce__scm_Growable($thiz);
  b.addOne__O__scm_Growable(elem);
  return b.result__O()
});
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)))
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"))
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)))
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth))
}
class $c_sci_Map$Map2$$anon$1 extends $c_sci_Map$Map2$Map2Iterator {
  constructor(outer) {
    super();
    $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer)
  };
}
const $d_sci_Map$Map2$$anon$1 = new $TypeData().initClass({
  sci_Map$Map2$$anon$1: 0
}, false, "scala.collection.immutable.Map$Map2$$anon$1", {
  sci_Map$Map2$$anon$1: 1,
  sci_Map$Map2$Map2Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map2$$anon$1.prototype.$classData = $d_sci_Map$Map2$$anon$1;
class $c_sci_Map$Map3$$anon$4 extends $c_sci_Map$Map3$Map3Iterator {
  constructor(outer) {
    super();
    $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer)
  };
}
const $d_sci_Map$Map3$$anon$4 = new $TypeData().initClass({
  sci_Map$Map3$$anon$4: 0
}, false, "scala.collection.immutable.Map$Map3$$anon$4", {
  sci_Map$Map3$$anon$4: 1,
  sci_Map$Map3$Map3Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map3$$anon$4.prototype.$classData = $d_sci_Map$Map3$$anon$4;
class $c_sci_Map$Map4$$anon$7 extends $c_sci_Map$Map4$Map4Iterator {
  constructor(outer) {
    super();
    $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer)
  };
}
const $d_sci_Map$Map4$$anon$7 = new $TypeData().initClass({
  sci_Map$Map4$$anon$7: 0
}, false, "scala.collection.immutable.Map$Map4$$anon$7", {
  sci_Map$Map4$$anon$7: 1,
  sci_Map$Map4$Map4Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map4$$anon$7.prototype.$classData = $d_sci_Map$Map4$$anon$7;
const $p_sci_VectorBuilder__advanceToNextBlockIfNecessary__V = (function($thiz) {
  if (($thiz.sci_VectorBuilder__f_lo >= $thiz.sci_VectorBuilder__f_display0.u.length)) {
    const newBlockIndex = ((32 + $thiz.sci_VectorBuilder__f_blockIndex) | 0);
    const xor = ($thiz.sci_VectorBuilder__f_blockIndex ^ newBlockIndex);
    $f_sci_VectorPointer__gotoNextBlockStartWritable__I__I__V($thiz, newBlockIndex, xor);
    $thiz.sci_VectorBuilder__f_blockIndex = newBlockIndex;
    $thiz.sci_VectorBuilder__f_lo = 0
  }
});
class $c_sci_VectorBuilder extends $c_O {
  constructor() {
    super();
    this.sci_VectorBuilder__f_blockIndex = 0;
    this.sci_VectorBuilder__f_lo = 0;
    this.sci_VectorBuilder__f_depth = 0;
    this.sci_VectorBuilder__f_display0 = null;
    this.sci_VectorBuilder__f_display1 = null;
    this.sci_VectorBuilder__f_display2 = null;
    this.sci_VectorBuilder__f_display3 = null;
    this.sci_VectorBuilder__f_display4 = null;
    this.sci_VectorBuilder__f_display5 = null;
    this.sci_VectorBuilder__f_display0 = $newArrayObject($d_O.getArrayOf(), [32]);
    this.sci_VectorBuilder__f_depth = 1;
    this.sci_VectorBuilder__f_blockIndex = 0;
    this.sci_VectorBuilder__f_lo = 0
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  depth__I() {
    return this.sci_VectorBuilder__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_VectorBuilder__f_depth = x$1
  };
  display0__AO() {
    return this.sci_VectorBuilder__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_VectorBuilder__f_display0 = x$1
  };
  display1__AAO() {
    return this.sci_VectorBuilder__f_display1
  };
  display1_$eq__AAO__V(x$1) {
    this.sci_VectorBuilder__f_display1 = x$1
  };
  display2__AAAO() {
    return this.sci_VectorBuilder__f_display2
  };
  display2_$eq__AAAO__V(x$1) {
    this.sci_VectorBuilder__f_display2 = x$1
  };
  display3__AAAAO() {
    return this.sci_VectorBuilder__f_display3
  };
  display3_$eq__AAAAO__V(x$1) {
    this.sci_VectorBuilder__f_display3 = x$1
  };
  display4__AAAAAO() {
    return this.sci_VectorBuilder__f_display4
  };
  display4_$eq__AAAAAO__V(x$1) {
    this.sci_VectorBuilder__f_display4 = x$1
  };
  display5__AAAAAAO() {
    return this.sci_VectorBuilder__f_display5
  };
  display5_$eq__AAAAAAO__V(x$1) {
    this.sci_VectorBuilder__f_display5 = x$1
  };
  size__I() {
    return ((this.sci_VectorBuilder__f_blockIndex + this.sci_VectorBuilder__f_lo) | 0)
  };
  addOne__O__sci_VectorBuilder(elem) {
    $p_sci_VectorBuilder__advanceToNextBlockIfNecessary__V(this);
    this.sci_VectorBuilder__f_display0.set(this.sci_VectorBuilder__f_lo, elem);
    this.sci_VectorBuilder__f_lo = ((1 + this.sci_VectorBuilder__f_lo) | 0);
    return this
  };
  addAll__sc_IterableOnce__sci_VectorBuilder(xs) {
    const it = xs.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      $p_sci_VectorBuilder__advanceToNextBlockIfNecessary__V(this);
      this.sci_VectorBuilder__f_lo = ((this.sci_VectorBuilder__f_lo + it.copyToArray__O__I__I__I(this.sci_VectorBuilder__f_display0, this.sci_VectorBuilder__f_lo, ((this.sci_VectorBuilder__f_display0.u.length - this.sci_VectorBuilder__f_lo) | 0))) | 0)
    };
    return this
  };
  result__sci_Vector() {
    const size = this.size__I();
    if ((size === 0)) {
      const this$1 = $m_sci_Vector$();
      return this$1.sci_Vector$__f_NIL
    };
    const s = new $c_sci_Vector(0, size, 0);
    const depth = this.sci_VectorBuilder__f_depth;
    $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
    if ((this.sci_VectorBuilder__f_depth > 1)) {
      const xor = (((-1) + size) | 0);
      $f_sci_VectorPointer__gotoPos__I__I__V(s, 0, xor)
    };
    return s
  };
  result__O() {
    return this.result__sci_Vector()
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_VectorBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_VectorBuilder(elem)
  };
}
const $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
const $p_sci_VectorIterator__advanceToNextBlockIfNecessary__V = (function($thiz) {
  if (($thiz.sci_VectorIterator__f_lo === $thiz.sci_VectorIterator__f_endLo)) {
    if (((($thiz.sci_VectorIterator__f_blockIndex + $thiz.sci_VectorIterator__f_lo) | 0) < $thiz.sci_VectorIterator__f_endIndex)) {
      const newBlockIndex = ((32 + $thiz.sci_VectorIterator__f_blockIndex) | 0);
      const xor = ($thiz.sci_VectorIterator__f_blockIndex ^ newBlockIndex);
      $f_sci_VectorPointer__gotoNextBlockStart__I__I__V($thiz, newBlockIndex, xor);
      $thiz.sci_VectorIterator__f_blockIndex = newBlockIndex;
      const a = (($thiz.sci_VectorIterator__f_endIndex - $thiz.sci_VectorIterator__f_blockIndex) | 0);
      $thiz.sci_VectorIterator__f_endLo = ((a < 32) ? a : 32);
      $thiz.sci_VectorIterator__f_lo = 0
    } else {
      $thiz.sci_VectorIterator__f__hasNext = false
    }
  }
});
class $c_sci_VectorIterator extends $c_sc_AbstractIterator {
  constructor(_startIndex, endIndex) {
    super();
    this.sci_VectorIterator__f_endIndex = 0;
    this.sci_VectorIterator__f_blockIndex = 0;
    this.sci_VectorIterator__f_lo = 0;
    this.sci_VectorIterator__f_endLo = 0;
    this.sci_VectorIterator__f__hasNext = false;
    this.sci_VectorIterator__f_depth = 0;
    this.sci_VectorIterator__f_display0 = null;
    this.sci_VectorIterator__f_display1 = null;
    this.sci_VectorIterator__f_display2 = null;
    this.sci_VectorIterator__f_display3 = null;
    this.sci_VectorIterator__f_display4 = null;
    this.sci_VectorIterator__f_display5 = null;
    this.sci_VectorIterator__f_endIndex = endIndex;
    this.sci_VectorIterator__f_blockIndex = ((-32) & _startIndex);
    this.sci_VectorIterator__f_lo = (31 & _startIndex);
    const a = ((this.sci_VectorIterator__f_endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
    this.sci_VectorIterator__f_endLo = ((a < 32) ? a : 32);
    this.sci_VectorIterator__f__hasNext = (((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0) < this.sci_VectorIterator__f_endIndex)
  };
  depth__I() {
    return this.sci_VectorIterator__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_VectorIterator__f_depth = x$1
  };
  display0__AO() {
    return this.sci_VectorIterator__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_VectorIterator__f_display0 = x$1
  };
  display1__AAO() {
    return this.sci_VectorIterator__f_display1
  };
  display1_$eq__AAO__V(x$1) {
    this.sci_VectorIterator__f_display1 = x$1
  };
  display2__AAAO() {
    return this.sci_VectorIterator__f_display2
  };
  display2_$eq__AAAO__V(x$1) {
    this.sci_VectorIterator__f_display2 = x$1
  };
  display3__AAAAO() {
    return this.sci_VectorIterator__f_display3
  };
  display3_$eq__AAAAO__V(x$1) {
    this.sci_VectorIterator__f_display3 = x$1
  };
  display4__AAAAAO() {
    return this.sci_VectorIterator__f_display4
  };
  display4_$eq__AAAAAO__V(x$1) {
    this.sci_VectorIterator__f_display4 = x$1
  };
  display5__AAAAAAO() {
    return this.sci_VectorIterator__f_display5
  };
  display5_$eq__AAAAAAO__V(x$1) {
    this.sci_VectorIterator__f_display5 = x$1
  };
  hasNext__Z() {
    return this.sci_VectorIterator__f__hasNext
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      const value = this.sci_VectorIterator__f_lo;
      const hi = (value >> 31);
      const hi$1 = (n >> 31);
      const lo = ((value + n) | 0);
      const hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
      const value$1 = this.sci_VectorIterator__f_blockIndex;
      const hi$3 = (value$1 >> 31);
      const lo$1 = ((value$1 + lo) | 0);
      const hi$4 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ value$1)) ? ((1 + ((hi$3 + hi$2) | 0)) | 0) : ((hi$3 + hi$2) | 0));
      const value$2 = this.sci_VectorIterator__f_endIndex;
      const hi$5 = (value$2 >> 31);
      if (((hi$4 === hi$5) ? (((-2147483648) ^ lo$1) < ((-2147483648) ^ value$2)) : (hi$4 < hi$5))) {
        this.sci_VectorIterator__f_lo = lo;
        if ((this.sci_VectorIterator__f_lo >= 32)) {
          this.sci_VectorIterator__f_blockIndex = ((-32) & ((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0));
          const index = this.sci_VectorIterator__f_blockIndex;
          const depth = this.sci_VectorIterator__f_depth;
          $f_sci_VectorPointer__gotoNewBlockStart__I__I__V(this, index, depth);
          const a = ((this.sci_VectorIterator__f_endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
          this.sci_VectorIterator__f_endLo = ((a < 32) ? a : 32);
          this.sci_VectorIterator__f_lo = (31 & this.sci_VectorIterator__f_lo)
        }
      } else {
        this.sci_VectorIterator__f__hasNext = false;
        this.sci_VectorIterator__f_endIndex = 0
      }
    };
    return this
  };
  next__O() {
    if ((!this.sci_VectorIterator__f__hasNext)) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "reached iterator end")
    };
    const res = this.sci_VectorIterator__f_display0.get(this.sci_VectorIterator__f_lo);
    this.sci_VectorIterator__f_lo = ((1 + this.sci_VectorIterator__f_lo) | 0);
    $p_sci_VectorIterator__advanceToNextBlockIfNecessary__V(this);
    return res
  };
  copyToArray__O__I__I__I(xs, start, len) {
    const xsLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
    const srcLen = this.remainingElementCount__I();
    const x = ((len < srcLen) ? len : srcLen);
    const y = ((xsLen - start) | 0);
    const x$1 = ((x < y) ? x : y);
    const totalToBeCopied = ((x$1 > 0) ? x$1 : 0);
    let totalCopied = 0;
    while ((this.sci_VectorIterator__f__hasNext && (totalCopied < totalToBeCopied))) {
      const _start = ((start + totalCopied) | 0);
      const srcLen$1 = ((this.sci_VectorIterator__f_endLo - this.sci_VectorIterator__f_lo) | 0);
      const len$1 = ((len - totalCopied) | 0);
      const x$2 = ((len$1 < srcLen$1) ? len$1 : srcLen$1);
      const y$1 = ((xsLen - _start) | 0);
      const x$3 = ((x$2 < y$1) ? x$2 : y$1);
      const toBeCopied = ((x$3 > 0) ? x$3 : 0);
      $m_s_Array$().copy__O__I__O__I__I__V(this.sci_VectorIterator__f_display0, this.sci_VectorIterator__f_lo, xs, _start, toBeCopied);
      totalCopied = ((totalCopied + toBeCopied) | 0);
      this.sci_VectorIterator__f_lo = ((this.sci_VectorIterator__f_lo + toBeCopied) | 0);
      $p_sci_VectorIterator__advanceToNextBlockIfNecessary__V(this)
    };
    return totalCopied
  };
  remainingElementCount__I() {
    const x = ((this.sci_VectorIterator__f_endIndex - ((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0)) | 0);
    return ((x > 0) ? x : 0)
  };
  knownSize__I() {
    return this.remainingElementCount__I()
  };
}
const $d_sci_VectorIterator = new $TypeData().initClass({
  sci_VectorIterator: 0
}, false, "scala.collection.immutable.VectorIterator", {
  sci_VectorIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorIterator.prototype.$classData = $d_sci_VectorIterator;
class $c_scm_HashMap$$anon$1 extends $c_scm_HashMap$HashMapIterator {
  constructor(outer) {
    super();
    $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer)
  };
  extract__scm_HashMap$Node__O(nd) {
    return new $c_T2(nd.scm_HashMap$Node__f__key, nd.scm_HashMap$Node__f__value)
  };
}
const $d_scm_HashMap$$anon$1 = new $TypeData().initClass({
  scm_HashMap$$anon$1: 0
}, false, "scala.collection.mutable.HashMap$$anon$1", {
  scm_HashMap$$anon$1: 1,
  scm_HashMap$HashMapIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_scm_HashMap$$anon$1.prototype.$classData = $d_scm_HashMap$$anon$1;
class $c_scm_HashMap$$anon$4 extends $c_scm_HashMap$HashMapIterator {
  constructor(outer) {
    super();
    $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer)
  };
  extract__scm_HashMap$Node__O(nd) {
    return nd
  };
}
const $d_scm_HashMap$$anon$4 = new $TypeData().initClass({
  scm_HashMap$$anon$4: 0
}, false, "scala.collection.mutable.HashMap$$anon$4", {
  scm_HashMap$$anon$4: 1,
  scm_HashMap$HashMapIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_scm_HashMap$$anon$4.prototype.$classData = $d_scm_HashMap$$anon$4;
class $c_s_reflect_ClassTag$GenericClassTag extends $c_O {
  constructor(runtimeClass) {
    super();
    this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = null;
    this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = runtimeClass
  };
  equals__O__Z(x) {
    return $f_s_reflect_ClassTag__equals__O__Z(this, x)
  };
  hashCode__I() {
    const x = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
    return $m_sr_Statics$().anyHash__O__I(x)
  };
  toString__T() {
    return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass)
  };
  runtimeClass__jl_Class() {
    return this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass
  };
  newArray__I__O(len) {
    const componentType = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
    return $m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, len)
  };
}
const $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().initClass({
  s_reflect_ClassTag$GenericClassTag: 0
}, false, "scala.reflect.ClassTag$GenericClassTag", {
  s_reflect_ClassTag$GenericClassTag: 1,
  O: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.$classData = $d_s_reflect_ClassTag$GenericClassTag;
class $c_s_xml_TopScope$ extends $c_s_xml_NamespaceBinding {
  constructor() {
    super();
    $ct_s_xml_NamespaceBinding__T__T__s_xml_NamespaceBinding__(this, null, null, null)
  };
  getURI__T__T(prefix1) {
    return ((prefix1 === $m_s_xml_XML$().s_xml_XML$__f_xml) ? $m_s_xml_XML$().s_xml_XML$__f_namespace : null)
  };
  toString__T() {
    return ""
  };
}
const $d_s_xml_TopScope$ = new $TypeData().initClass({
  s_xml_TopScope$: 0
}, false, "scala.xml.TopScope$", {
  s_xml_TopScope$: 1,
  s_xml_NamespaceBinding: 1,
  O: 1,
  s_xml_Equality: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
$c_s_xml_TopScope$.prototype.$classData = $d_s_xml_TopScope$;
let $n_s_xml_TopScope$ = (void 0);
function $m_s_xml_TopScope$() {
  if ((!$n_s_xml_TopScope$)) {
    $n_s_xml_TopScope$ = new $c_s_xml_TopScope$()
  };
  return $n_s_xml_TopScope$
}
class $c_Lbon_jo_phy_Phy$A extends $c_Lbon_jo_phy_Phy$XYT {
  constructor(x, y, t) {
    super();
    this.Lbon_jo_phy_Phy$A__f_x = 0.0;
    this.Lbon_jo_phy_Phy$A__f_y = 0.0;
    this.Lbon_jo_phy_Phy$A__f_t = 0.0;
    this.Lbon_jo_phy_Phy$A__f_x = x;
    this.Lbon_jo_phy_Phy$A__f_y = y;
    this.Lbon_jo_phy_Phy$A__f_t = t;
    $ct_Lbon_jo_phy_Phy$XYT__Lbon_jo_phy_Phy$Fact__(this, $m_Lbon_jo_phy_Phy$().Lbon_jo_phy_Phy$__f_afact)
  };
  x__F() {
    return this.Lbon_jo_phy_Phy$A__f_x
  };
  y__F() {
    return this.Lbon_jo_phy_Phy$A__f_y
  };
  $times__F__Lbon_jo_phy_Phy$V(t) {
    return new $c_Lbon_jo_phy_Phy$V($fround((this.Lbon_jo_phy_Phy$A__f_x * t)), $fround((this.Lbon_jo_phy_Phy$A__f_y * t)), 0.0)
  };
  productPrefix__T() {
    return "A"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lbon_jo_phy_Phy$A__f_x;
        break
      }
      case 1: {
        return this.Lbon_jo_phy_Phy$A__f_y;
        break
      }
      case 2: {
        return this.Lbon_jo_phy_Phy$A__f_t;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("A");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const fv = this.Lbon_jo_phy_Phy$A__f_x;
    const this$1 = $m_sr_Statics$();
    const data$1 = this$1.doubleHash__D__I(fv);
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const fv$1 = this.Lbon_jo_phy_Phy$A__f_y;
    const this$2 = $m_sr_Statics$();
    const data$2 = this$2.doubleHash__D__I(fv$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const fv$2 = this.Lbon_jo_phy_Phy$A__f_t;
    const this$3 = $m_sr_Statics$();
    const data$3 = this$3.doubleHash__D__I(fv$2);
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$4, 3)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lbon_jo_phy_Phy$A)) {
      const A$1 = $as_Lbon_jo_phy_Phy$A(x$1);
      return (((this.Lbon_jo_phy_Phy$A__f_x === A$1.Lbon_jo_phy_Phy$A__f_x) && (this.Lbon_jo_phy_Phy$A__f_y === A$1.Lbon_jo_phy_Phy$A__f_y)) && (this.Lbon_jo_phy_Phy$A__f_t === A$1.Lbon_jo_phy_Phy$A__f_t))
    } else {
      return false
    }
  };
}
function $as_Lbon_jo_phy_Phy$A(obj) {
  return (((obj instanceof $c_Lbon_jo_phy_Phy$A) || (obj === null)) ? obj : $throwClassCastException(obj, "bon.jo.phy.Phy$A"))
}
function $isArrayOf_Lbon_jo_phy_Phy$A(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lbon_jo_phy_Phy$A)))
}
function $asArrayOf_Lbon_jo_phy_Phy$A(obj, depth) {
  return (($isArrayOf_Lbon_jo_phy_Phy$A(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lbon.jo.phy.Phy$A;", depth))
}
const $d_Lbon_jo_phy_Phy$A = new $TypeData().initClass({
  Lbon_jo_phy_Phy$A: 0
}, false, "bon.jo.phy.Phy$A", {
  Lbon_jo_phy_Phy$A: 1,
  Lbon_jo_phy_Phy$XYT: 1,
  O: 1,
  Lbon_jo_phy_Phy$\uff3fXYT: 1,
  Lbon_jo_phy_dt: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lbon_jo_phy_Phy$A.prototype.$classData = $d_Lbon_jo_phy_Phy$A;
class $c_Lbon_jo_phy_Phy$V extends $c_Lbon_jo_phy_Phy$XYT {
  constructor(x, y, t) {
    super();
    this.Lbon_jo_phy_Phy$V__f_x = 0.0;
    this.Lbon_jo_phy_Phy$V__f_y = 0.0;
    this.Lbon_jo_phy_Phy$V__f_t = 0.0;
    this.Lbon_jo_phy_Phy$V__f_x = x;
    this.Lbon_jo_phy_Phy$V__f_y = y;
    this.Lbon_jo_phy_Phy$V__f_t = t;
    $ct_Lbon_jo_phy_Phy$XYT__Lbon_jo_phy_Phy$Fact__(this, $m_Lbon_jo_phy_Phy$().Lbon_jo_phy_Phy$__f_vfact)
  };
  x__F() {
    return this.Lbon_jo_phy_Phy$V__f_x
  };
  y__F() {
    return this.Lbon_jo_phy_Phy$V__f_y
  };
  $times__F__Lbon_jo_phy_Phy$P(t) {
    return new $c_Lbon_jo_phy_Phy$P($fround((this.Lbon_jo_phy_Phy$V__f_x * t)), $fround((this.Lbon_jo_phy_Phy$V__f_y * t)), 0.0)
  };
  productPrefix__T() {
    return "V"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lbon_jo_phy_Phy$V__f_x;
        break
      }
      case 1: {
        return this.Lbon_jo_phy_Phy$V__f_y;
        break
      }
      case 2: {
        return this.Lbon_jo_phy_Phy$V__f_t;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("V");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const fv = this.Lbon_jo_phy_Phy$V__f_x;
    const this$1 = $m_sr_Statics$();
    const data$1 = this$1.doubleHash__D__I(fv);
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const fv$1 = this.Lbon_jo_phy_Phy$V__f_y;
    const this$2 = $m_sr_Statics$();
    const data$2 = this$2.doubleHash__D__I(fv$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const fv$2 = this.Lbon_jo_phy_Phy$V__f_t;
    const this$3 = $m_sr_Statics$();
    const data$3 = this$3.doubleHash__D__I(fv$2);
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$4, 3)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lbon_jo_phy_Phy$V)) {
      const V$1 = $as_Lbon_jo_phy_Phy$V(x$1);
      return (((this.Lbon_jo_phy_Phy$V__f_x === V$1.Lbon_jo_phy_Phy$V__f_x) && (this.Lbon_jo_phy_Phy$V__f_y === V$1.Lbon_jo_phy_Phy$V__f_y)) && (this.Lbon_jo_phy_Phy$V__f_t === V$1.Lbon_jo_phy_Phy$V__f_t))
    } else {
      return false
    }
  };
}
function $as_Lbon_jo_phy_Phy$V(obj) {
  return (((obj instanceof $c_Lbon_jo_phy_Phy$V) || (obj === null)) ? obj : $throwClassCastException(obj, "bon.jo.phy.Phy$V"))
}
function $isArrayOf_Lbon_jo_phy_Phy$V(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lbon_jo_phy_Phy$V)))
}
function $asArrayOf_Lbon_jo_phy_Phy$V(obj, depth) {
  return (($isArrayOf_Lbon_jo_phy_Phy$V(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lbon.jo.phy.Phy$V;", depth))
}
const $d_Lbon_jo_phy_Phy$V = new $TypeData().initClass({
  Lbon_jo_phy_Phy$V: 0
}, false, "bon.jo.phy.Phy$V", {
  Lbon_jo_phy_Phy$V: 1,
  Lbon_jo_phy_Phy$XYT: 1,
  O: 1,
  Lbon_jo_phy_Phy$\uff3fXYT: 1,
  Lbon_jo_phy_dt: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lbon_jo_phy_Phy$V.prototype.$classData = $d_Lbon_jo_phy_Phy$V;
class $c_ju_DuplicateFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.ju_DuplicateFormatFlagsException__f_f = null;
    this.ju_DuplicateFormatFlagsException__f_f = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  getMessage__T() {
    return (("Flags = '" + this.ju_DuplicateFormatFlagsException__f_f) + "'")
  };
}
const $d_ju_DuplicateFormatFlagsException = new $TypeData().initClass({
  ju_DuplicateFormatFlagsException: 0
}, false, "java.util.DuplicateFormatFlagsException", {
  ju_DuplicateFormatFlagsException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_DuplicateFormatFlagsException.prototype.$classData = $d_ju_DuplicateFormatFlagsException;
class $c_ju_FormatFlagsConversionMismatchException extends $c_ju_IllegalFormatException {
  constructor(f, c) {
    super();
    this.ju_FormatFlagsConversionMismatchException__f_f = null;
    this.ju_FormatFlagsConversionMismatchException__f_c = 0;
    this.ju_FormatFlagsConversionMismatchException__f_f = f;
    this.ju_FormatFlagsConversionMismatchException__f_c = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  getMessage__T() {
    return ((("Conversion = " + $bC(this.ju_FormatFlagsConversionMismatchException__f_c)) + ", Flags = ") + this.ju_FormatFlagsConversionMismatchException__f_f)
  };
}
const $d_ju_FormatFlagsConversionMismatchException = new $TypeData().initClass({
  ju_FormatFlagsConversionMismatchException: 0
}, false, "java.util.FormatFlagsConversionMismatchException", {
  ju_FormatFlagsConversionMismatchException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_FormatFlagsConversionMismatchException.prototype.$classData = $d_ju_FormatFlagsConversionMismatchException;
class $c_ju_IllegalFormatCodePointException extends $c_ju_IllegalFormatException {
  constructor(c) {
    super();
    this.ju_IllegalFormatCodePointException__f_c = 0;
    this.ju_IllegalFormatCodePointException__f_c = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    const i = this.ju_IllegalFormatCodePointException__f_c;
    return ("Code point = 0x" + $as_T($uD((i >>> 0)).toString(16)))
  };
}
const $d_ju_IllegalFormatCodePointException = new $TypeData().initClass({
  ju_IllegalFormatCodePointException: 0
}, false, "java.util.IllegalFormatCodePointException", {
  ju_IllegalFormatCodePointException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_IllegalFormatCodePointException.prototype.$classData = $d_ju_IllegalFormatCodePointException;
class $c_ju_IllegalFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(c, arg) {
    super();
    this.ju_IllegalFormatConversionException__f_c = 0;
    this.ju_IllegalFormatConversionException__f_arg = null;
    this.ju_IllegalFormatConversionException__f_c = c;
    this.ju_IllegalFormatConversionException__f_arg = arg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((arg === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  getMessage__T() {
    const this$1 = this.ju_IllegalFormatConversionException__f_c;
    return (($as_T(String.fromCharCode(this$1)) + " != ") + this.ju_IllegalFormatConversionException__f_arg.getName__T())
  };
}
const $d_ju_IllegalFormatConversionException = new $TypeData().initClass({
  ju_IllegalFormatConversionException: 0
}, false, "java.util.IllegalFormatConversionException", {
  ju_IllegalFormatConversionException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_IllegalFormatConversionException.prototype.$classData = $d_ju_IllegalFormatConversionException;
class $c_ju_IllegalFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.ju_IllegalFormatFlagsException__f_f = null;
    this.ju_IllegalFormatFlagsException__f_f = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  getMessage__T() {
    return (("Flags = '" + this.ju_IllegalFormatFlagsException__f_f) + "'")
  };
}
const $d_ju_IllegalFormatFlagsException = new $TypeData().initClass({
  ju_IllegalFormatFlagsException: 0
}, false, "java.util.IllegalFormatFlagsException", {
  ju_IllegalFormatFlagsException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_IllegalFormatFlagsException.prototype.$classData = $d_ju_IllegalFormatFlagsException;
class $c_ju_IllegalFormatPrecisionException extends $c_ju_IllegalFormatException {
  constructor(p) {
    super();
    this.ju_IllegalFormatPrecisionException__f_p = 0;
    this.ju_IllegalFormatPrecisionException__f_p = p;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    const i = this.ju_IllegalFormatPrecisionException__f_p;
    return ("" + i)
  };
}
const $d_ju_IllegalFormatPrecisionException = new $TypeData().initClass({
  ju_IllegalFormatPrecisionException: 0
}, false, "java.util.IllegalFormatPrecisionException", {
  ju_IllegalFormatPrecisionException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_IllegalFormatPrecisionException.prototype.$classData = $d_ju_IllegalFormatPrecisionException;
class $c_ju_IllegalFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(w) {
    super();
    this.ju_IllegalFormatWidthException__f_w = 0;
    this.ju_IllegalFormatWidthException__f_w = w;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    const i = this.ju_IllegalFormatWidthException__f_w;
    return ("" + i)
  };
}
const $d_ju_IllegalFormatWidthException = new $TypeData().initClass({
  ju_IllegalFormatWidthException: 0
}, false, "java.util.IllegalFormatWidthException", {
  ju_IllegalFormatWidthException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_IllegalFormatWidthException.prototype.$classData = $d_ju_IllegalFormatWidthException;
class $c_ju_MissingFormatArgumentException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.ju_MissingFormatArgumentException__f_s = null;
    this.ju_MissingFormatArgumentException__f_s = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  getMessage__T() {
    return (("Format specifier '" + this.ju_MissingFormatArgumentException__f_s) + "'")
  };
}
const $d_ju_MissingFormatArgumentException = new $TypeData().initClass({
  ju_MissingFormatArgumentException: 0
}, false, "java.util.MissingFormatArgumentException", {
  ju_MissingFormatArgumentException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_MissingFormatArgumentException.prototype.$classData = $d_ju_MissingFormatArgumentException;
class $c_ju_MissingFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.ju_MissingFormatWidthException__f_s = null;
    this.ju_MissingFormatWidthException__f_s = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  getMessage__T() {
    return this.ju_MissingFormatWidthException__f_s
  };
}
const $d_ju_MissingFormatWidthException = new $TypeData().initClass({
  ju_MissingFormatWidthException: 0
}, false, "java.util.MissingFormatWidthException", {
  ju_MissingFormatWidthException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_MissingFormatWidthException.prototype.$classData = $d_ju_MissingFormatWidthException;
class $c_ju_UnknownFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.ju_UnknownFormatConversionException__f_s = null;
    this.ju_UnknownFormatConversionException__f_s = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  getMessage__T() {
    return (("Conversion = '" + this.ju_UnknownFormatConversionException__f_s) + "'")
  };
}
const $d_ju_UnknownFormatConversionException = new $TypeData().initClass({
  ju_UnknownFormatConversionException: 0
}, false, "java.util.UnknownFormatConversionException", {
  ju_UnknownFormatConversionException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_UnknownFormatConversionException.prototype.$classData = $d_ju_UnknownFormatConversionException;
const $f_sc_View__toString__T = (function($thiz) {
  return ($thiz.className__T() + "(<not computed>)")
});
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_View)))
}
function $as_sc_View(obj) {
  return (($is_sc_View(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.View"))
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_View)))
}
function $asArrayOf_sc_View(obj, depth) {
  return (($isArrayOf_sc_View(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.View;", depth))
}
const $f_scm_ArrayDequeOps__copySliceToArray__I__O__I__I__O = (function($thiz, srcStart, dest, destStart, maxItems) {
  const until = ((1 + $m_sr_ScalaRunTime$().array_length__O__I(dest)) | 0);
  if (((destStart < 0) || (destStart >= until))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((destStart + " is out of bounds (min 0, max ") + (((-1) + until) | 0)) + ")"))
  };
  const idx = $thiz.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
  const a = ((((($thiz.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx) | 0) & (((-1) + $thiz.scm_ArrayDeque__f_array.u.length) | 0)) - srcStart) | 0);
  const b = (($m_sr_ScalaRunTime$().array_length__O__I(dest) - destStart) | 0);
  const b$1 = ((a < b) ? a : b);
  const toCopy = ((maxItems < b$1) ? maxItems : b$1);
  if ((toCopy > 0)) {
    const idx$1 = $thiz.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
    const until$1 = ((($thiz.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx$1) | 0) & (((-1) + $thiz.scm_ArrayDeque__f_array.u.length) | 0));
    if (((srcStart < 0) || (srcStart >= until$1))) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((srcStart + " is out of bounds (min 0, max ") + (((-1) + until$1) | 0)) + ")"))
    };
    const startIdx = ((($thiz.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start + srcStart) | 0) & (((-1) + $thiz.scm_ArrayDeque__f_array.u.length) | 0));
    const b$2 = (($thiz.scm_ArrayDeque__f_array.u.length - startIdx) | 0);
    const block1 = ((toCopy < b$2) ? toCopy : b$2);
    $m_s_Array$().copy__O__I__O__I__I__V($thiz.scm_ArrayDeque__f_array, startIdx, dest, destStart, block1);
    const block2 = ((toCopy - block1) | 0);
    if ((block2 > 0)) {
      $m_s_Array$().copy__O__I__O__I__I__V($thiz.scm_ArrayDeque__f_array, 0, dest, ((destStart + block1) | 0), block2)
    }
  };
  return dest
});
class $c_s_reflect_AnyValManifest extends $c_O {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = null;
    this.s_reflect_AnyValManifest__f_hashCode = 0
  };
  toString__T() {
    return this.s_reflect_AnyValManifest__f_toString
  };
  equals__O__Z(that) {
    return (this === that)
  };
  hashCode__I() {
    return this.s_reflect_AnyValManifest__f_hashCode
  };
}
class $c_s_reflect_ManifestFactory$ClassTypeManifest extends $c_O {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null
  };
}
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.sjs_js_JavaScriptException__f_exception = null;
    this.sjs_js_JavaScriptException__f_exception = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $dp_toString__T(this.sjs_js_JavaScriptException__f_exception)
  };
  fillInStackTrace__jl_Throwable() {
    this.setStackTraceStateInternal__O__(this.sjs_js_JavaScriptException__f_exception);
    return this
  };
  productPrefix__T() {
    return "JavaScriptException"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.sjs_js_JavaScriptException__f_exception : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sjs_js_JavaScriptException)) {
      const JavaScriptException$1 = $as_sjs_js_JavaScriptException(x$1);
      const x = this.sjs_js_JavaScriptException__f_exception;
      const y = JavaScriptException$1.sjs_js_JavaScriptException__f_exception;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
    } else {
      return false
    }
  };
  setStackTraceStateInternal__O__(e) {
    this.jl_Throwable__f_stackTraceStateInternal = e
  };
}
function $as_sjs_js_JavaScriptException(obj) {
  return (((obj instanceof $c_sjs_js_JavaScriptException) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
const $d_sjs_js_JavaScriptException = new $TypeData().initClass({
  sjs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", {
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sjs_js_JavaScriptException.prototype.$classData = $d_sjs_js_JavaScriptException;
const $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq = (function($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.isEmpty__Z())) {
      return s
    } else {
      const temp$n = (((-1) + n) | 0);
      const temp$s = $as_sc_LinearSeq(s.tail__O());
      n = temp$n;
      s = temp$s
    }
  }
});
const $f_sc_StrictOptimizedMapOps__map__F1__sc_IterableOps = (function($thiz, f) {
  const b = $thiz.mapFactory__sc_MapFactory().newBuilder__scm_Builder();
  const it = $thiz.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    const elem = f.apply__O__O(it.next__O());
    b.addOne__O__scm_Growable(elem)
  };
  return $as_sc_IterableOps(b.result__O())
});
class $c_sci_MapKeyValueTupleHashIterator extends $c_sci_ChampBaseReverseIterator {
  constructor(rootNode) {
    super();
    this.sci_MapKeyValueTupleHashIterator__f_scala$collection$immutable$MapKeyValueTupleHashIterator$$hash = 0;
    this.sci_MapKeyValueTupleHashIterator__f_value = null;
    this.sci_MapKeyValueTupleHashIterator__f_key = null;
    $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
    this.sci_MapKeyValueTupleHashIterator__f_scala$collection$immutable$MapKeyValueTupleHashIterator$$hash = 0;
    this.sci_MapKeyValueTupleHashIterator__f_key = new $c_sci_MapKeyValueTupleHashIterator$$anon$1(this)
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(n) {
    return $f_s_Product2__productElement__I__O(this, n)
  };
  productIterator__sc_Iterator() {
    return new $c_s_Product$$anon$1(this)
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I(xs, start) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I(this, xs, start)
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  toArray__s_reflect_ClassTag__O(evidence$2) {
    return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2)
  };
  knownSize__I() {
    return (-1)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  _1__O() {
    return this.sci_MapKeyValueTupleHashIterator__f_key
  };
  _2__O() {
    return this.sci_MapKeyValueTupleHashIterator__f_value
  };
  productPrefix__T() {
    return "Tuple2"
  };
  next__sci_MapKeyValueTupleHashIterator() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    this.sci_MapKeyValueTupleHashIterator__f_scala$collection$immutable$MapKeyValueTupleHashIterator$$hash = this.sci_ChampBaseReverseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseReverseIterator__f_currentValueCursor);
    this.sci_MapKeyValueTupleHashIterator__f_value = $as_sci_MapNode(this.sci_ChampBaseReverseIterator__f_currentValueNode).getValue__I__O(this.sci_ChampBaseReverseIterator__f_currentValueCursor);
    this.sci_ChampBaseReverseIterator__f_currentValueCursor = (((-1) + this.sci_ChampBaseReverseIterator__f_currentValueCursor) | 0);
    return this
  };
  next__O() {
    return this.next__sci_MapKeyValueTupleHashIterator()
  };
}
const $d_sci_MapKeyValueTupleHashIterator = new $TypeData().initClass({
  sci_MapKeyValueTupleHashIterator: 0
}, false, "scala.collection.immutable.MapKeyValueTupleHashIterator", {
  sci_MapKeyValueTupleHashIterator: 1,
  sci_ChampBaseReverseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sci_MapKeyValueTupleHashIterator.prototype.$classData = $d_sci_MapKeyValueTupleHashIterator;
class $c_s_reflect_ManifestFactory$BooleanManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_Z.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_Z.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$ByteManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_B.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_B.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$CharManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_C.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_C.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$DoubleManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_D.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_D.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$FloatManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_F.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_F.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$IntManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_I.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_I.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$LongManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_J.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_J.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$PhantomManifest extends $c_s_reflect_ManifestFactory$ClassTypeManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0
  };
  toString__T() {
    return this.s_reflect_ManifestFactory$PhantomManifest__f_toString
  };
  equals__O__Z(that) {
    return (this === that)
  };
  hashCode__I() {
    return this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode
  };
}
class $c_s_reflect_ManifestFactory$ShortManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_S.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_S.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$UnitManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_V.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_jl_Void.getArrayOf(), [len])
  };
}
class $c_sc_AbstractView extends $c_sc_AbstractIterable {
  iterableFactory__sc_IterableFactory() {
    return $m_sc_View$()
  };
  toString__T() {
    return $f_sc_View__toString__T(this)
  };
  stringPrefix__T() {
    return "View"
  };
}
const $f_sc_Set__equals__O__Z = (function($thiz, that) {
  if ($is_sc_Set(that)) {
    const x2 = $as_sc_Set(that);
    return (($thiz === x2) || (($thiz.size__I() === x2.size__I()) && $thiz.subsetOf__sc_Set__Z(x2)))
  } else {
    return false
  }
});
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Set)))
}
function $as_sc_Set(obj) {
  return (($is_sc_Set(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Set"))
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Set)))
}
function $asArrayOf_sc_Set(obj, depth) {
  return (($isArrayOf_sc_Set(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Set;", depth))
}
class $c_s_reflect_ManifestFactory$AnyManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_O.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyManifest$", {
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyManifest$;
let $n_s_reflect_ManifestFactory$AnyManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyManifest$
}
class $c_s_reflect_ManifestFactory$BooleanManifest$ extends $c_s_reflect_ManifestFactory$BooleanManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Boolean";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$BooleanManifest$: 0
}, false, "scala.reflect.ManifestFactory$BooleanManifest$", {
  s_reflect_ManifestFactory$BooleanManifest$: 1,
  s_reflect_ManifestFactory$BooleanManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$BooleanManifest$;
let $n_s_reflect_ManifestFactory$BooleanManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$()
  };
  return $n_s_reflect_ManifestFactory$BooleanManifest$
}
class $c_s_reflect_ManifestFactory$ByteManifest$ extends $c_s_reflect_ManifestFactory$ByteManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Byte";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ByteManifest$: 0
}, false, "scala.reflect.ManifestFactory$ByteManifest$", {
  s_reflect_ManifestFactory$ByteManifest$: 1,
  s_reflect_ManifestFactory$ByteManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ByteManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ByteManifest$;
let $n_s_reflect_ManifestFactory$ByteManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$()
  };
  return $n_s_reflect_ManifestFactory$ByteManifest$
}
class $c_s_reflect_ManifestFactory$CharManifest$ extends $c_s_reflect_ManifestFactory$CharManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Char";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$CharManifest$: 0
}, false, "scala.reflect.ManifestFactory$CharManifest$", {
  s_reflect_ManifestFactory$CharManifest$: 1,
  s_reflect_ManifestFactory$CharManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$CharManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$CharManifest$;
let $n_s_reflect_ManifestFactory$CharManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$()
  };
  return $n_s_reflect_ManifestFactory$CharManifest$
}
class $c_s_reflect_ManifestFactory$DoubleManifest$ extends $c_s_reflect_ManifestFactory$DoubleManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Double";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$DoubleManifest$: 0
}, false, "scala.reflect.ManifestFactory$DoubleManifest$", {
  s_reflect_ManifestFactory$DoubleManifest$: 1,
  s_reflect_ManifestFactory$DoubleManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$DoubleManifest$;
let $n_s_reflect_ManifestFactory$DoubleManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$()
  };
  return $n_s_reflect_ManifestFactory$DoubleManifest$
}
class $c_s_reflect_ManifestFactory$FloatManifest$ extends $c_s_reflect_ManifestFactory$FloatManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Float";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$FloatManifest$: 0
}, false, "scala.reflect.ManifestFactory$FloatManifest$", {
  s_reflect_ManifestFactory$FloatManifest$: 1,
  s_reflect_ManifestFactory$FloatManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$FloatManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$FloatManifest$;
let $n_s_reflect_ManifestFactory$FloatManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$()
  };
  return $n_s_reflect_ManifestFactory$FloatManifest$
}
class $c_s_reflect_ManifestFactory$IntManifest$ extends $c_s_reflect_ManifestFactory$IntManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Int";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$IntManifest$: 0
}, false, "scala.reflect.ManifestFactory$IntManifest$", {
  s_reflect_ManifestFactory$IntManifest$: 1,
  s_reflect_ManifestFactory$IntManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$IntManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$IntManifest$;
let $n_s_reflect_ManifestFactory$IntManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$()
  };
  return $n_s_reflect_ManifestFactory$IntManifest$
}
class $c_s_reflect_ManifestFactory$LongManifest$ extends $c_s_reflect_ManifestFactory$LongManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Long";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$LongManifest$: 0
}, false, "scala.reflect.ManifestFactory$LongManifest$", {
  s_reflect_ManifestFactory$LongManifest$: 1,
  s_reflect_ManifestFactory$LongManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$LongManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$LongManifest$;
let $n_s_reflect_ManifestFactory$LongManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$()
  };
  return $n_s_reflect_ManifestFactory$LongManifest$
}
class $c_s_reflect_ManifestFactory$NothingManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Nothing";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Nothing$.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_sr_Nothing$.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NothingManifest$: 0
}, false, "scala.reflect.ManifestFactory$NothingManifest$", {
  s_reflect_ManifestFactory$NothingManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NothingManifest$;
let $n_s_reflect_ManifestFactory$NothingManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$()
  };
  return $n_s_reflect_ManifestFactory$NothingManifest$
}
class $c_s_reflect_ManifestFactory$NullManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Null";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Null$.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_sr_Null$.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NullManifest$: 0
}, false, "scala.reflect.ManifestFactory$NullManifest$", {
  s_reflect_ManifestFactory$NullManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NullManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NullManifest$;
let $n_s_reflect_ManifestFactory$NullManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$()
  };
  return $n_s_reflect_ManifestFactory$NullManifest$
}
class $c_s_reflect_ManifestFactory$ObjectManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_O.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ObjectManifest$: 0
}, false, "scala.reflect.ManifestFactory$ObjectManifest$", {
  s_reflect_ManifestFactory$ObjectManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ObjectManifest$;
let $n_s_reflect_ManifestFactory$ObjectManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$()
  };
  return $n_s_reflect_ManifestFactory$ObjectManifest$
}
class $c_s_reflect_ManifestFactory$ShortManifest$ extends $c_s_reflect_ManifestFactory$ShortManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Short";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ShortManifest$: 0
}, false, "scala.reflect.ManifestFactory$ShortManifest$", {
  s_reflect_ManifestFactory$ShortManifest$: 1,
  s_reflect_ManifestFactory$ShortManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ShortManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ShortManifest$;
let $n_s_reflect_ManifestFactory$ShortManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$()
  };
  return $n_s_reflect_ManifestFactory$ShortManifest$
}
class $c_s_reflect_ManifestFactory$UnitManifest$ extends $c_s_reflect_ManifestFactory$UnitManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Unit";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$UnitManifest$: 0
}, false, "scala.reflect.ManifestFactory$UnitManifest$", {
  s_reflect_ManifestFactory$UnitManifest$: 1,
  s_reflect_ManifestFactory$UnitManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$UnitManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$UnitManifest$;
let $n_s_reflect_ManifestFactory$UnitManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$()
  };
  return $n_s_reflect_ManifestFactory$UnitManifest$
}
const $f_s_xml_ScalaVersionSpecificNodeSeq__fromSpecific__sc_IterableOnce__s_xml_NodeSeq = (function($thiz, coll) {
  const this$1 = $m_s_xml_NodeSeq$().newBuilder__scm_Builder();
  return $as_s_xml_NodeSeq($as_scm_Builder(this$1.addAll__sc_IterableOnce__scm_Growable(coll)).result__O())
});
const $f_sc_Seq__equals__O__Z = (function($thiz, o) {
  if (($thiz === o)) {
    return true
  } else if ($is_sc_Seq(o)) {
    const x2 = $as_sc_Seq(o);
    return ((x2 === $thiz) || (x2.canEqual__O__Z($thiz) && $thiz.sameElements__sc_IterableOnce__Z(x2)))
  } else {
    return false
  }
});
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth))
}
class $c_sc_View$$anon$1 extends $c_sc_AbstractView {
  constructor(it$1) {
    super();
    this.sc_View$$anon$1__f_it$1 = null;
    this.sc_View$$anon$1__f_it$1 = it$1
  };
  iterator__sc_Iterator() {
    return $as_sc_Iterator(this.sc_View$$anon$1__f_it$1.apply__O())
  };
}
const $d_sc_View$$anon$1 = new $TypeData().initClass({
  sc_View$$anon$1: 0
}, false, "scala.collection.View$$anon$1", {
  sc_View$$anon$1: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$$anon$1.prototype.$classData = $d_sc_View$$anon$1;
const $ct_sc_View$Drop__sc_IterableOps__I__ = (function($thiz, underlying, n) {
  $thiz.sc_View$Drop__f_underlying = underlying;
  $thiz.sc_View$Drop__f_n = n;
  $thiz.sc_View$Drop__f_normN = ((n > 0) ? n : 0);
  return $thiz
});
class $c_sc_View$Drop extends $c_sc_AbstractView {
  constructor() {
    super();
    this.sc_View$Drop__f_underlying = null;
    this.sc_View$Drop__f_n = 0;
    this.sc_View$Drop__f_normN = 0
  };
  iterator__sc_Iterator() {
    return this.sc_View$Drop__f_underlying.iterator__sc_Iterator().drop__I__sc_Iterator(this.sc_View$Drop__f_n)
  };
  knownSize__I() {
    const size = this.sc_View$Drop__f_underlying.knownSize__I();
    if ((size >= 0)) {
      const x = ((size - this.sc_View$Drop__f_normN) | 0);
      return ((x > 0) ? x : 0)
    } else {
      return (-1)
    }
  };
  isEmpty__Z() {
    const this$1 = this.iterator__sc_Iterator();
    return (!this$1.hasNext__Z())
  };
}
const $d_sc_View$Drop = new $TypeData().initClass({
  sc_View$Drop: 0
}, false, "scala.collection.View$Drop", {
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Drop.prototype.$classData = $d_sc_View$Drop;
class $c_sc_View$Filter extends $c_sc_AbstractView {
  constructor(underlying, p, isFlipped) {
    super();
    this.sc_View$Filter__f_underlying = null;
    this.sc_View$Filter__f_p = null;
    this.sc_View$Filter__f_isFlipped = false;
    this.sc_View$Filter__f_underlying = underlying;
    this.sc_View$Filter__f_p = p;
    this.sc_View$Filter__f_isFlipped = isFlipped
  };
  iterator__sc_Iterator() {
    const this$1 = this.sc_View$Filter__f_underlying.iterator__sc_Iterator();
    const p = this.sc_View$Filter__f_p;
    const isFlipped = this.sc_View$Filter__f_isFlipped;
    return new $c_sc_Iterator$$anon$6(this$1, p, isFlipped)
  };
  knownSize__I() {
    return ((this.sc_View$Filter__f_underlying.knownSize__I() === 0) ? 0 : (-1))
  };
  isEmpty__Z() {
    const this$1 = this.iterator__sc_Iterator();
    return (!this$1.hasNext__Z())
  };
}
const $d_sc_View$Filter = new $TypeData().initClass({
  sc_View$Filter: 0
}, false, "scala.collection.View$Filter", {
  sc_View$Filter: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Filter.prototype.$classData = $d_sc_View$Filter;
const $ct_sc_View$Map__sc_IterableOps__F1__ = (function($thiz, underlying, f) {
  $thiz.sc_View$Map__f_underlying = underlying;
  $thiz.sc_View$Map__f_f = f;
  return $thiz
});
class $c_sc_View$Map extends $c_sc_AbstractView {
  constructor() {
    super();
    this.sc_View$Map__f_underlying = null;
    this.sc_View$Map__f_f = null
  };
  iterator__sc_Iterator() {
    const this$1 = this.sc_View$Map__f_underlying.iterator__sc_Iterator();
    const f = this.sc_View$Map__f_f;
    return new $c_sc_Iterator$$anon$9(this$1, f)
  };
  knownSize__I() {
    return this.sc_View$Map__f_underlying.knownSize__I()
  };
  isEmpty__Z() {
    return this.sc_View$Map__f_underlying.isEmpty__Z()
  };
}
const $d_sc_View$Map = new $TypeData().initClass({
  sc_View$Map: 0
}, false, "scala.collection.View$Map", {
  sc_View$Map: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Map.prototype.$classData = $d_sc_View$Map;
class $c_s_xml_MetaData extends $c_sc_AbstractIterable {
  hashCode__I() {
    const x = this.basisForHashCode__sc_Seq();
    return $m_sr_Statics$().anyHash__O__I(x)
  };
  equals__O__Z(other) {
    return $p_s_xml_Equality__doComparison__O__Z__Z(this, other, false)
  };
  length__I() {
    return this.length__I__I(0)
  };
  length__I__I(i) {
    return this.next__s_xml_MetaData().length__I__I(((1 + i) | 0))
  };
  canEqual__O__Z(other) {
    return (other instanceof $c_s_xml_MetaData)
  };
  strict_$eq$eq__s_xml_Equality__Z(other) {
    if ((other instanceof $c_s_xml_MetaData)) {
      const x2 = $as_s_xml_MetaData(other);
      const x = this.asAttrMap__sci_Map();
      const x$2 = x2.asAttrMap__sci_Map();
      return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      return false
    }
  };
  basisForHashCode__sc_Seq() {
    const this$4 = $m_sci_List$();
    const array = [this.asAttrMap__sci_Map()];
    const elems = new $c_sjsr_WrappedVarArgs(array);
    return this$4.from__sc_IterableOnce__sci_List(elems)
  };
  filter__F1__s_xml_MetaData(f) {
    return ($uZ(f.apply__O__O(this)) ? this.copy__s_xml_MetaData__s_xml_MetaData(this.next__s_xml_MetaData().filter__F1__s_xml_MetaData(f)) : this.next__s_xml_MetaData().filter__F1__s_xml_MetaData(f))
  };
  prefixedKey__T() {
    if ($is_s_xml_Attribute(this)) {
      const x2 = $as_s_xml_Attribute(this);
      if ($f_s_xml_Attribute__isPrefixed__Z(x2)) {
        return ("null:" + this.key__T())
      }
    };
    return this.key__T()
  };
  asAttrMap__sci_Map() {
    const this$3 = this.iterator__sc_Iterator();
    const f = new $c_sjsr_AnonFunction1(((this$1) => ((x$2) => {
      const x = $as_s_xml_MetaData(x$2);
      const $$x1 = x.prefixedKey__T();
      $m_s_xml_NodeSeq$();
      const s = x.value__sc_Seq();
      return new $c_T2($$x1, new $c_s_xml_NodeSeq$$anon$1(s).text__T())
    }))(this));
    const this$5 = new $c_sc_Iterator$$anon$9(this$3, f);
    $m_s_$less$colon$less$();
    return $m_sci_Map$().from__sc_IterableOnce__sci_Map(this$5)
  };
  get__T__s_Option(key) {
    return $m_s_Option$().apply__O__s_Option(this.apply__T__sc_Seq(key))
  };
  get__T__s_xml_NamespaceBinding__T__s_Option(uri, scope, key) {
    return $m_s_Option$().apply__O__s_Option(this.apply__T__s_xml_NamespaceBinding__T__sc_Seq(uri, scope, key))
  };
  toString__T() {
    const sb = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
    this.buildString__scm_StringBuilder__scm_StringBuilder(sb);
    return sb.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  buildString__scm_StringBuilder__scm_StringBuilder(sb) {
    sb.append__C__scm_StringBuilder(32);
    this.toString1__scm_StringBuilder__V(sb);
    return this.next__s_xml_MetaData().buildString__scm_StringBuilder__scm_StringBuilder(sb)
  };
  filter__F1__O(pred) {
    return this.filter__F1__s_xml_MetaData(pred)
  };
}
function $as_s_xml_MetaData(obj) {
  return (((obj instanceof $c_s_xml_MetaData) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.xml.MetaData"))
}
function $isArrayOf_s_xml_MetaData(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_xml_MetaData)))
}
function $asArrayOf_s_xml_MetaData(obj, depth) {
  return (($isArrayOf_s_xml_MetaData(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.xml.MetaData;", depth))
}
class $c_sc_AbstractSet extends $c_sc_AbstractIterable {
  equals__O__Z(that) {
    return $f_sc_Set__equals__O__Z(this, that)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.unorderedHash__sc_IterableOnce__I__I(this, this$1.s_util_hashing_MurmurHash3$__f_setSeed)
  };
  stringPrefix__T() {
    return "Set"
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  subsetOf__sc_Set__Z(that) {
    return this.forall__F1__Z(that)
  };
  apply__O__O(v1) {
    return this.contains__O__Z(v1)
  };
}
const $f_sc_Map__equals__O__Z = (function($thiz, o) {
  if ($is_sc_Map(o)) {
    const x2 = $as_sc_Map(o);
    if (($thiz === x2)) {
      return true
    } else if (($thiz.size__I() === x2.size__I())) {
      try {
        let res = true;
        const it = $thiz.iterator__sc_Iterator();
        while ((res && it.hasNext__Z())) {
          const arg1 = it.next__O();
          const x0$1 = $as_T2(arg1);
          if ((x0$1 === null)) {
            throw new $c_s_MatchError(x0$1)
          };
          const k = x0$1.T2__f__1;
          const v = x0$1.T2__f__2;
          res = $m_sr_BoxesRunTime$().equals__O__O__Z(x2.getOrElse__O__F0__O(k, new $c_sjsr_AnonFunction0(((this$1) => (() => $m_sc_Map$().sc_Map$__f_scala$collection$Map$$DefaultSentinel))($thiz))), v)
        };
        return res
      } catch (e) {
        if ((e instanceof $c_jl_ClassCastException)) {
          return false
        } else {
          throw e
        }
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Map)))
}
function $as_sc_Map(obj) {
  return (($is_sc_Map(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Map"))
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Map)))
}
function $asArrayOf_sc_Map(obj, depth) {
  return (($isArrayOf_sc_Map(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Map;", depth))
}
class $c_sc_AbstractSeq extends $c_sc_AbstractIterable {
  canEqual__O__Z(that) {
    return true
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  stringPrefix__T() {
    return "Seq"
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
}
class $c_sc_AbstractSeqView extends $c_sc_AbstractView {
  drop__I__sc_SeqView(n) {
    return $ct_sc_SeqView$Drop__sc_SeqOps__I__(new $c_sc_SeqView$Drop(), this, n)
  };
  stringPrefix__T() {
    return "SeqView"
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  drop__I__O(n) {
    return this.drop__I__sc_SeqView(n)
  };
}
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
function $is_sci_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Set)))
}
function $as_sci_Set(obj) {
  return (($is_sci_Set(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set"))
}
function $isArrayOf_sci_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set)))
}
function $asArrayOf_sci_Set(obj, depth) {
  return (($isArrayOf_sci_Set(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set;", depth))
}
class $c_s_xml_Null$ extends $c_s_xml_MetaData {
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  filter__F1__s_xml_MetaData(f) {
    return this
  };
  copy__s_xml_MetaData__s_xml_MetaData(next) {
    return next
  };
  length__I() {
    return 0
  };
  length__I__I(i) {
    return i
  };
  strict_$eq$eq__s_xml_Equality__Z(other) {
    if ((other instanceof $c_s_xml_MetaData)) {
      const x2 = $as_s_xml_MetaData(other);
      return (x2.length__I() === 0)
    } else {
      return false
    }
  };
  basisForHashCode__sc_Seq() {
    return $m_sci_Nil$()
  };
  apply__T__sc_Seq(key) {
    const this$2 = $m_s_xml_Utility$();
    const ch = $m_sc_StringOps$().head$extension__T__C(key);
    if ($f_s_xml_parsing_TokenTests__isNameStart__C__Z(this$2, ch)) {
      return null
    } else {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("not a valid attribute name '" + key) + "', so can never match !"))
    }
  };
  toString1__scm_StringBuilder__V(sb) {
    /*<skip>*/
  };
  toString__T() {
    return ""
  };
  buildString__scm_StringBuilder__scm_StringBuilder(sb) {
    return sb
  };
  productPrefix__T() {
    return "Null"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  remove__T__s_xml_MetaData(key) {
    return this
  };
  apply__T__s_xml_NamespaceBinding__T__sc_Seq(namespace_uri, scp, k) {
    return null
  };
  value__sc_Seq() {
    return null
  };
  key__T() {
    return null
  };
  next__s_xml_MetaData() {
    return null
  };
  filter__F1__O(pred) {
    return this
  };
}
const $d_s_xml_Null$ = new $TypeData().initClass({
  s_xml_Null$: 0
}, false, "scala.xml.Null$", {
  s_xml_Null$: 1,
  s_xml_MetaData: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  s_xml_Equality: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_s_xml_Null$.prototype.$classData = $d_s_xml_Null$;
let $n_s_xml_Null$ = (void 0);
function $m_s_xml_Null$() {
  if ((!$n_s_xml_Null$)) {
    $n_s_xml_Null$ = new $c_s_xml_Null$()
  };
  return $n_s_xml_Null$
}
class $c_s_xml_PrefixedAttribute {
}
function $as_s_xml_PrefixedAttribute(obj) {
  return (((obj instanceof $c_s_xml_PrefixedAttribute) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.xml.PrefixedAttribute"))
}
function $isArrayOf_s_xml_PrefixedAttribute(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_xml_PrefixedAttribute)))
}
function $asArrayOf_s_xml_PrefixedAttribute(obj, depth) {
  return (($isArrayOf_s_xml_PrefixedAttribute(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.xml.PrefixedAttribute;", depth))
}
const $ct_s_xml_UnprefixedAttribute__T__sc_Seq__s_xml_MetaData__ = (function($thiz, key, value, next1) {
  $thiz.s_xml_UnprefixedAttribute__f_key = key;
  $thiz.s_xml_UnprefixedAttribute__f_value = value;
  $thiz.s_xml_UnprefixedAttribute__f_next = ((value !== null) ? next1 : next1.remove__T__s_xml_MetaData(key));
  return $thiz
});
const $ct_s_xml_UnprefixedAttribute__T__T__s_xml_MetaData__ = (function($thiz, key, value, next) {
  $ct_s_xml_UnprefixedAttribute__T__sc_Seq__s_xml_MetaData__($thiz, key, ((value !== null) ? new $c_s_xml_Text(value) : null), next);
  return $thiz
});
class $c_s_xml_UnprefixedAttribute extends $c_s_xml_MetaData {
  constructor() {
    super();
    this.s_xml_UnprefixedAttribute__f_key = null;
    this.s_xml_UnprefixedAttribute__f_value = null;
    this.s_xml_UnprefixedAttribute__f_next = null
  };
  remove__T__s_xml_MetaData(key) {
    return $f_s_xml_Attribute__remove__T__s_xml_MetaData(this, key)
  };
  iterator__sc_Iterator() {
    return $f_s_xml_Attribute__iterator__sc_Iterator(this)
  };
  toString1__scm_StringBuilder__V(sb) {
    $f_s_xml_Attribute__toString1__scm_StringBuilder__V(this, sb)
  };
  key__T() {
    return this.s_xml_UnprefixedAttribute__f_key
  };
  value__sc_Seq() {
    return this.s_xml_UnprefixedAttribute__f_value
  };
  next__s_xml_MetaData() {
    return this.s_xml_UnprefixedAttribute__f_next
  };
  apply__T__sc_Seq(key) {
    return ((key === this.s_xml_UnprefixedAttribute__f_key) ? this.s_xml_UnprefixedAttribute__f_value : this.s_xml_UnprefixedAttribute__f_next.apply__T__sc_Seq(key))
  };
  apply__T__s_xml_NamespaceBinding__T__sc_Seq(namespace, scope, key) {
    return this.s_xml_UnprefixedAttribute__f_next.apply__T__s_xml_NamespaceBinding__T__sc_Seq(namespace, scope, key)
  };
  copy__s_xml_MetaData__s_xml_MetaData(next) {
    return $ct_s_xml_UnprefixedAttribute__T__sc_Seq__s_xml_MetaData__(new $c_s_xml_UnprefixedAttribute(), this.s_xml_UnprefixedAttribute__f_key, this.s_xml_UnprefixedAttribute__f_value, next)
  };
}
function $as_s_xml_UnprefixedAttribute(obj) {
  return (((obj instanceof $c_s_xml_UnprefixedAttribute) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.xml.UnprefixedAttribute"))
}
function $isArrayOf_s_xml_UnprefixedAttribute(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_xml_UnprefixedAttribute)))
}
function $asArrayOf_s_xml_UnprefixedAttribute(obj, depth) {
  return (($isArrayOf_s_xml_UnprefixedAttribute(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.xml.UnprefixedAttribute;", depth))
}
const $d_s_xml_UnprefixedAttribute = new $TypeData().initClass({
  s_xml_UnprefixedAttribute: 0
}, false, "scala.xml.UnprefixedAttribute", {
  s_xml_UnprefixedAttribute: 1,
  s_xml_MetaData: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  s_xml_Equality: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1,
  s_xml_Attribute: 1
});
$c_s_xml_UnprefixedAttribute.prototype.$classData = $d_s_xml_UnprefixedAttribute;
class $c_sc_AbstractMap extends $c_sc_AbstractIterable {
  equals__O__Z(o) {
    return $f_sc_Map__equals__O__Z(this, o)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.unorderedHash__sc_IterableOnce__I__I(this, this$1.s_util_hashing_MurmurHash3$__f_mapSeed)
  };
  stringPrefix__T() {
    return "Map"
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $as_sc_IterableOps(this.mapFactory__sc_MapFactory().from__sc_IterableOnce__O(coll))
  };
  newSpecificBuilder__scm_Builder() {
    return this.mapFactory__sc_MapFactory().newBuilder__scm_Builder()
  };
  map__F1__sc_IterableOps(f) {
    return $f_sc_MapOps__map__F1__sc_IterableOps(this, f)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end)
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $as_sc_IterableOps(this.mapFactory__sc_MapFactory().from__sc_IterableOnce__O(coll))
  };
}
const $ct_sc_SeqView$Drop__sc_SeqOps__I__ = (function($thiz, underlying, n) {
  $thiz.sc_SeqView$Drop__f_underlying = underlying;
  $ct_sc_View$Drop__sc_IterableOps__I__($thiz, underlying, n);
  return $thiz
});
class $c_sc_SeqView$Drop extends $c_sc_View$Drop {
  constructor() {
    super();
    this.sc_SeqView$Drop__f_underlying = null
  };
  drop__I__sc_SeqView(n) {
    return $ct_sc_SeqView$Drop__sc_SeqOps__I__(new $c_sc_SeqView$Drop(), this, n)
  };
  stringPrefix__T() {
    return "SeqView"
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  length__I() {
    const this$1 = this.sc_SeqView$Drop__f_underlying;
    const x = ((this$1.length__I() - this.sc_View$Drop__f_normN) | 0);
    return ((x > 0) ? x : 0)
  };
  apply__I__O(i) {
    return this.sc_SeqView$Drop__f_underlying.apply__I__O(((i + this.sc_View$Drop__f_normN) | 0))
  };
  drop__I__O(n) {
    return this.drop__I__sc_SeqView(n)
  };
}
const $d_sc_SeqView$Drop = new $TypeData().initClass({
  sc_SeqView$Drop: 0
}, false, "scala.collection.SeqView$Drop", {
  sc_SeqView$Drop: 1,
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Drop.prototype.$classData = $d_sc_SeqView$Drop;
const $ct_sc_SeqView$Id__sc_SeqOps__ = (function($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz
});
class $c_sc_SeqView$Id extends $c_sc_AbstractSeqView {
  constructor() {
    super();
    this.sc_SeqView$Id__f_underlying = null
  };
  apply__I__O(idx) {
    return this.sc_SeqView$Id__f_underlying.apply__I__O(idx)
  };
  length__I() {
    return this.sc_SeqView$Id__f_underlying.length__I()
  };
  iterator__sc_Iterator() {
    return this.sc_SeqView$Id__f_underlying.iterator__sc_Iterator()
  };
  knownSize__I() {
    return this.sc_SeqView$Id__f_underlying.knownSize__I()
  };
  isEmpty__Z() {
    return this.sc_SeqView$Id__f_underlying.isEmpty__Z()
  };
}
const $d_sc_SeqView$Id = new $TypeData().initClass({
  sc_SeqView$Id: 0
}, false, "scala.collection.SeqView$Id", {
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Id.prototype.$classData = $d_sc_SeqView$Id;
const $ct_sc_SeqView$Map__sc_SeqOps__F1__ = (function($thiz, underlying, f) {
  $thiz.sc_SeqView$Map__f_underlying = underlying;
  $thiz.sc_SeqView$Map__f_f = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz
});
class $c_sc_SeqView$Map extends $c_sc_View$Map {
  constructor() {
    super();
    this.sc_SeqView$Map__f_underlying = null;
    this.sc_SeqView$Map__f_f = null
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  apply__I__O(idx) {
    return this.sc_SeqView$Map__f_f.apply__O__O(this.sc_SeqView$Map__f_underlying.apply__I__O(idx))
  };
  length__I() {
    return this.sc_SeqView$Map__f_underlying.length__I()
  };
}
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)))
}
function $as_sci_Seq(obj) {
  return (($is_sci_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Seq"))
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)))
}
function $asArrayOf_sci_Seq(obj, depth) {
  return (($isArrayOf_sci_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Seq;", depth))
}
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Map)))
}
function $as_sci_Map(obj) {
  return (($is_sci_Map(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map"))
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map)))
}
function $asArrayOf_sci_Map(obj, depth) {
  return (($isArrayOf_sci_Map(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map;", depth))
}
class $c_sc_AbstractIndexedSeqView extends $c_sc_AbstractSeqView {
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
class $c_sci_AbstractSet extends $c_sc_AbstractSet {
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Set$()
  };
}
class $c_sc_IndexedSeqView$Drop extends $c_sc_SeqView$Drop {
  constructor(underlying, n) {
    super();
    $ct_sc_SeqView$Drop__sc_SeqOps__I__(this, underlying, n)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
const $d_sc_IndexedSeqView$Drop = new $TypeData().initClass({
  sc_IndexedSeqView$Drop: 0
}, false, "scala.collection.IndexedSeqView$Drop", {
  sc_IndexedSeqView$Drop: 1,
  sc_SeqView$Drop: 1,
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Drop.prototype.$classData = $d_sc_IndexedSeqView$Drop;
class $c_sc_IndexedSeqView$Id extends $c_sc_SeqView$Id {
  constructor(underlying) {
    super();
    $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
const $d_sc_IndexedSeqView$Id = new $TypeData().initClass({
  sc_IndexedSeqView$Id: 0
}, false, "scala.collection.IndexedSeqView$Id", {
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Id.prototype.$classData = $d_sc_IndexedSeqView$Id;
class $c_sc_IndexedSeqView$Map extends $c_sc_SeqView$Map {
  constructor(underlying, f) {
    super();
    $ct_sc_SeqView$Map__sc_SeqOps__F1__(this, underlying, f)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
const $d_sc_IndexedSeqView$Map = new $TypeData().initClass({
  sc_IndexedSeqView$Map: 0
}, false, "scala.collection.IndexedSeqView$Map", {
  sc_IndexedSeqView$Map: 1,
  sc_SeqView$Map: 1,
  sc_View$Map: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Map.prototype.$classData = $d_sc_IndexedSeqView$Map;
class $c_sci_AbstractSeq extends $c_sc_AbstractSeq {
}
class $c_scm_ArrayBufferView extends $c_sc_AbstractIndexedSeqView {
  constructor(array, length) {
    super();
    this.scm_ArrayBufferView__f_array = null;
    this.scm_ArrayBufferView__f_length = 0;
    this.scm_ArrayBufferView__f_array = array;
    this.scm_ArrayBufferView__f_length = length
  };
  length__I() {
    return this.scm_ArrayBufferView__f_length
  };
  apply__I__O(n) {
    if ((n < this.scm_ArrayBufferView__f_length)) {
      return this.scm_ArrayBufferView__f_array.get(n)
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((n + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBufferView__f_length) | 0)) + ")"))
    }
  };
  className__T() {
    return "ArrayBufferView"
  };
}
const $d_scm_ArrayBufferView = new $TypeData().initClass({
  scm_ArrayBufferView: 0
}, false, "scala.collection.mutable.ArrayBufferView", {
  scm_ArrayBufferView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_scm_ArrayBufferView.prototype.$classData = $d_scm_ArrayBufferView;
class $c_sci_AbstractMap extends $c_sc_AbstractMap {
  mapFactory__sc_MapFactory() {
    return $m_sci_Map$()
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Iterable$()
  };
}
const $f_sci_IndexedSeq__canEqual__O__Z = (function($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true
  } else {
    const x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === x2.length__I())
  }
});
const $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z = (function($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    const x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true
    } else {
      const length = $thiz.length__I();
      let equal = (length === x2.length__I());
      if (equal) {
        let index = 0;
        const a = $thiz.applyPreferredMaxLength__I();
        const b = x2.applyPreferredMaxLength__I();
        const preferredLength = ((a < b) ? a : b);
        const hi = (length >> 31);
        const hi$1 = (preferredLength >> 31);
        const lo = (preferredLength << 1);
        const hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        let maxApplyCompare;
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          maxApplyCompare = preferredLength
        } else {
          maxApplyCompare = length
        };
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), x2.apply__I__O(index));
          index = ((1 + index) | 0)
        };
        if (((index < length) && equal)) {
          const thisIt = $thiz.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          const thatIt = x2.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          while ((equal && thisIt.hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z(thisIt.next__O(), thatIt.next__O())
          }
        }
      };
      return equal
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o)
  }
});
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth))
}
class $c_sci_Set$EmptySet$ extends $c_sci_AbstractSet {
  size__I() {
    return 0
  };
  isEmpty__Z() {
    return true
  };
  knownSize__I() {
    return 0
  };
  subsetOf__sc_Set__Z(that) {
    return true
  };
  contains__O__Z(elem) {
    return false
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  incl__O__sci_SetOps(elem) {
    return new $c_sci_Set$Set1(elem)
  };
  filter__F1__O(pred) {
    return this
  };
}
const $d_sci_Set$EmptySet$ = new $TypeData().initClass({
  sci_Set$EmptySet$: 0
}, false, "scala.collection.immutable.Set$EmptySet$", {
  sci_Set$EmptySet$: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$EmptySet$.prototype.$classData = $d_sci_Set$EmptySet$;
let $n_sci_Set$EmptySet$ = (void 0);
function $m_sci_Set$EmptySet$() {
  if ((!$n_sci_Set$EmptySet$)) {
    $n_sci_Set$EmptySet$ = new $c_sci_Set$EmptySet$()
  };
  return $n_sci_Set$EmptySet$
}
class $c_sc_StringView extends $c_sc_AbstractIndexedSeqView {
  constructor(s) {
    super();
    this.sc_StringView__f_s = null;
    this.sc_StringView__f_s = s
  };
  length__I() {
    const this$1 = this.sc_StringView__f_s;
    return $uI(this$1.length)
  };
  toString__T() {
    return (("StringView(" + this.sc_StringView__f_s) + ")")
  };
  productPrefix__T() {
    return "StringView"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.sc_StringView__f_s : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sc_StringView)) {
      const StringView$1 = $as_sc_StringView(x$1);
      return (this.sc_StringView__f_s === StringView$1.sc_StringView__f_s)
    } else {
      return false
    }
  };
  apply__I__O(i) {
    const this$1 = this.sc_StringView__f_s;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
}
function $as_sc_StringView(obj) {
  return (((obj instanceof $c_sc_StringView) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StringView"))
}
function $isArrayOf_sc_StringView(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StringView)))
}
function $asArrayOf_sc_StringView(obj, depth) {
  return (($isArrayOf_sc_StringView(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.StringView;", depth))
}
const $d_sc_StringView = new $TypeData().initClass({
  sc_StringView: 0
}, false, "scala.collection.StringView", {
  sc_StringView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sc_StringView.prototype.$classData = $d_sc_StringView;
class $c_sci_Set$Set1 extends $c_sci_AbstractSet {
  constructor(elem1) {
    super();
    this.sci_Set$Set1__f_elem1 = null;
    this.sci_Set$Set1__f_elem1 = elem1
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  size__I() {
    return 1
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 1
  };
  contains__O__Z(elem) {
    return $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set1__f_elem1)
  };
  incl__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set2(this.sci_Set$Set1__f_elem1, elem))
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const a = this.sci_Set$Set1__f_elem1;
    return new $c_sc_Iterator$$anon$20(a)
  };
  forall__F1__Z(p) {
    return $uZ(p.apply__O__O(this.sci_Set$Set1__f_elem1))
  };
  head__O() {
    return this.sci_Set$Set1__f_elem1
  };
  tail__O() {
    return $m_sci_Set$EmptySet$()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
const $d_sci_Set$Set1 = new $TypeData().initClass({
  sci_Set$Set1: 0
}, false, "scala.collection.immutable.Set$Set1", {
  sci_Set$Set1: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set1.prototype.$classData = $d_sci_Set$Set1;
class $c_sci_Set$Set2 extends $c_sci_AbstractSet {
  constructor(elem1, elem2) {
    super();
    this.sci_Set$Set2__f_elem1 = null;
    this.sci_Set$Set2__f_elem2 = null;
    this.sci_Set$Set2__f_elem1 = elem1;
    this.sci_Set$Set2__f_elem2 = elem2
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  size__I() {
    return 2
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 2
  };
  contains__O__Z(elem) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem2))
  };
  incl__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set3(this.sci_Set$Set2__f_elem1, this.sci_Set$Set2__f_elem2, elem))
  };
  iterator__sc_Iterator() {
    const rassoc$2 = this.sci_Set$Set2__f_elem1;
    const rassoc$1 = this.sci_Set$Set2__f_elem2;
    const this$1 = $m_sci_Nil$();
    const this$2 = new $c_sci_$colon$colon(rassoc$1, this$1);
    const this$3 = new $c_sci_$colon$colon(rassoc$2, this$2);
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this$3)
  };
  forall__F1__Z(p) {
    return ($uZ(p.apply__O__O(this.sci_Set$Set2__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set2__f_elem2)))
  };
  head__O() {
    return this.sci_Set$Set2__f_elem1
  };
  tail__sci_Set() {
    return new $c_sci_Set$Set1(this.sci_Set$Set2__f_elem2)
  };
  tail__O() {
    return this.tail__sci_Set()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
const $d_sci_Set$Set2 = new $TypeData().initClass({
  sci_Set$Set2: 0
}, false, "scala.collection.immutable.Set$Set2", {
  sci_Set$Set2: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set2.prototype.$classData = $d_sci_Set$Set2;
class $c_sci_Set$Set3 extends $c_sci_AbstractSet {
  constructor(elem1, elem2, elem3) {
    super();
    this.sci_Set$Set3__f_elem1 = null;
    this.sci_Set$Set3__f_elem2 = null;
    this.sci_Set$Set3__f_elem3 = null;
    this.sci_Set$Set3__f_elem1 = elem1;
    this.sci_Set$Set3__f_elem2 = elem2;
    this.sci_Set$Set3__f_elem3 = elem3
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  size__I() {
    return 3
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 3
  };
  contains__O__Z(elem) {
    return (($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem3))
  };
  incl__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set4(this.sci_Set$Set3__f_elem1, this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3, elem))
  };
  iterator__sc_Iterator() {
    const rassoc$5 = this.sci_Set$Set3__f_elem1;
    const rassoc$4 = this.sci_Set$Set3__f_elem2;
    const rassoc$3 = this.sci_Set$Set3__f_elem3;
    const this$1 = $m_sci_Nil$();
    const this$2 = new $c_sci_$colon$colon(rassoc$3, this$1);
    const this$3 = new $c_sci_$colon$colon(rassoc$4, this$2);
    const this$4 = new $c_sci_$colon$colon(rassoc$5, this$3);
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this$4)
  };
  forall__F1__Z(p) {
    return (($uZ(p.apply__O__O(this.sci_Set$Set3__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set3__f_elem2))) && $uZ(p.apply__O__O(this.sci_Set$Set3__f_elem3)))
  };
  head__O() {
    return this.sci_Set$Set3__f_elem1
  };
  tail__sci_Set() {
    return new $c_sci_Set$Set2(this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3)
  };
  tail__O() {
    return this.tail__sci_Set()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
const $d_sci_Set$Set3 = new $TypeData().initClass({
  sci_Set$Set3: 0
}, false, "scala.collection.immutable.Set$Set3", {
  sci_Set$Set3: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set3.prototype.$classData = $d_sci_Set$Set3;
class $c_sci_Set$Set4 extends $c_sci_AbstractSet {
  constructor(elem1, elem2, elem3, elem4) {
    super();
    this.sci_Set$Set4__f_elem1 = null;
    this.sci_Set$Set4__f_elem2 = null;
    this.sci_Set$Set4__f_elem3 = null;
    this.sci_Set$Set4__f_elem4 = null;
    this.sci_Set$Set4__f_elem1 = elem1;
    this.sci_Set$Set4__f_elem2 = elem2;
    this.sci_Set$Set4__f_elem3 = elem3;
    this.sci_Set$Set4__f_elem4 = elem4
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  size__I() {
    return 4
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 4
  };
  contains__O__Z(elem) {
    return ((($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem3)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem4))
  };
  incl__O__sci_Set(elem) {
    if (this.contains__O__Z(elem)) {
      return this
    } else {
      const this$1 = $m_sci_HashSet$();
      const this$2 = this$1.sci_HashSet$__f_EmptySet;
      const elem$1 = this.sci_Set$Set4__f_elem1;
      const this$3 = this$2.incl__O__sci_HashSet(elem$1);
      const elem$2 = this.sci_Set$Set4__f_elem2;
      const this$4 = this$3.incl__O__sci_HashSet(elem$2);
      const elem$3 = this.sci_Set$Set4__f_elem3;
      const this$5 = this$4.incl__O__sci_HashSet(elem$3);
      const elem$4 = this.sci_Set$Set4__f_elem4;
      const this$6 = this$5.incl__O__sci_HashSet(elem$4);
      return this$6.incl__O__sci_HashSet(elem)
    }
  };
  iterator__sc_Iterator() {
    const rassoc$9 = this.sci_Set$Set4__f_elem1;
    const rassoc$8 = this.sci_Set$Set4__f_elem2;
    const rassoc$7 = this.sci_Set$Set4__f_elem3;
    const rassoc$6 = this.sci_Set$Set4__f_elem4;
    const this$1 = $m_sci_Nil$();
    const this$2 = new $c_sci_$colon$colon(rassoc$6, this$1);
    const this$3 = new $c_sci_$colon$colon(rassoc$7, this$2);
    const this$4 = new $c_sci_$colon$colon(rassoc$8, this$3);
    const this$5 = new $c_sci_$colon$colon(rassoc$9, this$4);
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this$5)
  };
  forall__F1__Z(p) {
    return ((($uZ(p.apply__O__O(this.sci_Set$Set4__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem2))) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem3))) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem4)))
  };
  head__O() {
    return this.sci_Set$Set4__f_elem1
  };
  tail__sci_Set() {
    return new $c_sci_Set$Set3(this.sci_Set$Set4__f_elem2, this.sci_Set$Set4__f_elem3, this.sci_Set$Set4__f_elem4)
  };
  buildTo__scm_Builder__scm_Builder(builder) {
    return $as_scm_Builder(builder.addOne__O__scm_Growable(this.sci_Set$Set4__f_elem1).addOne__O__scm_Growable(this.sci_Set$Set4__f_elem2).addOne__O__scm_Growable(this.sci_Set$Set4__f_elem3).addOne__O__scm_Growable(this.sci_Set$Set4__f_elem4))
  };
  tail__O() {
    return this.tail__sci_Set()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
function $as_sci_Set$Set4(obj) {
  return (((obj instanceof $c_sci_Set$Set4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set$Set4"))
}
function $isArrayOf_sci_Set$Set4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set$Set4)))
}
function $asArrayOf_sci_Set$Set4(obj, depth) {
  return (($isArrayOf_sci_Set$Set4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set$Set4;", depth))
}
const $d_sci_Set$Set4 = new $TypeData().initClass({
  sci_Set$Set4: 0
}, false, "scala.collection.immutable.Set$Set4", {
  sci_Set$Set4: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set4.prototype.$classData = $d_sci_Set$Set4;
function $is_sci_SortedSet(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_SortedSet)))
}
function $as_sci_SortedSet(obj) {
  return (($is_sci_SortedSet(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.SortedSet"))
}
function $isArrayOf_sci_SortedSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SortedSet)))
}
function $asArrayOf_sci_SortedSet(obj, depth) {
  return (($isArrayOf_sci_SortedSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.SortedSet;", depth))
}
class $c_scm_AbstractSeq extends $c_sc_AbstractSeq {
}
class $c_sci_Map$EmptyMap$ extends $c_sci_AbstractMap {
  size__I() {
    return 0
  };
  knownSize__I() {
    return 0
  };
  isEmpty__Z() {
    return true
  };
  apply__O__E(key) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  };
  contains__O__Z(key) {
    return false
  };
  get__O__s_Option(key) {
    return $m_s_None$()
  };
  getOrElse__O__F0__O(key, default$1) {
    return default$1.apply__O()
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  removed__O__sci_MapOps(key) {
    return this
  };
  updated__O__O__sci_MapOps(key, value) {
    return new $c_sci_Map$Map1(key, value)
  };
  apply__O__O(key) {
    this.apply__O__E(key)
  };
}
const $d_sci_Map$EmptyMap$ = new $TypeData().initClass({
  sci_Map$EmptyMap$: 0
}, false, "scala.collection.immutable.Map$EmptyMap$", {
  sci_Map$EmptyMap$: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$EmptyMap$.prototype.$classData = $d_sci_Map$EmptyMap$;
let $n_sci_Map$EmptyMap$ = (void 0);
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$()
  };
  return $n_sci_Map$EmptyMap$
}
class $c_sci_Map$Map1 extends $c_sci_AbstractMap {
  constructor(key1, value1) {
    super();
    this.sci_Map$Map1__f_key1 = null;
    this.sci_Map$Map1__f_value1 = null;
    this.sci_Map$Map1__f_key1 = key1;
    this.sci_Map$Map1__f_value1 = value1
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  size__I() {
    return 1
  };
  knownSize__I() {
    return 1
  };
  isEmpty__Z() {
    return false
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1)) {
      return this.sci_Map$Map1__f_value1
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  contains__O__Z(key) {
    return $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1)
  };
  get__O__s_Option(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_s_Some(this.sci_Map$Map1__f_value1) : $m_s_None$())
  };
  getOrElse__O__F0__O(key, default$1) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? this.sci_Map$Map1__f_value1 : default$1.apply__O())
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const a = new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1);
    return new $c_sc_Iterator$$anon$20(a)
  };
  updated__O__O__sci_Map(key, value) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_sci_Map$Map1(this.sci_Map$Map1__f_key1, value) : new $c_sci_Map$Map2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1, key, value))
  };
  removed__O__sci_Map(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? $m_sci_Map$EmptyMap$() : this)
  };
  removed__O__sci_MapOps(key) {
    return this.removed__O__sci_Map(key)
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_Map(key, value)
  };
}
const $d_sci_Map$Map1 = new $TypeData().initClass({
  sci_Map$Map1: 0
}, false, "scala.collection.immutable.Map$Map1", {
  sci_Map$Map1: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map1.prototype.$classData = $d_sci_Map$Map1;
class $c_sci_Map$Map2 extends $c_sci_AbstractMap {
  constructor(key1, value1, key2, value2) {
    super();
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1 = null;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 = null;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2 = null;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 = null;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1 = key1;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 = value1;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2 = key2;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 = value2
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  size__I() {
    return 2
  };
  knownSize__I() {
    return 2
  };
  isEmpty__Z() {
    return false
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1)) {
      return this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2)) {
      return this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  contains__O__Z(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2))
  };
  get__O__s_Option(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? new $c_s_Some(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? new $c_s_Some(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2) : $m_s_None$()))
  };
  getOrElse__O__F0__O(key, default$1) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 : default$1.apply__O()))
  };
  iterator__sc_Iterator() {
    return new $c_sci_Map$Map2$$anon$1(this)
  };
  updated__O__O__sci_Map(key, value) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, value, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, value) : new $c_sci_Map$Map3(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2, key, value)))
  };
  removed__O__sci_Map(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? new $c_sci_Map$Map1(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? new $c_sci_Map$Map1(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1) : this))
  };
  removed__O__sci_MapOps(key) {
    return this.removed__O__sci_Map(key)
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_Map(key, value)
  };
}
const $d_sci_Map$Map2 = new $TypeData().initClass({
  sci_Map$Map2: 0
}, false, "scala.collection.immutable.Map$Map2", {
  sci_Map$Map2: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map2.prototype.$classData = $d_sci_Map$Map2;
class $c_sci_Map$Map3 extends $c_sci_AbstractMap {
  constructor(key1, value1, key2, value2, key3, value3) {
    super();
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1 = key1;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 = value1;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2 = key2;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 = value2;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3 = key3;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 = value3
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  size__I() {
    return 3
  };
  knownSize__I() {
    return 3
  };
  isEmpty__Z() {
    return false
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1)) {
      return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2)) {
      return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3)) {
      return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  contains__O__Z(key) {
    return (($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3))
  };
  get__O__s_Option(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? new $c_s_Some(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? new $c_s_Some(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? new $c_s_Some(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : $m_s_None$())))
  };
  getOrElse__O__F0__O(key, default$1) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 : default$1.apply__O())))
  };
  iterator__sc_Iterator() {
    return new $c_sci_Map$Map3$$anon$4(this)
  };
  updated__O__O__sci_Map(key, value) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, value, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, value, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, value) : new $c_sci_Map$Map4(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3, key, value))))
  };
  removed__O__sci_Map(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? new $c_sci_Map$Map2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? new $c_sci_Map$Map2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? new $c_sci_Map$Map2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2) : this)))
  };
  removed__O__sci_MapOps(key) {
    return this.removed__O__sci_Map(key)
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_Map(key, value)
  };
}
const $d_sci_Map$Map3 = new $TypeData().initClass({
  sci_Map$Map3: 0
}, false, "scala.collection.immutable.Map$Map3", {
  sci_Map$Map3: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map3.prototype.$classData = $d_sci_Map$Map3;
class $c_sci_Map$Map4 extends $c_sci_AbstractMap {
  constructor(key1, value1, key2, value2, key3, value3, key4, value4) {
    super();
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1 = key1;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 = value1;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2 = key2;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 = value2;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3 = key3;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 = value3;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4 = key4;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 = value4
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  size__I() {
    return 4
  };
  knownSize__I() {
    return 4
  };
  isEmpty__Z() {
    return false
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1)) {
      return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) {
      return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) {
      return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4)) {
      return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  contains__O__Z(key) {
    return ((($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4))
  };
  get__O__s_Option(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) ? new $c_s_Some(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2) ? new $c_s_Some(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3) ? new $c_s_Some(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4) ? new $c_s_Some(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4) : $m_s_None$()))))
  };
  getOrElse__O__F0__O(key, default$1) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 : default$1.apply__O()))))
  };
  iterator__sc_Iterator() {
    return new $c_sci_Map$Map4$$anon$7(this)
  };
  updated__O__O__sci_Map(key, value) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1)) {
      return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) {
      return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) {
      return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4)) {
      return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, value)
    } else {
      const this$1 = $m_sci_HashMap$();
      return this$1.sci_HashMap$__f_EmptyMap.updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4).updated__O__O__sci_HashMap(key, value)
    }
  };
  removed__O__sci_Map(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) ? new $c_sci_Map$Map3(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2) ? new $c_sci_Map$Map3(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3) ? new $c_sci_Map$Map3(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4) ? new $c_sci_Map$Map3(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3) : this))))
  };
  buildTo__sci_HashMapBuilder__sci_HashMapBuilder(builder) {
    return builder.addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
  };
  removed__O__sci_MapOps(key) {
    return this.removed__O__sci_Map(key)
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_Map(key, value)
  };
}
function $as_sci_Map$Map4(obj) {
  return (((obj instanceof $c_sci_Map$Map4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map4"))
}
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map$Map4)))
}
function $asArrayOf_sci_Map$Map4(obj, depth) {
  return (($isArrayOf_sci_Map$Map4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map$Map4;", depth))
}
const $d_sci_Map$Map4 = new $TypeData().initClass({
  sci_Map$Map4: 0
}, false, "scala.collection.immutable.Map$Map4", {
  sci_Map$Map4: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map4.prototype.$classData = $d_sci_Map$Map4;
const $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet = (function($thiz, newRootNode) {
  return (($thiz.sci_HashSet__f_rootNode === newRootNode) ? $thiz : new $c_sci_HashSet(newRootNode))
});
class $c_sci_HashSet extends $c_sci_AbstractSet {
  constructor(rootNode) {
    super();
    this.sci_HashSet__f_rootNode = null;
    this.sci_HashSet__f_rootNode = rootNode
  };
  filter__F1__O(pred) {
    return this.filterImpl__F1__Z__sci_HashSet(pred, false)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_HashSet$()
  };
  knownSize__I() {
    return this.sci_HashSet__f_rootNode.sci_BitmapIndexedSetNode__f_size
  };
  size__I() {
    return this.sci_HashSet__f_rootNode.sci_BitmapIndexedSetNode__f_size
  };
  isEmpty__Z() {
    return (this.sci_HashSet__f_rootNode.sci_BitmapIndexedSetNode__f_size === 0)
  };
  iterator__sc_Iterator() {
    return (this.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_SetIterator(this.sci_HashSet__f_rootNode))
  };
  contains__O__Z(element) {
    const elementUnimprovedHash = $m_sr_Statics$().anyHash__O__I(element);
    const elementHash = $m_sc_Hashing$().improve__I__I(elementUnimprovedHash);
    return this.sci_HashSet__f_rootNode.contains__O__I__I__I__Z(element, elementUnimprovedHash, elementHash, 0)
  };
  incl__O__sci_HashSet(element) {
    const elementUnimprovedHash = $m_sr_Statics$().anyHash__O__I(element);
    const elementHash = $m_sc_Hashing$().improve__I__I(elementUnimprovedHash);
    const newRootNode = this.sci_HashSet__f_rootNode.updated__O__I__I__I__sci_BitmapIndexedSetNode(element, elementUnimprovedHash, elementHash, 0);
    return $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet(this, newRootNode)
  };
  excl__O__sci_HashSet(element) {
    const elementUnimprovedHash = $m_sr_Statics$().anyHash__O__I(element);
    const elementHash = $m_sc_Hashing$().improve__I__I(elementUnimprovedHash);
    const newRootNode = this.sci_HashSet__f_rootNode.removed__O__I__I__I__sci_BitmapIndexedSetNode(element, elementUnimprovedHash, elementHash, 0);
    return $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet(this, newRootNode)
  };
  head__O() {
    return this.iterator__sc_Iterator().next__O()
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashSet)) {
      const x2 = $as_sci_HashSet(that);
      if ((this === x2)) {
        return true
      } else {
        const x = this.sci_HashSet__f_rootNode;
        const x$2 = x2.sci_HashSet__f_rootNode;
        return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      }
    } else {
      return $f_sc_Set__equals__O__Z(this, that)
    }
  };
  className__T() {
    return "HashSet"
  };
  hashCode__I() {
    const it = new $c_sci_SetHashIterator(this.sci_HashSet__f_rootNode);
    const hash = $m_s_util_hashing_MurmurHash3$().unorderedHash__sc_IterableOnce__I__I(it, $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_setSeed);
    return hash
  };
  filterImpl__F1__Z__sci_HashSet(pred, isFlipped) {
    const newRootNode = this.sci_HashSet__f_rootNode.filterImpl__F1__Z__sci_BitmapIndexedSetNode(pred, isFlipped);
    if ((newRootNode === this.sci_HashSet__f_rootNode)) {
      return this
    } else if ((newRootNode.sci_BitmapIndexedSetNode__f_size === 0)) {
      const this$1 = $m_sci_HashSet$();
      return this$1.sci_HashSet$__f_EmptySet
    } else {
      return new $c_sci_HashSet(newRootNode)
    }
  };
  drop__I__O(n) {
    return $as_sci_HashSet($f_sc_IterableOps__drop__I__O(this, n))
  };
  tail__O() {
    const elem = this.iterator__sc_Iterator().next__O();
    return this.excl__O__sci_HashSet(elem)
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_HashSet(elem)
  };
}
function $as_sci_HashSet(obj) {
  return (((obj instanceof $c_sci_HashSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet"))
}
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet)))
}
function $asArrayOf_sci_HashSet(obj, depth) {
  return (($isArrayOf_sci_HashSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet;", depth))
}
const $d_sci_HashSet = new $TypeData().initClass({
  sci_HashSet: 0
}, false, "scala.collection.immutable.HashSet", {
  sci_HashSet: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sci_StrictOptimizedSetOps: 1,
  sc_StrictOptimizedSetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet.prototype.$classData = $d_sci_HashSet;
const $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State = (function($thiz) {
  if ((!$thiz.sci_LazyList__f_bitmap$0)) {
    const res = $as_sci_LazyList$State($thiz.sci_LazyList__f_lazyState.apply__O());
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = true;
    $thiz.sci_LazyList__f_lazyState = null;
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state = res;
    $thiz.sci_LazyList__f_bitmap$0 = true
  };
  return $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state
});
const $p_sci_LazyList__mapImpl__F1__sci_LazyList = (function($thiz, f) {
  $m_sci_LazyList$();
  const state = new $c_sjsr_AnonFunction0(((this$1, f$1) => (() => {
    if (this$1.isEmpty__Z()) {
      return $m_sci_LazyList$State$Empty$()
    } else {
      $m_sci_LazyList$();
      const hd = f$1.apply__O__O(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O());
      const tl = $p_sci_LazyList__mapImpl__F1__sci_LazyList(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList(), f$1);
      return new $c_sci_LazyList$State$Cons(hd, tl)
    }
  }))($thiz, f));
  return new $c_sci_LazyList(state)
});
const $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder = (function($thiz, b, start, sep, end) {
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
  } else if ((!$thiz.isEmpty__Z())) {
    const obj = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    let elem = null;
    elem = $thiz;
    const elem$1 = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    let elem$2 = null;
    elem$2 = elem$1;
    if ((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ((!$as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated) || ($as_sci_LazyList(elem).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $as_sci_LazyList(elem$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
      elem = $as_sci_LazyList(elem$2);
      if (($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) {
        const this$3 = $as_sci_LazyList(elem$2);
        elem$2 = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        while (((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) && ($as_sci_LazyList(elem).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $as_sci_LazyList(elem$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State()))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const this$4 = $as_sci_LazyList(elem);
          const obj$1 = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
          const this$5 = $as_sci_LazyList(elem);
          elem = this$5.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          const this$6 = $as_sci_LazyList(elem$2);
          elem$2 = this$6.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          if (($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) {
            const this$7 = $as_sci_LazyList(elem$2);
            elem$2 = this$7.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
          }
        }
      }
    };
    if ((!($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z())))) {
      while (($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2))) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        const this$8 = $as_sci_LazyList(elem);
        const obj$2 = this$8.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
        const this$9 = $as_sci_LazyList(elem);
        elem = this$9.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      if ((!$as_sci_LazyList(elem).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      }
    } else {
      let runner = $thiz;
      let k = 0;
      while (true) {
        const a = runner;
        const b$1 = $as_sci_LazyList(elem$2);
        if ((!((a === b$1) || (a.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          const this$10 = runner;
          runner = this$10.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          const this$11 = $as_sci_LazyList(elem$2);
          elem$2 = this$11.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          k = ((1 + k) | 0)
        } else {
          break
        }
      };
      const a$1 = $as_sci_LazyList(elem);
      const b$2 = $as_sci_LazyList(elem$2);
      if ((((a$1 === b$2) || (a$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State())) && (k > 0))) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        const this$12 = $as_sci_LazyList(elem);
        const obj$3 = this$12.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3);
        const this$13 = $as_sci_LazyList(elem);
        elem = this$13.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      while (true) {
        const a$2 = $as_sci_LazyList(elem);
        const b$3 = $as_sci_LazyList(elem$2);
        if ((!((a$2 === b$3) || (a$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const this$14 = $as_sci_LazyList(elem);
          const obj$4 = this$14.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          const this$15 = $as_sci_LazyList(elem);
          elem = this$15.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
        } else {
          break
        }
      };
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
    }
  };
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
});
class $c_sci_LazyList extends $c_sci_AbstractSeq {
  constructor(lazyState) {
    super();
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$state = null;
    this.sci_LazyList__f_lazyState = null;
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
    this.sci_LazyList__f_bitmap$0 = false;
    this.sci_LazyList__f_lazyState = lazyState;
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false
  };
  stringPrefix__T() {
    return "LinearSeq"
  };
  length__I() {
    return $f_sc_LinearSeqOps__length__I(this)
  };
  lengthCompare__I__I(len) {
    return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  forall__F1__Z(p) {
    return $f_sc_LinearSeqOps__forall__F1__Z(this, p)
  };
  exists__F1__Z(p) {
    return $f_sc_LinearSeqOps__exists__F1__Z(this, p)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  indexWhere__F1__I__I(p, from) {
    return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from)
  };
  scala$collection$immutable$LazyList$$state__sci_LazyList$State() {
    return ((!this.sci_LazyList__f_bitmap$0) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.sci_LazyList__f_scala$collection$immutable$LazyList$$state)
  };
  isEmpty__Z() {
    return (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())
  };
  knownSize__I() {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? 0 : (-1))
  };
  head__O() {
    return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O()
  };
  force__sci_LazyList() {
    let these = this;
    let those = this;
    if ((!these.isEmpty__Z())) {
      const this$1 = these;
      these = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
    };
    while ((those !== these)) {
      if (these.isEmpty__Z()) {
        return this
      };
      const this$2 = these;
      these = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      if (these.isEmpty__Z()) {
        return this
      };
      const this$3 = these;
      these = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      if ((these === those)) {
        return this
      };
      const this$4 = those;
      those = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
    };
    return this
  };
  iterator__sc_Iterator() {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_LazyList$LazyIterator(this))
  };
  foreach__F1__V(f) {
    let _$this = this;
    while (true) {
      if ((!_$this.isEmpty__Z())) {
        const this$1 = _$this;
        f.apply__O__O(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O());
        const this$2 = _$this;
        _$this = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        continue
      };
      break
    }
  };
  className__T() {
    return "LazyList"
  };
  equals__O__Z(that) {
    return ((this === that) || $f_sc_Seq__equals__O__Z(this, that))
  };
  filter__F1__sci_LazyList(pred) {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$filterImpl__sci_LazyList__F1__Z__sci_LazyList(this, pred, false))
  };
  filterNot__F1__sci_LazyList(pred) {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$filterImpl__sci_LazyList__F1__Z__sci_LazyList(this, pred, true))
  };
  map__F1__sci_LazyList(f) {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $p_sci_LazyList__mapImpl__F1__sci_LazyList(this, f))
  };
  drop__I__sci_LazyList(n) {
    return ((n <= 0) ? this : ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(this, n)))
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    this.force__sci_LazyList();
    $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.scm_StringBuilder__f_underlying, start, sep, end);
    return sb
  };
  toString__T() {
    return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  drop__I__O(n) {
    return this.drop__I__sci_LazyList(n)
  };
  map__F1__O(f) {
    return this.map__F1__sci_LazyList(f)
  };
  filterNot__F1__O(pred) {
    return this.filterNot__F1__sci_LazyList(pred)
  };
  filter__F1__O(pred) {
    return this.filter__F1__sci_LazyList(pred)
  };
  tail__O() {
    return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_LazyList$()
  };
}
function $as_sci_LazyList(obj) {
  return (((obj instanceof $c_sci_LazyList) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList"))
}
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList)))
}
function $asArrayOf_sci_LazyList(obj, depth) {
  return (($isArrayOf_sci_LazyList(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList;", depth))
}
const $d_sci_LazyList = new $TypeData().initClass({
  sci_LazyList: 0
}, false, "scala.collection.immutable.LazyList", {
  sci_LazyList: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList.prototype.$classData = $d_sci_LazyList;
const $p_sci_Stream__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder = (function($thiz, b, start, sep, end) {
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.isEmpty__Z())) {
    const obj = $thiz.head__O();
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    let elem = null;
    elem = $thiz;
    if ($thiz.tailDefined__Z()) {
      let scout = $as_sci_Stream($thiz.tail__O());
      if (($as_sci_Stream(elem) !== scout)) {
        elem = scout;
        if (scout.tailDefined__Z()) {
          scout = $as_sci_Stream(scout.tail__O());
          while ((($as_sci_Stream(elem) !== scout) && scout.tailDefined__Z())) {
            b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
            const obj$1 = $as_sci_Stream(elem).head__O();
            b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
            elem = $as_sci_Stream($as_sci_Stream(elem).tail__O());
            scout = $as_sci_Stream(scout.tail__O());
            if (scout.tailDefined__Z()) {
              scout = $as_sci_Stream(scout.tail__O())
            }
          }
        }
      };
      if ((!scout.tailDefined__Z())) {
        while (($as_sci_Stream(elem) !== scout)) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$2 = $as_sci_Stream(elem).head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
          elem = $as_sci_Stream($as_sci_Stream(elem).tail__O())
        };
        const this$2 = $as_sci_Stream(elem);
        if ((!this$2.isEmpty__Z())) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$3 = $as_sci_Stream(elem).head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3)
        }
      } else {
        let runner = $thiz;
        let k = 0;
        while ((runner !== scout)) {
          runner = $as_sci_Stream(runner.tail__O());
          scout = $as_sci_Stream(scout.tail__O());
          k = ((1 + k) | 0)
        };
        if ((($as_sci_Stream(elem) === scout) && (k > 0))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$4 = $as_sci_Stream(elem).head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          elem = $as_sci_Stream($as_sci_Stream(elem).tail__O())
        };
        while (($as_sci_Stream(elem) !== scout)) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$5 = $as_sci_Stream(elem).head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$5);
          elem = $as_sci_Stream($as_sci_Stream(elem).tail__O())
        }
      }
    };
    const this$3 = $as_sci_Stream(elem);
    if ((!this$3.isEmpty__Z())) {
      if ((!$as_sci_Stream(elem).tailDefined__Z())) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      } else {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
      }
    }
  };
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
});
class $c_sci_Stream extends $c_sci_AbstractSeq {
  stringPrefix__T() {
    return "LinearSeq"
  };
  iterator__sc_Iterator() {
    return $f_sc_LinearSeqOps__iterator__sc_Iterator(this)
  };
  length__I() {
    return $f_sc_LinearSeqOps__length__I(this)
  };
  lengthCompare__I__I(len) {
    return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  forall__F1__Z(p) {
    return $f_sc_LinearSeqOps__forall__F1__Z(this, p)
  };
  exists__F1__Z(p) {
    return $f_sc_LinearSeqOps__exists__F1__Z(this, p)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  indexWhere__F1__I__I(p, from) {
    return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from)
  };
  className__T() {
    return "Stream"
  };
  foreach__F1__V(f) {
    let _$this = this;
    while (true) {
      if ((!_$this.isEmpty__Z())) {
        f.apply__O__O(_$this.head__O());
        _$this = $as_sci_Stream(_$this.tail__O());
        continue
      };
      break
    }
  };
  equals__O__Z(that) {
    return ((this === that) || $f_sc_Seq__equals__O__Z(this, that))
  };
  filterImpl__F1__Z__sci_Stream(p, isFlipped) {
    let rest = this;
    while (true) {
      const this$1 = rest;
      if (((!this$1.isEmpty__Z()) && ($uZ(p.apply__O__O(rest.head__O())) === isFlipped))) {
        rest = $as_sci_Stream(rest.tail__O())
      } else {
        break
      }
    };
    const this$2 = rest;
    if ((!this$2.isEmpty__Z())) {
      return $m_sci_Stream$().filteredTail__sci_Stream__F1__Z__sci_Stream(rest, p, isFlipped)
    } else {
      return $m_sci_Stream$Empty$()
    }
  };
  map__F1__sci_Stream(f) {
    if (this.isEmpty__Z()) {
      return $m_sci_Stream$Empty$()
    } else {
      const hd = f.apply__O__O(this.head__O());
      const tl = new $c_sjsr_AnonFunction0(((this$2, f$1) => (() => $as_sci_Stream(this$2.tail__O()).map__F1__sci_Stream(f$1)))(this, f));
      return new $c_sci_Stream$Cons(hd, tl)
    }
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    this.force__sci_Stream();
    $p_sci_Stream__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.scm_StringBuilder__f_underlying, start, sep, end);
    return sb
  };
  toString__T() {
    return $p_sci_Stream__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "Stream"), "(", ", ", ")").jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  map__F1__O(f) {
    return this.map__F1__sci_Stream(f)
  };
  filterNot__F1__O(pred) {
    return this.filterImpl__F1__Z__sci_Stream(pred, true)
  };
  filter__F1__O(pred) {
    return this.filterImpl__F1__Z__sci_Stream(pred, false)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Stream$()
  };
}
function $as_sci_Stream(obj) {
  return (((obj instanceof $c_sci_Stream) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Stream"))
}
function $isArrayOf_sci_Stream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream)))
}
function $asArrayOf_sci_Stream(obj, depth) {
  return (($isArrayOf_sci_Stream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Stream;", depth))
}
class $c_sci_WrappedString extends $c_sci_AbstractSeq {
  constructor(self) {
    super();
    this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self = null;
    this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self = self
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_StringView(this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  map__F1__O(f) {
    return $f_sc_IndexedSeqOps__map__F1__O(this, f)
  };
  lengthCompare__I__I(len) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    const x = $uI(this$1.length);
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $uI(this$1.length)
  };
  length__I() {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $uI(this$1.length)
  };
  toString__T() {
    return this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self
  };
  copyToArray__O__I__I(xs, start) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return this.copyToArray__O__I__I__I(xs, start, $uI(this$1.length))
  };
  copyToArray__O__I__I__I(xs, start, len) {
    if ($isArrayOf_C(xs, 1)) {
      const x2 = $asArrayOf_C(xs, 1);
      const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
      const srcLen = $uI(this$1.length);
      const destLen = x2.u.length;
      const x = ((len < srcLen) ? len : srcLen);
      const y = ((destLen - start) | 0);
      const x$1 = ((x < y) ? x : y);
      const copied = ((x$1 > 0) ? x$1 : 0);
      $f_T__getChars__I__I__AC__I__V(this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self, 0, copied, x2, start);
      return copied
    } else {
      return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
    }
  };
  sameElements__sc_IterableOnce__Z(o) {
    if ((o instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(o);
      return (this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self === x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self)
    } else {
      return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
    }
  };
  className__T() {
    return "WrappedString"
  };
  applyPreferredMaxLength__I() {
    return 2147483647
  };
  equals__O__Z(other) {
    if ((other instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(other);
      return (this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self === x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self)
    } else {
      return $f_sc_Seq__equals__O__Z(this, other)
    }
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_IndexedSeq$()
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $m_sci_WrappedString$().fromSpecific__sc_IterableOnce__sci_WrappedString(coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $m_sci_WrappedString$().fromSpecific__sc_IterableOnce__sci_WrappedString(coll)
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
  apply__I__O(i) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
}
function $as_sci_WrappedString(obj) {
  return (((obj instanceof $c_sci_WrappedString) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.WrappedString"))
}
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_WrappedString)))
}
function $asArrayOf_sci_WrappedString(obj, depth) {
  return (($isArrayOf_sci_WrappedString(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.WrappedString;", depth))
}
const $d_sci_WrappedString = new $TypeData().initClass({
  sci_WrappedString: 0
}, false, "scala.collection.immutable.WrappedString", {
  sci_WrappedString: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_WrappedString.prototype.$classData = $d_sci_WrappedString;
class $c_sjsr_WrappedVarArgs extends $c_O {
  constructor(array) {
    super();
    this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
    this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array
  };
  map__F1__O(f) {
    return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f)
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  filterNot__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, true)
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  sameElements__sc_IterableOnce__Z(o) {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  };
  applyPreferredMaxLength__I() {
    return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    const this$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1);
    return $f_sc_Iterator__indexWhere__F1__I__I(this$2, p, from)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  newSpecificBuilder__scm_Builder() {
    return $m_sjsr_WrappedVarArgs$().newBuilder__scm_Builder()
  };
  head__O() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1).next__O()
  };
  tail__O() {
    return $f_sc_IterableOps__tail__O(this)
  };
  foreach__F1__V(f) {
    $f_sc_IterableOnceOps__foreach__F1__V(this, f)
  };
  forall__F1__Z(p) {
    return $f_sc_IterableOnceOps__forall__F1__Z(this, p)
  };
  exists__F1__Z(p) {
    return $f_sc_IterableOnceOps__exists__F1__Z(this, p)
  };
  copyToArray__O__I__I(xs, start) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I(this, xs, start)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  toList__sci_List() {
    return $m_sci_List$().from__sc_IterableOnce__sci_List(this)
  };
  toArray__s_reflect_ClassTag__O(evidence$2) {
    return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2)
  };
  iterableFactory__sc_SeqFactory() {
    return $m_sjsr_WrappedVarArgs$()
  };
  length__I() {
    return $uI(this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length)
  };
  apply__I__O(idx) {
    return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx]
  };
  className__T() {
    return "WrappedVarArgs"
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    const this$1 = $m_sjsr_WrappedVarArgs$();
    return this$1.from__sc_IterableOnce__sjsr_WrappedVarArgs(coll)
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sjsr_WrappedVarArgs$()
  };
}
function $as_sjsr_WrappedVarArgs(obj) {
  return (((obj instanceof $c_sjsr_WrappedVarArgs) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.WrappedVarArgs"))
}
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_WrappedVarArgs)))
}
function $asArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (($isArrayOf_sjsr_WrappedVarArgs(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.WrappedVarArgs;", depth))
}
const $d_sjsr_WrappedVarArgs = new $TypeData().initClass({
  sjsr_WrappedVarArgs: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs", {
  sjsr_WrappedVarArgs: 1,
  O: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs.prototype.$classData = $d_sjsr_WrappedVarArgs;
const $p_s_xml_NodeSeq__fail$1__T__E = (function($thiz, that$1) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), that$1)
});
const $p_s_xml_NodeSeq__y$lzycompute$1__sr_LazyRef__s_xml_Node = (function($thiz, y$lzy$1) {
  if ((y$lzy$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (y$lzy$1.sr_LazyRef__f__initialized ? $as_s_xml_Node(y$lzy$1.sr_LazyRef__f__value) : $as_s_xml_Node(y$lzy$1.initialize__O__O($as_s_xml_Node($thiz.theSeq__sc_Seq().apply__I__O(0)))))
});
const $p_s_xml_NodeSeq__y$1__sr_LazyRef__s_xml_Node = (function($thiz, y$lzy$1) {
  return (y$lzy$1.sr_LazyRef__f__initialized ? $as_s_xml_Node(y$lzy$1.sr_LazyRef__f__value) : $p_s_xml_NodeSeq__y$lzycompute$1__sr_LazyRef__s_xml_Node($thiz, y$lzy$1))
});
const $p_s_xml_NodeSeq__atResult$1__T__s_xml_NodeSeq = (function($thiz, that$1) {
  const y$lzy = new $c_sr_LazyRef();
  if (($uI(that$1.length) === 1)) {
    $p_s_xml_NodeSeq__fail$1__T__E($thiz, that$1)
  };
  let attr;
  if (((65535 & $uI(that$1.charCodeAt(1))) === 123)) {
    const i = $f_T__indexOf__I__I(that$1, 125);
    if ((i === (-1))) {
      $p_s_xml_NodeSeq__fail$1__T__E($thiz, that$1)
    };
    const _1 = $as_T(that$1.substring(2, i));
    const beginIndex = ((1 + i) | 0);
    const endIndex = $uI(that$1.length);
    const _2 = $as_T(that$1.substring(beginIndex, endIndex));
    if (((_1 === "") || (_2 === ""))) {
      $p_s_xml_NodeSeq__fail$1__T__E($thiz, that$1)
    };
    const this$3 = $p_s_xml_NodeSeq__y$1__sr_LazyRef__s_xml_Node($thiz, y$lzy);
    const this$4 = this$3.attributes__s_xml_MetaData();
    attr = this$4.get__T__s_xml_NamespaceBinding__T__s_Option(_1, this$3.scope__s_xml_NamespaceBinding(), _2)
  } else {
    const this$6 = $p_s_xml_NodeSeq__y$1__sr_LazyRef__s_xml_Node($thiz, y$lzy);
    const key = $m_sc_StringOps$().drop$extension__T__I__T(that$1, 1);
    attr = this$6.attributes__s_xml_MetaData().get__T__s_Option(key)
  };
  if ((attr instanceof $c_s_Some)) {
    const x2 = $as_s_Some(attr);
    const x = $as_sc_Seq(x2.s_Some__f_value);
    return new $c_s_xml_Group(x)
  } else {
    return $m_s_xml_NodeSeq$().s_xml_NodeSeq$__f_Empty
  }
});
const $p_s_xml_NodeSeq__makeSeq$1__F1__s_xml_NodeSeq = (function($thiz, cond) {
  $m_s_xml_NodeSeq$();
  const b = $m_sci_Seq$().newBuilder__scm_Builder();
  const it = $thiz.theSeq__sc_Seq().iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    const arg1 = it.next__O();
    const x$2 = $as_s_xml_Node(arg1);
    const xs = x$2.child__sc_Seq();
    b.addAll__sc_IterableOnce__scm_Growable(xs)
  };
  const s = $as_sc_Seq($as_sc_IterableOps(b.result__O()).filter__F1__O(cond));
  return new $c_s_xml_NodeSeq$$anon$1(s)
});
class $c_s_xml_NodeSeq extends $c_sc_AbstractSeq {
  hashCode__I() {
    const x = this.basisForHashCode__sc_Seq();
    return $m_sr_Statics$().anyHash__O__I(x)
  };
  equals__O__Z(other) {
    return $p_s_xml_Equality__doComparison__O__Z__Z(this, other, false)
  };
  newSpecificBuilder__scm_Builder() {
    return $m_s_xml_NodeSeq$().newBuilder__scm_Builder()
  };
  map__F1__O(f) {
    return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f)
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  filterNot__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, true)
  };
  iterableFactory__sc_SeqFactory() {
    return $m_sci_Seq$()
  };
  length__I() {
    return this.theSeq__sc_Seq().length__I()
  };
  iterator__sc_Iterator() {
    return this.theSeq__sc_Seq().iterator__sc_Iterator()
  };
  basisForHashCode__sc_Seq() {
    return this.theSeq__sc_Seq()
  };
  canEqual__O__Z(other) {
    return (other instanceof $c_s_xml_NodeSeq)
  };
  strict_$eq$eq__s_xml_Equality__Z(other) {
    if ((other instanceof $c_s_xml_NodeSeq)) {
      const x2 = $as_s_xml_NodeSeq(other);
      return ((this.theSeq__sc_Seq().length__I() === x2.theSeq__sc_Seq().length__I()) && this.theSeq__sc_Seq().sameElements__sc_IterableOnce__Z(x2.theSeq__sc_Seq()))
    } else {
      return false
    }
  };
  $bslash__T__s_xml_NodeSeq(that) {
    return ((that === "") ? $p_s_xml_NodeSeq__fail$1__T__E(this, that) : ((that === "_") ? $p_s_xml_NodeSeq__makeSeq$1__F1__s_xml_NodeSeq(this, new $c_sjsr_AnonFunction1(((this$1) => ((x$3$2) => {
      const x$3 = $as_s_xml_Node(x$3$2);
      return (!(x$3 instanceof $c_s_xml_Atom))
    }))(this))) : ((that === "@") ? $p_s_xml_NodeSeq__fail$1__T__E(this, that) : ((((65535 & $uI(that.charCodeAt(0))) === 64) && (this.theSeq__sc_Seq().length__I() === 1)) ? $p_s_xml_NodeSeq__atResult$1__T__s_xml_NodeSeq(this, that) : $p_s_xml_NodeSeq__makeSeq$1__F1__s_xml_NodeSeq(this, new $c_sjsr_AnonFunction1(((this$2$1, that$1) => ((x$4$2) => {
      const x$4 = $as_s_xml_Node(x$4$2);
      return (x$4.label__T() === that$1)
    }))(this, that)))))))
  };
  $bslash$at__T__T(attributeName) {
    return this.$bslash__T__s_xml_NodeSeq(("@" + attributeName)).text__T()
  };
  toString__T() {
    const this$1 = this.theSeq__sc_Seq();
    return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, "", "", "")
  };
  text__T() {
    const b = $m_sci_Seq$().newBuilder__scm_Builder();
    const it = this.theSeq__sc_Seq().iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      const arg1 = it.next__O();
      const x$9 = $as_s_xml_Node(arg1);
      const elem = x$9.text__T();
      b.addOne__O__scm_Growable(elem)
    };
    const this$1 = $as_sc_IterableOnceOps(b.result__O());
    return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, "", "", "")
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Seq$()
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $f_s_xml_ScalaVersionSpecificNodeSeq__fromSpecific__sc_IterableOnce__s_xml_NodeSeq(this, coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $f_s_xml_ScalaVersionSpecificNodeSeq__fromSpecific__sc_IterableOnce__s_xml_NodeSeq(this, coll)
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    return $as_s_xml_Node(this.theSeq__sc_Seq().apply__I__O(i))
  };
  apply__I__O(i) {
    return $as_s_xml_Node(this.theSeq__sc_Seq().apply__I__O(i))
  };
}
function $as_s_xml_NodeSeq(obj) {
  return (((obj instanceof $c_s_xml_NodeSeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.xml.NodeSeq"))
}
function $isArrayOf_s_xml_NodeSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_xml_NodeSeq)))
}
function $asArrayOf_s_xml_NodeSeq(obj, depth) {
  return (($isArrayOf_s_xml_NodeSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.xml.NodeSeq;", depth))
}
class $c_sci_HashMap extends $c_sci_AbstractMap {
  constructor(rootNode) {
    super();
    this.sci_HashMap__f_rootNode = null;
    this.sci_HashMap__f_rootNode = rootNode
  };
  map__F1__sc_IterableOps(f) {
    return $f_sc_StrictOptimizedMapOps__map__F1__sc_IterableOps(this, f)
  };
  filter__F1__O(pred) {
    return this.filterImpl__F1__Z__sci_HashMap(pred, false)
  };
  mapFactory__sc_MapFactory() {
    return $m_sci_HashMap$()
  };
  knownSize__I() {
    return this.sci_HashMap__f_rootNode.sci_BitmapIndexedMapNode__f_size
  };
  size__I() {
    return this.sci_HashMap__f_rootNode.sci_BitmapIndexedMapNode__f_size
  };
  isEmpty__Z() {
    return (this.sci_HashMap__f_rootNode.sci_BitmapIndexedMapNode__f_size === 0)
  };
  iterator__sc_Iterator() {
    return (this.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_MapKeyValueTupleIterator(this.sci_HashMap__f_rootNode))
  };
  contains__O__Z(key) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
    return this.sci_HashMap__f_rootNode.containsKey__O__I__I__I__Z(key, keyUnimprovedHash, keyHash, 0)
  };
  apply__O__O(key) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
    return this.sci_HashMap__f_rootNode.apply__O__I__I__I__O(key, keyUnimprovedHash, keyHash, 0)
  };
  get__O__s_Option(key) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
    return this.sci_HashMap__f_rootNode.get__O__I__I__I__s_Option(key, keyUnimprovedHash, keyHash, 0)
  };
  getOrElse__O__F0__O(key, default$1) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
    return this.sci_HashMap__f_rootNode.getOrElse__O__I__I__I__F0__O(key, keyUnimprovedHash, keyHash, 0, default$1)
  };
  updated__O__O__sci_HashMap(key, value) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const newRootNode = this.sci_HashMap__f_rootNode.updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, keyUnimprovedHash, $m_sc_Hashing$().improve__I__I(keyUnimprovedHash), 0, true);
    return ((newRootNode === this.sci_HashMap__f_rootNode) ? this : new $c_sci_HashMap(newRootNode))
  };
  removed__O__sci_HashMap(key) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const newRootNode = this.sci_HashMap__f_rootNode.removed__O__I__I__I__sci_BitmapIndexedMapNode(key, keyUnimprovedHash, $m_sc_Hashing$().improve__I__I(keyUnimprovedHash), 0);
    return ((newRootNode === this.sci_HashMap__f_rootNode) ? this : new $c_sci_HashMap(newRootNode))
  };
  tail__sci_HashMap() {
    const key = $as_T2(this.iterator__sc_Iterator().next__O()).T2__f__1;
    return this.removed__O__sci_HashMap(key)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashMap)) {
      const x2 = $as_sci_HashMap(that);
      if ((this === x2)) {
        return true
      } else {
        const x = this.sci_HashMap__f_rootNode;
        const x$2 = x2.sci_HashMap__f_rootNode;
        return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      }
    } else {
      return $f_sc_Map__equals__O__Z(this, that)
    }
  };
  hashCode__I() {
    const hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.sci_HashMap__f_rootNode);
    const hash = $m_s_util_hashing_MurmurHash3$().unorderedHash__sc_IterableOnce__I__I(hashIterator, $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed);
    return hash
  };
  className__T() {
    return "HashMap"
  };
  filterImpl__F1__Z__sci_HashMap(pred, isFlipped) {
    const newRootNode = this.sci_HashMap__f_rootNode.filterImpl__F1__Z__sci_BitmapIndexedMapNode(pred, isFlipped);
    if ((newRootNode === this.sci_HashMap__f_rootNode)) {
      return this
    } else if ((newRootNode.sci_BitmapIndexedMapNode__f_size === 0)) {
      const this$1 = $m_sci_HashMap$();
      return this$1.sci_HashMap$__f_EmptyMap
    } else {
      return new $c_sci_HashMap(newRootNode)
    }
  };
  drop__I__O(n) {
    return $as_sci_HashMap($f_sc_IterableOps__drop__I__O(this, n))
  };
  head__O() {
    return $as_T2(this.iterator__sc_Iterator().next__O())
  };
  tail__O() {
    return this.tail__sci_HashMap()
  };
  removed__O__sci_MapOps(key) {
    return this.removed__O__sci_HashMap(key)
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_HashMap(key, value)
  };
}
function $as_sci_HashMap(obj) {
  return (((obj instanceof $c_sci_HashMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap"))
}
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap)))
}
function $asArrayOf_sci_HashMap(obj, depth) {
  return (($isArrayOf_sci_HashMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap;", depth))
}
const $d_sci_HashMap = new $TypeData().initClass({
  sci_HashMap: 0
}, false, "scala.collection.immutable.HashMap", {
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sci_StrictOptimizedMapOps: 1,
  sc_StrictOptimizedMapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashMap.prototype.$classData = $d_sci_HashMap;
class $c_sci_Stream$Cons extends $c_sci_Stream {
  constructor(head, tl) {
    super();
    this.sci_Stream$Cons__f_head = null;
    this.sci_Stream$Cons__f_tlVal = null;
    this.sci_Stream$Cons__f_tlGen = null;
    this.sci_Stream$Cons__f_head = head;
    this.sci_Stream$Cons__f_tlGen = tl
  };
  head__O() {
    return this.sci_Stream$Cons__f_head
  };
  isEmpty__Z() {
    return false
  };
  tailDefined__Z() {
    return (this.sci_Stream$Cons__f_tlGen === null)
  };
  tail__sci_Stream() {
    if ((!this.tailDefined__Z())) {
      if ((!this.tailDefined__Z())) {
        this.sci_Stream$Cons__f_tlVal = $as_sci_Stream(this.sci_Stream$Cons__f_tlGen.apply__O());
        this.sci_Stream$Cons__f_tlGen = null
      }
    };
    return this.sci_Stream$Cons__f_tlVal
  };
  force__sci_Stream$Cons() {
    let these = this;
    let those = this;
    if ((!these.isEmpty__Z())) {
      these = $as_sci_Stream(these.tail__O())
    };
    while ((those !== these)) {
      if (these.isEmpty__Z()) {
        return this
      };
      these = $as_sci_Stream(these.tail__O());
      if (these.isEmpty__Z()) {
        return this
      };
      these = $as_sci_Stream(these.tail__O());
      if ((these === those)) {
        return this
      };
      those = $as_sci_Stream(those.tail__O())
    };
    return this
  };
  force__sci_Stream() {
    return this.force__sci_Stream$Cons()
  };
  tail__O() {
    return this.tail__sci_Stream()
  };
}
const $d_sci_Stream$Cons = new $TypeData().initClass({
  sci_Stream$Cons: 0
}, false, "scala.collection.immutable.Stream$Cons", {
  sci_Stream$Cons: 1,
  sci_Stream: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Cons.prototype.$classData = $d_sci_Stream$Cons;
class $c_sci_Stream$Empty$ extends $c_sci_Stream {
  isEmpty__Z() {
    return true
  };
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty stream")
  };
  tail__sci_Stream() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty stream")
  };
  knownSize__I() {
    return 0
  };
  tailDefined__Z() {
    return false
  };
  force__sci_Stream() {
    return this
  };
  tail__O() {
    return this.tail__sci_Stream()
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_Stream$Empty$ = new $TypeData().initClass({
  sci_Stream$Empty$: 0
}, false, "scala.collection.immutable.Stream$Empty$", {
  sci_Stream$Empty$: 1,
  sci_Stream: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Empty$.prototype.$classData = $d_sci_Stream$Empty$;
let $n_sci_Stream$Empty$ = (void 0);
function $m_sci_Stream$Empty$() {
  if ((!$n_sci_Stream$Empty$)) {
    $n_sci_Stream$Empty$ = new $c_sci_Stream$Empty$()
  };
  return $n_sci_Stream$Empty$
}
class $c_scm_AbstractBuffer extends $c_scm_AbstractSeq {
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  };
}
class $c_scm_AbstractMap extends $c_sc_AbstractMap {
  iterableFactory__sc_IterableFactory() {
    return $m_scm_Iterable$()
  };
  result__O() {
    return this
  };
}
class $c_s_xml_Node extends $c_s_xml_NodeSeq {
  prefix__T() {
    return null
  };
  scope__s_xml_NamespaceBinding() {
    return $m_s_xml_TopScope$()
  };
  nonEmptyChildren__sc_Seq() {
    return $as_sc_Seq(this.child__sc_Seq().filterNot__F1__O(new $c_sjsr_AnonFunction1(((this$1) => ((x$1$2) => {
      const x$1 = $as_s_xml_Node(x$1$2);
      return (x$1.buildString__Z__T(false) === "")
    }))(this))))
  };
  canEqual__O__Z(other) {
    return ((!(other instanceof $c_s_xml_Group)) && (other instanceof $c_s_xml_Node))
  };
  strict_$eq$eq__s_xml_Equality__Z(other) {
    if ((!(other instanceof $c_s_xml_Group))) {
      if ((other instanceof $c_s_xml_Node)) {
        const x3 = $as_s_xml_Node(other);
        let $$x1;
        if (((this.prefix__T() === x3.prefix__T()) && (this.label__T() === x3.label__T()))) {
          const x = this.attributes__s_xml_MetaData();
          const x$2 = x3.attributes__s_xml_MetaData();
          $$x1 = ((x === null) ? (x$2 === null) : $p_s_xml_Equality__doComparison__O__Z__Z(x, x$2, false))
        } else {
          $$x1 = false
        };
        if ($$x1) {
          return this.nonEmptyChildren__sc_Seq().sameElements__sc_IterableOnce__Z(x3.nonEmptyChildren__sc_Seq())
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  };
  theSeq__sc_Seq() {
    const this$1 = $m_sci_Nil$();
    return new $c_sci_$colon$colon(this, this$1)
  };
  buildString__Z__T(stripComments) {
    const x$3 = $m_s_xml_TopScope$();
    const x$4 = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
    const x$7 = $m_s_xml_MinimizeMode$().s_xml_MinimizeMode$__f_Default;
    const this$4 = $m_s_xml_Utility$().serialize__s_xml_Node__s_xml_NamespaceBinding__scm_StringBuilder__Z__Z__Z__s_Enumeration$Value__scm_StringBuilder(this, x$3, x$4, stripComments, true, false, x$7);
    return this$4.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  toString__T() {
    return this.buildString__Z__T(false)
  };
  nameToString__scm_StringBuilder__scm_StringBuilder(sb) {
    if ((this.prefix__T() !== null)) {
      sb.append__T__scm_StringBuilder(this.prefix__T());
      sb.append__C__scm_StringBuilder(58)
    };
    return sb.append__T__scm_StringBuilder(this.label__T())
  };
  text__T() {
    return $c_s_xml_NodeSeq.prototype.text__T.call(this)
  };
}
function $as_s_xml_Node(obj) {
  return (((obj instanceof $c_s_xml_Node) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.xml.Node"))
}
function $isArrayOf_s_xml_Node(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_xml_Node)))
}
function $asArrayOf_s_xml_Node(obj, depth) {
  return (($isArrayOf_s_xml_Node(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.xml.Node;", depth))
}
class $c_s_xml_NodeSeq$$anon$1 extends $c_s_xml_NodeSeq {
  constructor(s$1) {
    super();
    this.s_xml_NodeSeq$$anon$1__f_s$1 = null;
    this.s_xml_NodeSeq$$anon$1__f_s$1 = s$1
  };
  theSeq__sc_Seq() {
    return this.s_xml_NodeSeq$$anon$1__f_s$1
  };
}
const $d_s_xml_NodeSeq$$anon$1 = new $TypeData().initClass({
  s_xml_NodeSeq$$anon$1: 0
}, false, "scala.xml.NodeSeq$$anon$1", {
  s_xml_NodeSeq$$anon$1: 1,
  s_xml_NodeSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  s_xml_ScalaVersionSpecificNodeSeq: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  s_xml_Equality: 1,
  Ljava_io_Serializable: 1
});
$c_s_xml_NodeSeq$$anon$1.prototype.$classData = $d_s_xml_NodeSeq$$anon$1;
class $c_s_xml_Elem extends $c_s_xml_Node {
  constructor(prefix, label, attributes1, scope, minimizeEmpty, child) {
    super();
    this.s_xml_Elem__f_prefix = null;
    this.s_xml_Elem__f_label = null;
    this.s_xml_Elem__f_scope = null;
    this.s_xml_Elem__f_minimizeEmpty = false;
    this.s_xml_Elem__f_child = null;
    this.s_xml_Elem__f_attributes = null;
    this.s_xml_Elem__f_prefix = prefix;
    this.s_xml_Elem__f_label = label;
    this.s_xml_Elem__f_scope = scope;
    this.s_xml_Elem__f_minimizeEmpty = minimizeEmpty;
    this.s_xml_Elem__f_child = child;
    this.s_xml_Elem__f_attributes = $m_s_xml_MetaData$().normalize__s_xml_MetaData__s_xml_NamespaceBinding__s_xml_MetaData(attributes1, scope);
    if ((prefix === "")) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "prefix of zero length, use null instead")
    };
    if ((scope === null)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "scope is null, use scala.xml.TopScope for empty scope")
    }
  };
  prefix__T() {
    return this.s_xml_Elem__f_prefix
  };
  label__T() {
    return this.s_xml_Elem__f_label
  };
  scope__s_xml_NamespaceBinding() {
    return this.s_xml_Elem__f_scope
  };
  attributes__s_xml_MetaData() {
    return this.s_xml_Elem__f_attributes
  };
  basisForHashCode__sc_Seq() {
    const rassoc$3 = this.s_xml_Elem__f_prefix;
    const rassoc$2 = this.s_xml_Elem__f_label;
    const rassoc$1 = this.s_xml_Elem__f_attributes;
    const this$1 = this.s_xml_Elem__f_child.toList__sci_List();
    const this$2 = new $c_sci_$colon$colon(rassoc$1, this$1);
    const this$3 = new $c_sci_$colon$colon(rassoc$2, this$2);
    return new $c_sci_$colon$colon(rassoc$3, this$3)
  };
  text__T() {
    const this$2 = $as_sc_IterableOnceOps(this.s_xml_Elem__f_child.map__F1__O(new $c_sjsr_AnonFunction1(((this$1) => ((x$1$2) => {
      const x$1 = $as_s_xml_Node(x$1$2);
      return x$1.text__T()
    }))(this))));
    return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$2, "", "", "")
  };
  child__sc_Seq() {
    return this.s_xml_Elem__f_child
  };
}
function $as_s_xml_Elem(obj) {
  return (((obj instanceof $c_s_xml_Elem) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.xml.Elem"))
}
function $isArrayOf_s_xml_Elem(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_xml_Elem)))
}
function $asArrayOf_s_xml_Elem(obj, depth) {
  return (($isArrayOf_s_xml_Elem(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.xml.Elem;", depth))
}
const $d_s_xml_Elem = new $TypeData().initClass({
  s_xml_Elem: 0
}, false, "scala.xml.Elem", {
  s_xml_Elem: 1,
  s_xml_Node: 1,
  s_xml_NodeSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  s_xml_ScalaVersionSpecificNodeSeq: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  s_xml_Equality: 1,
  Ljava_io_Serializable: 1
});
$c_s_xml_Elem.prototype.$classData = $d_s_xml_Elem;
class $c_s_xml_SpecialNode extends $c_s_xml_Node {
  child__sc_Seq() {
    return $m_sci_Nil$()
  };
  attributes__s_xml_MetaData() {
    return $m_s_xml_Null$()
  };
}
function $as_s_xml_SpecialNode(obj) {
  return (((obj instanceof $c_s_xml_SpecialNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.xml.SpecialNode"))
}
function $isArrayOf_s_xml_SpecialNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_xml_SpecialNode)))
}
function $asArrayOf_s_xml_SpecialNode(obj, depth) {
  return (($isArrayOf_s_xml_SpecialNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.xml.SpecialNode;", depth))
}
const $ct_s_xml_Atom__O__ = (function($thiz, data) {
  $thiz.s_xml_Atom__f_data = data;
  if ((data === null)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("cannot construct " + $objectGetClass($thiz).getSimpleName__T()) + " with null"))
  };
  return $thiz
});
class $c_s_xml_Atom extends $c_s_xml_SpecialNode {
  constructor() {
    super();
    this.s_xml_Atom__f_data = null
  };
  basisForHashCode__sc_Seq() {
    const $$x1 = $m_sc_Seq$();
    const array = [this.s_xml_Atom__f_data];
    return $as_sc_Seq($$x1.apply__sci_Seq__sc_SeqOps(new $c_sjsr_WrappedVarArgs(array)))
  };
  strict_$eq$eq__s_xml_Equality__Z(other) {
    if ((other instanceof $c_s_xml_Atom)) {
      const x2 = $as_s_xml_Atom(other);
      const x = this.s_xml_Atom__f_data;
      const y = x2.s_xml_Atom__f_data;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
    } else {
      return false
    }
  };
  canEqual__O__Z(other) {
    return (other instanceof $c_s_xml_Atom)
  };
  label__T() {
    return "#PCDATA"
  };
  text__T() {
    return $dp_toString__T(this.s_xml_Atom__f_data)
  };
}
function $as_s_xml_Atom(obj) {
  return (((obj instanceof $c_s_xml_Atom) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.xml.Atom"))
}
function $isArrayOf_s_xml_Atom(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_xml_Atom)))
}
function $asArrayOf_s_xml_Atom(obj, depth) {
  return (($isArrayOf_s_xml_Atom(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.xml.Atom;", depth))
}
const $p_s_xml_Group__fail__T__E = (function($thiz, msg) {
  const $$x1 = $m_sc_StringOps$();
  const array = [msg];
  throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), $$x1.format$extension__T__sci_Seq__T("class Group does not support method '%s'", new $c_sjsr_WrappedVarArgs(array)))
});
class $c_s_xml_Group extends $c_s_xml_Node {
  constructor(nodes) {
    super();
    this.s_xml_Group__f_nodes = null;
    this.s_xml_Group__f_nodes = nodes
  };
  theSeq__sc_Seq() {
    return this.s_xml_Group__f_nodes
  };
  canEqual__O__Z(other) {
    return (other instanceof $c_s_xml_Group)
  };
  strict_$eq$eq__s_xml_Equality__Z(other) {
    if ((other instanceof $c_s_xml_Group)) {
      const x2 = $as_s_xml_Group(other);
      const xs = x2.s_xml_Group__f_nodes;
      return this.s_xml_Group__f_nodes.sameElements__sc_IterableOnce__Z(xs)
    } else {
      return false
    }
  };
  basisForHashCode__sc_Seq() {
    return this.s_xml_Group__f_nodes
  };
  productPrefix__T() {
    return "Group"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.s_xml_Group__f_nodes : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  child__sc_Seq() {
    $p_s_xml_Group__fail__T__E(this, "child")
  };
  attributes__s_xml_MetaData() {
    $p_s_xml_Group__fail__T__E(this, "attributes")
  };
  label__T() {
    $p_s_xml_Group__fail__T__E(this, "label")
  };
}
function $as_s_xml_Group(obj) {
  return (((obj instanceof $c_s_xml_Group) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.xml.Group"))
}
function $isArrayOf_s_xml_Group(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_xml_Group)))
}
function $asArrayOf_s_xml_Group(obj, depth) {
  return (($isArrayOf_s_xml_Group(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.xml.Group;", depth))
}
const $d_s_xml_Group = new $TypeData().initClass({
  s_xml_Group: 0
}, false, "scala.xml.Group", {
  s_xml_Group: 1,
  s_xml_Node: 1,
  s_xml_NodeSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  s_xml_ScalaVersionSpecificNodeSeq: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  s_xml_Equality: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_s_xml_Group.prototype.$classData = $d_s_xml_Group;
class $c_sci_ArraySeq {
}
function $as_sci_ArraySeq(obj) {
  return (((obj instanceof $c_sci_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq"))
}
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq)))
}
function $asArrayOf_sci_ArraySeq(obj, depth) {
  return (($isArrayOf_sci_ArraySeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq;", depth))
}
class $c_s_xml_Comment {
}
function $as_s_xml_Comment(obj) {
  return (((obj instanceof $c_s_xml_Comment) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.xml.Comment"))
}
function $isArrayOf_s_xml_Comment(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_xml_Comment)))
}
function $asArrayOf_s_xml_Comment(obj, depth) {
  return (($isArrayOf_s_xml_Comment(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.xml.Comment;", depth))
}
class $c_s_xml_Text extends $c_s_xml_Atom {
  constructor(data) {
    super();
    $ct_s_xml_Atom__O__(this, data)
  };
}
function $as_s_xml_Text(obj) {
  return (((obj instanceof $c_s_xml_Text) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.xml.Text"))
}
function $isArrayOf_s_xml_Text(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_xml_Text)))
}
function $asArrayOf_s_xml_Text(obj, depth) {
  return (($isArrayOf_s_xml_Text(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.xml.Text;", depth))
}
const $d_s_xml_Text = new $TypeData().initClass({
  s_xml_Text: 0
}, false, "scala.xml.Text", {
  s_xml_Text: 1,
  s_xml_Atom: 1,
  s_xml_SpecialNode: 1,
  s_xml_Node: 1,
  s_xml_NodeSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  s_xml_ScalaVersionSpecificNodeSeq: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  s_xml_Equality: 1,
  Ljava_io_Serializable: 1
});
$c_s_xml_Text.prototype.$classData = $d_s_xml_Text;
const $p_sci_List__filterImpl__F1__Z__sci_List = (function($thiz, p, isFlipped) {
  const result = $p_sci_List__noneIn$1__sci_List__F1__Z__sci_List($thiz, $thiz, p, isFlipped);
  return result
});
const $p_sci_List__loop$2__I__sci_List__I__I = (function($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      const temp$i = ((1 + i) | 0);
      const temp$xs = $as_sci_List(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
});
const $p_sci_List__noneIn$1__sci_List__F1__Z__sci_List = (function($thiz, l, p$1, isFlipped$1) {
  while (true) {
    if (l.isEmpty__Z()) {
      return $m_sci_Nil$()
    } else {
      const h = l.head__O();
      const t = $as_sci_List(l.tail__O());
      if (($uZ(p$1.apply__O__O(h)) !== isFlipped$1)) {
        return $p_sci_List__allIn$1__sci_List__sci_List__F1__Z__sci_List($thiz, l, t, p$1, isFlipped$1)
      } else {
        l = t
      }
    }
  }
});
const $p_sci_List__allIn$1__sci_List__sci_List__F1__Z__sci_List = (function($thiz, start, remaining, p$1, isFlipped$1) {
  while (true) {
    if (remaining.isEmpty__Z()) {
      return start
    } else {
      const x = remaining.head__O();
      if (($uZ(p$1.apply__O__O(x)) !== isFlipped$1)) {
        remaining = $as_sci_List(remaining.tail__O())
      } else {
        return $p_sci_List__partialFill$1__sci_List__sci_List__F1__Z__sci_List($thiz, start, remaining, p$1, isFlipped$1)
      }
    }
  }
});
const $p_sci_List__partialFill$1__sci_List__sci_List__F1__Z__sci_List = (function($thiz, origStart, firstMiss, p$1, isFlipped$1) {
  const newHead = new $c_sci_$colon$colon(origStart.head__O(), $m_sci_Nil$());
  let toProcess = $as_sci_List(origStart.tail__O());
  let currentLast = newHead;
  while ((toProcess !== firstMiss)) {
    const newElem = new $c_sci_$colon$colon(toProcess.head__O(), $m_sci_Nil$());
    currentLast.sci_$colon$colon__f_next = newElem;
    currentLast = newElem;
    toProcess = $as_sci_List(toProcess.tail__O())
  };
  let next = $as_sci_List(firstMiss.tail__O());
  let nextToCopy = next;
  while ((!next.isEmpty__Z())) {
    const head = next.head__O();
    if (($uZ(p$1.apply__O__O(head)) !== isFlipped$1)) {
      next = $as_sci_List(next.tail__O())
    } else {
      while ((nextToCopy !== next)) {
        const newElem$2 = new $c_sci_$colon$colon(nextToCopy.head__O(), $m_sci_Nil$());
        currentLast.sci_$colon$colon__f_next = newElem$2;
        currentLast = newElem$2;
        nextToCopy = $as_sci_List(nextToCopy.tail__O())
      };
      nextToCopy = $as_sci_List(next.tail__O());
      next = $as_sci_List(next.tail__O())
    }
  };
  if ((!nextToCopy.isEmpty__Z())) {
    currentLast.sci_$colon$colon__f_next = nextToCopy
  };
  return newHead
});
const $p_sci_List__listEq$1__sci_List__sci_List__Z = (function($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      const aEmpty = a.isEmpty__Z();
      const bEmpty = b.isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        const temp$a = $as_sci_List(a.tail__O());
        const temp$b = $as_sci_List(b.tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (aEmpty && bEmpty)
      }
    }
  }
});
class $c_sci_List extends $c_sci_AbstractSeq {
  iterator__sc_Iterator() {
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this)
  };
  stringPrefix__T() {
    return "LinearSeq"
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  indexWhere__F1__I__I(p, from) {
    return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from)
  };
  iterableFactory__sc_SeqFactory() {
    return $m_sci_List$()
  };
  isEmpty__Z() {
    return (this === $m_sci_Nil$())
  };
  map__F1__sci_List(f) {
    if ((this === $m_sci_Nil$())) {
      return $m_sci_Nil$()
    } else {
      const h = new $c_sci_$colon$colon(f.apply__O__O(this.head__O()), $m_sci_Nil$());
      let t = h;
      let rest = $as_sci_List(this.tail__O());
      while ((rest !== $m_sci_Nil$())) {
        const nx = new $c_sci_$colon$colon(f.apply__O__O(rest.head__O()), $m_sci_Nil$());
        t.sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $as_sci_List(rest.tail__O())
      };
      return h
    }
  };
  foreach__F1__V(f) {
    let these = this;
    while ((!these.isEmpty__Z())) {
      f.apply__O__O(these.head__O());
      these = $as_sci_List(these.tail__O())
    }
  };
  length__I() {
    let these = this;
    let len = 0;
    while ((!these.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sci_List(these.tail__O())
    };
    return len
  };
  lengthCompare__I__I(len) {
    return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len))
  };
  forall__F1__Z(p) {
    let these = this;
    while ((!these.isEmpty__Z())) {
      if ((!$uZ(p.apply__O__O(these.head__O())))) {
        return false
      };
      these = $as_sci_List(these.tail__O())
    };
    return true
  };
  exists__F1__Z(p) {
    let these = this;
    while ((!these.isEmpty__Z())) {
      if ($uZ(p.apply__O__O(these.head__O()))) {
        return true
      };
      these = $as_sci_List(these.tail__O())
    };
    return false
  };
  className__T() {
    return "List"
  };
  toList__sci_List() {
    return this
  };
  equals__O__Z(o) {
    if ((o instanceof $c_sci_List)) {
      const x2 = $as_sci_List(o);
      return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2)
    } else {
      return $f_sc_Seq__equals__O__Z(this, o)
    }
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  drop__I__O(n) {
    return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this)
  };
  filterNot__F1__O(pred) {
    return $p_sci_List__filterImpl__F1__Z__sci_List(this, pred, true)
  };
  filter__F1__O(pred) {
    return $p_sci_List__filterImpl__F1__Z__sci_List(this, pred, false)
  };
  map__F1__O(f) {
    return this.map__F1__sci_List(f)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_List$()
  };
}
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
const $p_sci_Vector__checkRangeConvert__I__I = (function($thiz, index) {
  const idx = ((index + $thiz.sci_Vector__f_startIndex) | 0);
  if (((index >= 0) && (idx < $thiz.sci_Vector__f_endIndex))) {
    return idx
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + $thiz.sci_Vector__f_endIndex) | 0)) + ")"))
  }
});
const $p_sci_Vector__getElem__I__I__O = (function($thiz, index, xor) {
  if ((xor < 32)) {
    return $thiz.sci_Vector__f_display0.get((31 & index))
  } else if ((xor < 1024)) {
    return $thiz.sci_Vector__f_display1.get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else if ((xor < 32768)) {
    return $thiz.sci_Vector__f_display2.get((31 & ((index >>> 10) | 0))).get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else if ((xor < 1048576)) {
    return $thiz.sci_Vector__f_display3.get((31 & ((index >>> 15) | 0))).get((31 & ((index >>> 10) | 0))).get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else if ((xor < 33554432)) {
    return $thiz.sci_Vector__f_display4.get((31 & ((index >>> 20) | 0))).get((31 & ((index >>> 15) | 0))).get((31 & ((index >>> 10) | 0))).get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else if ((xor < 1073741824)) {
    return $thiz.sci_Vector__f_display5.get((31 & ((index >>> 25) | 0))).get((31 & ((index >>> 20) | 0))).get((31 & ((index >>> 15) | 0))).get((31 & ((index >>> 10) | 0))).get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $p_sci_Vector__gotoPosWritable__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  if ($thiz.sci_Vector__f_dirty) {
    $f_sci_VectorPointer__gotoPosWritable1__I__I__I__V($thiz, oldIndex, newIndex, xor)
  } else {
    $f_sci_VectorPointer__gotoPosWritable0__I__I__V($thiz, newIndex, xor);
    $thiz.sci_Vector__f_dirty = true
  }
});
const $p_sci_Vector__gotoFreshPosWritable__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  if ($thiz.sci_Vector__f_dirty) {
    $f_sci_VectorPointer__gotoFreshPosWritable1__I__I__I__V($thiz, oldIndex, newIndex, xor)
  } else {
    $f_sci_VectorPointer__gotoFreshPosWritable0__I__I__I__V($thiz, oldIndex, newIndex, xor);
    $thiz.sci_Vector__f_dirty = true
  }
});
const $p_sci_Vector__shiftTopLevel__I__I__V = (function($thiz, oldLeft, newLeft) {
  const x1 = (((-1) + $thiz.sci_Vector__f_depth) | 0);
  switch (x1) {
    case 0: {
      const array = $thiz.sci_Vector__f_display0;
      $thiz.sci_Vector__f_display0 = $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array, oldLeft, newLeft);
      break
    }
    case 1: {
      const array$1 = $thiz.sci_Vector__f_display1;
      $thiz.sci_Vector__f_display1 = $asArrayOf_O($f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$1, oldLeft, newLeft), 2);
      break
    }
    case 2: {
      const array$2 = $thiz.sci_Vector__f_display2;
      $thiz.sci_Vector__f_display2 = $asArrayOf_O($f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$2, oldLeft, newLeft), 3);
      break
    }
    case 3: {
      const array$3 = $thiz.sci_Vector__f_display3;
      $thiz.sci_Vector__f_display3 = $asArrayOf_O($f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$3, oldLeft, newLeft), 4);
      break
    }
    case 4: {
      const array$4 = $thiz.sci_Vector__f_display4;
      $thiz.sci_Vector__f_display4 = $asArrayOf_O($f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$4, oldLeft, newLeft), 5);
      break
    }
    case 5: {
      const array$5 = $thiz.sci_Vector__f_display5;
      $thiz.sci_Vector__f_display5 = $asArrayOf_O($f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$5, oldLeft, newLeft), 6);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $p_sci_Vector__zeroLeft__AO__I__V = (function($thiz, array, index) {
  let i = 0;
  while ((i < index)) {
    array.set(i, null);
    i = ((1 + i) | 0)
  }
});
const $p_sci_Vector__copyRight__AO__I__AO = (function($thiz, array, left) {
  const copy = $asArrayOf_O(array.clone__O(), 1);
  $m_ju_Arrays$().fill__AO__I__I__O__V(copy, 0, left, null);
  return copy
});
const $p_sci_Vector__cleanLeftEdge__I__V = (function($thiz, cutIndex) {
  if ((cutIndex < 32)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, cutIndex)
  } else if ((cutIndex < 1024)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, ((cutIndex >>> 5) | 0)), 2)
  } else if ((cutIndex < 32768)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0))), 2);
    $thiz.sci_Vector__f_display2 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, ((cutIndex >>> 10) | 0)), 3)
  } else if ((cutIndex < 1048576)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0))), 2);
    $thiz.sci_Vector__f_display2 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0))), 3);
    $thiz.sci_Vector__f_display3 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, ((cutIndex >>> 15) | 0)), 4)
  } else if ((cutIndex < 33554432)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0))), 2);
    $thiz.sci_Vector__f_display2 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0))), 3);
    $thiz.sci_Vector__f_display3 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, (31 & ((cutIndex >>> 15) | 0))), 4);
    $thiz.sci_Vector__f_display4 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display4, ((cutIndex >>> 20) | 0)), 5)
  } else if ((cutIndex < 1073741824)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0))), 2);
    $thiz.sci_Vector__f_display2 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0))), 3);
    $thiz.sci_Vector__f_display3 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, (31 & ((cutIndex >>> 15) | 0))), 4);
    $thiz.sci_Vector__f_display4 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display4, (31 & ((cutIndex >>> 20) | 0))), 5);
    $thiz.sci_Vector__f_display5 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display5, ((cutIndex >>> 25) | 0)), 6)
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $p_sci_Vector__requiredDepth__I__I = (function($thiz, xor) {
  if ((xor < 32)) {
    return 1
  } else if ((xor < 1024)) {
    return 2
  } else if ((xor < 32768)) {
    return 3
  } else if ((xor < 1048576)) {
    return 4
  } else if ((xor < 33554432)) {
    return 5
  } else if ((xor < 1073741824)) {
    return 6
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $p_sci_Vector__dropFront0__I__sci_Vector = (function($thiz, cutIndex) {
  const blockIndex = ((-32) & cutIndex);
  const xor = (cutIndex ^ (((-1) + $thiz.sci_Vector__f_endIndex) | 0));
  const d = $p_sci_Vector__requiredDepth__I__I($thiz, xor);
  const shift = (cutIndex & (~(((-1) + (1 << $imul(5, d))) | 0)));
  const s = new $c_sci_Vector(((cutIndex - shift) | 0), (($thiz.sci_Vector__f_endIndex - shift) | 0), ((blockIndex - shift) | 0));
  const depth = $thiz.sci_Vector__f_depth;
  $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, $thiz, depth);
  s.sci_Vector__f_dirty = $thiz.sci_Vector__f_dirty;
  $p_sci_Vector__gotoPosWritable__I__I__I__V(s, $thiz.sci_Vector__f_focus, blockIndex, ($thiz.sci_Vector__f_focus ^ blockIndex));
  $f_sci_VectorPointer__preClean__I__V(s, d);
  $p_sci_Vector__cleanLeftEdge__I__V(s, ((cutIndex - shift) | 0));
  return s
});
class $c_sci_Vector extends $c_sci_AbstractSeq {
  constructor(startIndex, endIndex, focus) {
    super();
    this.sci_Vector__f_startIndex = 0;
    this.sci_Vector__f_endIndex = 0;
    this.sci_Vector__f_focus = 0;
    this.sci_Vector__f_dirty = false;
    this.sci_Vector__f_depth = 0;
    this.sci_Vector__f_display0 = null;
    this.sci_Vector__f_display1 = null;
    this.sci_Vector__f_display2 = null;
    this.sci_Vector__f_display3 = null;
    this.sci_Vector__f_display4 = null;
    this.sci_Vector__f_display5 = null;
    this.sci_Vector__f_startIndex = startIndex;
    this.sci_Vector__f_endIndex = endIndex;
    this.sci_Vector__f_focus = focus;
    this.sci_Vector__f_dirty = false
  };
  map__F1__O(f) {
    return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f)
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  filterNot__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, true)
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  sameElements__sc_IterableOnce__Z(o) {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  depth__I() {
    return this.sci_Vector__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_Vector__f_depth = x$1
  };
  display0__AO() {
    return this.sci_Vector__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_Vector__f_display0 = x$1
  };
  display1__AAO() {
    return this.sci_Vector__f_display1
  };
  display1_$eq__AAO__V(x$1) {
    this.sci_Vector__f_display1 = x$1
  };
  display2__AAAO() {
    return this.sci_Vector__f_display2
  };
  display2_$eq__AAAO__V(x$1) {
    this.sci_Vector__f_display2 = x$1
  };
  display3__AAAAO() {
    return this.sci_Vector__f_display3
  };
  display3_$eq__AAAAO__V(x$1) {
    this.sci_Vector__f_display3 = x$1
  };
  display4__AAAAAO() {
    return this.sci_Vector__f_display4
  };
  display4_$eq__AAAAAO__V(x$1) {
    this.sci_Vector__f_display4 = x$1
  };
  display5__AAAAAAO() {
    return this.sci_Vector__f_display5
  };
  display5_$eq__AAAAAAO__V(x$1) {
    this.sci_Vector__f_display5 = x$1
  };
  iterableFactory__sc_SeqFactory() {
    return $m_sci_Vector$()
  };
  length__I() {
    return ((this.sci_Vector__f_endIndex - this.sci_Vector__f_startIndex) | 0)
  };
  initIterator__sci_VectorIterator__V(s) {
    const depth = this.sci_Vector__f_depth;
    $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
    if (this.sci_Vector__f_dirty) {
      const index = this.sci_Vector__f_focus;
      $f_sci_VectorPointer__stabilize__I__V(s, index)
    };
    if ((s.sci_VectorIterator__f_depth > 1)) {
      const index$1 = this.sci_Vector__f_startIndex;
      const xor = (this.sci_Vector__f_startIndex ^ this.sci_Vector__f_focus);
      $f_sci_VectorPointer__gotoPos__I__I__V(s, index$1, xor)
    }
  };
  iterator__sc_Iterator() {
    if ($f_sc_SeqOps__isEmpty__Z(this)) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
    } else {
      const s = new $c_sci_VectorIterator(this.sci_Vector__f_startIndex, this.sci_Vector__f_endIndex);
      this.initIterator__sci_VectorIterator__V(s);
      return s
    }
  };
  apply__I__O(index) {
    const idx = $p_sci_Vector__checkRangeConvert__I__I(this, index);
    return $p_sci_Vector__getElem__I__I__O(this, idx, (idx ^ this.sci_Vector__f_focus))
  };
  drop__I__sci_Vector(n) {
    if ((n <= 0)) {
      return this
    } else if ((this.sci_Vector__f_startIndex < ((this.sci_Vector__f_endIndex - n) | 0))) {
      return $p_sci_Vector__dropFront0__I__sci_Vector(this, ((this.sci_Vector__f_startIndex + n) | 0))
    } else {
      const this$1 = $m_sci_Vector$();
      return this$1.sci_Vector$__f_NIL
    }
  };
  head__O() {
    if ($f_sc_SeqOps__isEmpty__Z(this)) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "empty.head")
    };
    return this.apply__I__O(0)
  };
  tail__sci_Vector() {
    if ($f_sc_SeqOps__isEmpty__Z(this)) {
      throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "empty.tail")
    };
    return this.drop__I__sci_Vector(1)
  };
  updateAt__I__O__sci_Vector(index, elem) {
    const idx = $p_sci_Vector__checkRangeConvert__I__I(this, index);
    const s = new $c_sci_Vector(this.sci_Vector__f_startIndex, this.sci_Vector__f_endIndex, idx);
    const depth = this.sci_Vector__f_depth;
    $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
    s.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
    $p_sci_Vector__gotoPosWritable__I__I__I__V(s, this.sci_Vector__f_focus, idx, (this.sci_Vector__f_focus ^ idx));
    s.sci_Vector__f_display0.set((31 & idx), elem);
    return s
  };
  appended__O__sci_Vector(value) {
    const thisLength = this.length__I();
    let result;
    if (((this.sci_Vector__f_depth === 1) && (thisLength < 32))) {
      const s = new $c_sci_Vector(0, ((1 + thisLength) | 0), 0);
      s.sci_Vector__f_depth = 1;
      const newDisplay0 = $newArrayObject($d_O.getArrayOf(), [((1 + thisLength) | 0)]);
      const src = this.sci_Vector__f_display0;
      const srcPos = this.sci_Vector__f_startIndex;
      $systemArraycopy(src, srcPos, newDisplay0, 0, thisLength);
      newDisplay0.set(thisLength, value);
      s.sci_Vector__f_display0 = newDisplay0;
      result = s
    } else if ((thisLength > 0)) {
      const blockIndex = ((-32) & this.sci_Vector__f_endIndex);
      const lo = (31 & this.sci_Vector__f_endIndex);
      if ((this.sci_Vector__f_endIndex !== blockIndex)) {
        const s$2 = new $c_sci_Vector(this.sci_Vector__f_startIndex, ((1 + this.sci_Vector__f_endIndex) | 0), blockIndex);
        const depth = this.sci_Vector__f_depth;
        $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$2, this, depth);
        s$2.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
        $p_sci_Vector__gotoPosWritable__I__I__I__V(s$2, this.sci_Vector__f_focus, blockIndex, (this.sci_Vector__f_focus ^ blockIndex));
        s$2.sci_Vector__f_display0.set(lo, value);
        result = s$2
      } else {
        const shift = (this.sci_Vector__f_startIndex & (~(((-1) + (1 << $imul(5, (((-1) + this.sci_Vector__f_depth) | 0)))) | 0)));
        const shiftBlocks = ((this.sci_Vector__f_startIndex >>> $imul(5, (((-1) + this.sci_Vector__f_depth) | 0))) | 0);
        if ((shift !== 0)) {
          if ((this.sci_Vector__f_depth > 1)) {
            const newBlockIndex = ((blockIndex - shift) | 0);
            const newFocus = ((this.sci_Vector__f_focus - shift) | 0);
            const s$3 = new $c_sci_Vector(((this.sci_Vector__f_startIndex - shift) | 0), ((((1 + this.sci_Vector__f_endIndex) | 0) - shift) | 0), newBlockIndex);
            const depth$1 = this.sci_Vector__f_depth;
            $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$3, this, depth$1);
            s$3.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
            $p_sci_Vector__shiftTopLevel__I__I__V(s$3, shiftBlocks, 0);
            $p_sci_Vector__gotoFreshPosWritable__I__I__I__V(s$3, newFocus, newBlockIndex, (newFocus ^ newBlockIndex));
            s$3.sci_Vector__f_display0.set(lo, value);
            result = s$3
          } else {
            const newBlockIndex$2 = (((-32) + blockIndex) | 0);
            const newFocus$2 = this.sci_Vector__f_focus;
            const s$4 = new $c_sci_Vector(((this.sci_Vector__f_startIndex - shift) | 0), ((((1 + this.sci_Vector__f_endIndex) | 0) - shift) | 0), newBlockIndex$2);
            const depth$2 = this.sci_Vector__f_depth;
            $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$4, this, depth$2);
            s$4.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
            $p_sci_Vector__shiftTopLevel__I__I__V(s$4, shiftBlocks, 0);
            $p_sci_Vector__gotoPosWritable__I__I__I__V(s$4, newFocus$2, newBlockIndex$2, (newFocus$2 ^ newBlockIndex$2));
            if ((s$4.sci_Vector__f_display0.u.length < ((31 - shift) | 0))) {
              const newDisplay0$2 = $newArrayObject($d_O.getArrayOf(), [((31 - shift) | 0)]);
              const xs = s$4.sci_Vector__f_display0;
              $m_sc_ArrayOps$().copyToArray$extension__O__O__I__I__I(xs, newDisplay0$2, 0, 2147483647);
              s$4.sci_Vector__f_display0 = newDisplay0$2
            };
            s$4.sci_Vector__f_display0.set(((32 - shift) | 0), value);
            result = s$4
          }
        } else {
          const newFocus$3 = this.sci_Vector__f_focus;
          const s$5 = new $c_sci_Vector(this.sci_Vector__f_startIndex, ((1 + this.sci_Vector__f_endIndex) | 0), blockIndex);
          const depth$3 = this.sci_Vector__f_depth;
          $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$5, this, depth$3);
          s$5.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
          $p_sci_Vector__gotoFreshPosWritable__I__I__I__V(s$5, newFocus$3, blockIndex, (newFocus$3 ^ blockIndex));
          s$5.sci_Vector__f_display0.set(lo, value);
          result = s$5
        }
      }
    } else {
      result = $m_sci_Vector$().scala$collection$immutable$Vector$$single__O__sci_Vector(value)
    };
    return result
  };
  applyPreferredMaxLength__I() {
    return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength
  };
  equals__O__Z(o) {
    if ((o instanceof $c_sci_Vector)) {
      const x2 = $as_sci_Vector(o);
      return ((this === x2) || ((this.length__I() === x2.length__I()) && (((((((((this.sci_Vector__f_startIndex === x2.sci_Vector__f_startIndex) && (this.sci_Vector__f_endIndex === x2.sci_Vector__f_endIndex)) && (this.sci_Vector__f_display0 === x2.sci_Vector__f_display0)) && (this.sci_Vector__f_display1 === x2.sci_Vector__f_display1)) && (this.sci_Vector__f_display2 === x2.sci_Vector__f_display2)) && (this.sci_Vector__f_display3 === x2.sci_Vector__f_display3)) && (this.sci_Vector__f_display4 === x2.sci_Vector__f_display4)) && (this.sci_Vector__f_display5 === x2.sci_Vector__f_display5)) || $f_sc_Seq__equals__O__Z(this, o))))
    } else {
      return $f_sc_Seq__equals__O__Z(this, o)
    }
  };
  className__T() {
    return "Vector"
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  drop__I__O(n) {
    return this.drop__I__sci_Vector(n)
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Vector$()
  };
}
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"))
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth))
}
const $d_sci_Vector = new $TypeData().initClass({
  sci_Vector: 0
}, false, "scala.collection.immutable.Vector", {
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_VectorPointer: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector.prototype.$classData = $d_sci_Vector;
class $c_scm_ArraySeq$ofChar {
}
function $as_scm_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofChar"))
}
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofChar)))
}
function $asArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofChar;", depth))
}
const $p_scm_HashMap__put0__O__O__I__Z__s_Some = (function($thiz, key, value, hash, getOld) {
  if ((((1 + $thiz.scm_HashMap__f_contentSize) | 0) >= $thiz.scm_HashMap__f_threshold)) {
    $p_scm_HashMap__growTable__I__V($thiz, ($thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length << 1))
  };
  const idx = (hash & (((-1) + $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length) | 0));
  return $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, idx)
});
const $p_scm_HashMap__put0__O__O__Z__s_Some = (function($thiz, key, value, getOld) {
  if ((((1 + $thiz.scm_HashMap__f_contentSize) | 0) >= $thiz.scm_HashMap__f_threshold)) {
    $p_scm_HashMap__growTable__I__V($thiz, ($thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length << 1))
  };
  const originalHash = $m_sr_Statics$().anyHash__O__I(key);
  const hash = (originalHash ^ ((originalHash >>> 16) | 0));
  const idx = (hash & (((-1) + $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length) | 0));
  return $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, idx)
});
const $p_scm_HashMap__put0__O__O__Z__I__I__s_Some = (function($thiz, key, value, getOld, hash, idx) {
  const x1 = $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.get(idx);
  if ((x1 === null)) {
    $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.set(idx, new $c_scm_HashMap$Node(key, hash, value, null))
  } else {
    let prev = null;
    let n = x1;
    while (((n !== null) && (n.scm_HashMap$Node__f__hash <= hash))) {
      if (((n.scm_HashMap$Node__f__hash === hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, n.scm_HashMap$Node__f__key))) {
        const old = n.scm_HashMap$Node__f__value;
        n.scm_HashMap$Node__f__value = value;
        return (getOld ? new $c_s_Some(old) : null)
      };
      prev = n;
      n = n.scm_HashMap$Node__f__next
    };
    if ((prev === null)) {
      $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.set(idx, new $c_scm_HashMap$Node(key, hash, value, x1))
    } else {
      prev.scm_HashMap$Node__f__next = new $c_scm_HashMap$Node(key, hash, value, prev.scm_HashMap$Node__f__next)
    }
  };
  $thiz.scm_HashMap__f_contentSize = ((1 + $thiz.scm_HashMap__f_contentSize) | 0);
  return null
});
const $p_scm_HashMap__growTable__I__V = (function($thiz, newlen) {
  let oldlen = $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length;
  $thiz.scm_HashMap__f_threshold = $p_scm_HashMap__newThreshold__I__I($thiz, newlen);
  if (($thiz.scm_HashMap__f_contentSize === 0)) {
    $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table = $newArrayObject($d_scm_HashMap$Node.getArrayOf(), [newlen])
  } else {
    const original = $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table;
    $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table = $asArrayOf_scm_HashMap$Node($m_ju_Arrays$().copyOf__AO__I__AO(original, newlen), 1);
    const preLow = new $c_scm_HashMap$Node(null, 0, null, null);
    const preHigh = new $c_scm_HashMap$Node(null, 0, null, null);
    while ((oldlen < newlen)) {
      let i = 0;
      while ((i < oldlen)) {
        const old = $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.get(i);
        if ((old !== null)) {
          preLow.scm_HashMap$Node__f__next = null;
          preHigh.scm_HashMap$Node__f__next = null;
          let lastLow = preLow;
          let lastHigh = preHigh;
          let n = old;
          while ((n !== null)) {
            const next = n.scm_HashMap$Node__f__next;
            if (((n.scm_HashMap$Node__f__hash & oldlen) === 0)) {
              lastLow.scm_HashMap$Node__f__next = n;
              lastLow = n
            } else {
              lastHigh.scm_HashMap$Node__f__next = n;
              lastHigh = n
            };
            n = next
          };
          lastLow.scm_HashMap$Node__f__next = null;
          if ((old !== preLow.scm_HashMap$Node__f__next)) {
            $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.set(i, preLow.scm_HashMap$Node__f__next)
          };
          if ((preHigh.scm_HashMap$Node__f__next !== null)) {
            $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.set(((i + oldlen) | 0), preHigh.scm_HashMap$Node__f__next);
            lastHigh.scm_HashMap$Node__f__next = null
          }
        };
        i = ((1 + i) | 0)
      };
      oldlen = (oldlen << 1)
    }
  }
});
const $p_scm_HashMap__tableSizeFor__I__I = (function($thiz, capacity) {
  const x = (((-1) + capacity) | 0);
  const i = ((x > 4) ? x : 4);
  const x$1 = ((((-2147483648) >> $clz32(i)) & i) << 1);
  return ((x$1 < 1073741824) ? x$1 : 1073741824)
});
const $p_scm_HashMap__newThreshold__I__I = (function($thiz, size) {
  return $doubleToInt((size * $thiz.scm_HashMap__f_loadFactor))
});
const $ct_scm_HashMap__I__D__ = (function($thiz, initialCapacity, loadFactor) {
  $thiz.scm_HashMap__f_loadFactor = loadFactor;
  $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table = $newArrayObject($d_scm_HashMap$Node.getArrayOf(), [$p_scm_HashMap__tableSizeFor__I__I($thiz, initialCapacity)]);
  $thiz.scm_HashMap__f_threshold = $p_scm_HashMap__newThreshold__I__I($thiz, $thiz.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length);
  $thiz.scm_HashMap__f_contentSize = 0;
  return $thiz
});
const $ct_scm_HashMap__ = (function($thiz) {
  $ct_scm_HashMap__I__D__($thiz, 16, 0.75);
  return $thiz
});
class $c_scm_HashMap extends $c_scm_AbstractMap {
  constructor() {
    super();
    this.scm_HashMap__f_loadFactor = 0.0;
    this.scm_HashMap__f_scala$collection$mutable$HashMap$$table = null;
    this.scm_HashMap__f_threshold = 0;
    this.scm_HashMap__f_contentSize = 0
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  size__I() {
    return this.scm_HashMap__f_contentSize
  };
  contains__O__Z(key) {
    const originalHash = $m_sr_Statics$().anyHash__O__I(key);
    const hash = (originalHash ^ ((originalHash >>> 16) | 0));
    const x1 = this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.get((hash & (((-1) + this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length) | 0)));
    return (((x1 === null) ? null : x1.findNode__O__I__scm_HashMap$Node(key, hash)) !== null)
  };
  sizeHint__I__V(size) {
    const target = $p_scm_HashMap__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.scm_HashMap__f_loadFactor)));
    if ((target > this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length)) {
      $p_scm_HashMap__growTable__I__V(this, target)
    }
  };
  addAll__sc_IterableOnce__scm_HashMap(xs) {
    this.sizeHint__I__V(xs.knownSize__I());
    if ((xs instanceof $c_sci_HashMap)) {
      const x2 = $as_sci_HashMap(xs);
      const f = new $c_sjsr_AnonFunction3(((this$1) => ((k$2, v$2, h$2) => {
        const h = $uI(h$2);
        $p_scm_HashMap__put0__O__O__I__Z__s_Some(this$1, k$2, v$2, (h ^ ((h >>> 16) | 0)), false)
      }))(this));
      x2.sci_HashMap__f_rootNode.foreachWithHash__F3__V(f);
      return this
    } else if ((xs instanceof $c_scm_HashMap)) {
      const x3 = $as_scm_HashMap(xs);
      const iter = x3.nodeIterator__sc_Iterator();
      while (iter.hasNext__Z()) {
        const next = $as_scm_HashMap$Node(iter.next__O());
        $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, next.scm_HashMap$Node__f__key, next.scm_HashMap$Node__f__value, next.scm_HashMap$Node__f__hash, false)
      };
      return this
    } else {
      return $as_scm_HashMap($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs))
    }
  };
  iterator__sc_Iterator() {
    return ((this.scm_HashMap__f_contentSize === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_scm_HashMap$$anon$1(this))
  };
  nodeIterator__sc_Iterator() {
    return ((this.scm_HashMap__f_contentSize === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_scm_HashMap$$anon$4(this))
  };
  get__O__s_Option(key) {
    const originalHash = $m_sr_Statics$().anyHash__O__I(key);
    const hash = (originalHash ^ ((originalHash >>> 16) | 0));
    const x1 = this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.get((hash & (((-1) + this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length) | 0)));
    const x1$1 = ((x1 === null) ? null : x1.findNode__O__I__scm_HashMap$Node(key, hash));
    return ((x1$1 === null) ? $m_s_None$() : new $c_s_Some(x1$1.scm_HashMap$Node__f__value))
  };
  apply__O__O(key) {
    const originalHash = $m_sr_Statics$().anyHash__O__I(key);
    const hash = (originalHash ^ ((originalHash >>> 16) | 0));
    const x1 = this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.get((hash & (((-1) + this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length) | 0)));
    const x1$1 = ((x1 === null) ? null : x1.findNode__O__I__scm_HashMap$Node(key, hash));
    return ((x1$1 === null) ? $f_sc_MapOps__default__O__O(this, key) : x1$1.scm_HashMap$Node__f__value)
  };
  getOrElse__O__F0__O(key, default$1) {
    const x = $objectGetClass(this);
    if ((!(x === $d_scm_HashMap.getClassOf()))) {
      return $f_sc_MapOps__getOrElse__O__F0__O(this, key, default$1)
    } else {
      const originalHash = $m_sr_Statics$().anyHash__O__I(key);
      const hash = (originalHash ^ ((originalHash >>> 16) | 0));
      const x1 = this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.get((hash & (((-1) + this.scm_HashMap__f_scala$collection$mutable$HashMap$$table.u.length) | 0)));
      const nd = ((x1 === null) ? null : x1.findNode__O__I__scm_HashMap$Node(key, hash));
      return ((nd === null) ? default$1.apply__O() : nd.scm_HashMap$Node__f__value)
    }
  };
  addOne__T2__scm_HashMap(elem) {
    $p_scm_HashMap__put0__O__O__Z__s_Some(this, elem.T2__f__1, elem.T2__f__2, false);
    return this
  };
  knownSize__I() {
    return this.scm_HashMap__f_contentSize
  };
  isEmpty__Z() {
    return (this.scm_HashMap__f_contentSize === 0)
  };
  mapFactory__sc_MapFactory() {
    return $m_scm_HashMap$()
  };
  stringPrefix__T() {
    return "HashMap"
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__T2__scm_HashMap($as_T2(elem))
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_HashMap(xs)
  };
}
function $as_scm_HashMap(obj) {
  return (((obj instanceof $c_scm_HashMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.HashMap"))
}
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashMap)))
}
function $asArrayOf_scm_HashMap(obj, depth) {
  return (($isArrayOf_scm_HashMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.HashMap;", depth))
}
const $d_scm_HashMap = new $TypeData().initClass({
  scm_HashMap: 0
}, false, "scala.collection.mutable.HashMap", {
  scm_HashMap: 1,
  scm_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  scm_Map: 1,
  scm_Iterable: 1,
  scm_MapOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_StrictOptimizedMapOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_HashMap.prototype.$classData = $d_scm_HashMap;
class $c_sci_$colon$colon extends $c_sci_List {
  constructor(head, next) {
    super();
    this.sci_$colon$colon__f_head = null;
    this.sci_$colon$colon__f_next = null;
    this.sci_$colon$colon__f_head = head;
    this.sci_$colon$colon__f_next = next
  };
  head__O() {
    return this.sci_$colon$colon__f_head
  };
  productPrefix__T() {
    return "::"
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.sci_$colon$colon__f_head;
        break
      }
      case 1: {
        return this.sci_$colon$colon__f_next;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    return this.sci_$colon$colon__f_next
  };
}
const $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
class $c_sci_Nil$ extends $c_sci_List {
  constructor() {
    super();
    this.sci_Nil$__f_EmptyUnzip = null;
    $n_sci_Nil$ = this;
    this.sci_Nil$__f_EmptyUnzip = new $c_T2($m_sci_Nil$(), $m_sci_Nil$())
  };
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list")
  };
  tail__E() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty list")
  };
  knownSize__I() {
    return 0
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  productPrefix__T() {
    return "Nil"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    this.tail__E()
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
let $n_sci_Nil$ = (void 0);
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
const $ct_scm_StringBuilder__jl_StringBuilder__ = (function($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
});
const $ct_scm_StringBuilder__ = (function($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz
});
class $c_scm_StringBuilder extends $c_scm_AbstractSeq {
  constructor() {
    super();
    this.scm_StringBuilder__f_underlying = null
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = this.scm_StringBuilder__f_underlying.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  };
  length__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  knownSize__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  addOne__C__scm_StringBuilder(x) {
    const this$1 = this.scm_StringBuilder__f_underlying;
    const str = $as_T(String.fromCharCode(x));
    this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
    return this
  };
  addAll__T__scm_StringBuilder(s) {
    const this$1 = this.scm_StringBuilder__f_underlying;
    this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s);
    return this
  };
  toString__T() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  toArray__s_reflect_ClassTag__O(ct) {
    const x1 = ct.runtimeClass__jl_Class();
    return ((x1 === $d_C.getClassOf()) ? this.toCharArray__AC() : $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, ct))
  };
  toCharArray__AC() {
    const len = this.scm_StringBuilder__f_underlying.length__I();
    const arr = $newArrayObject($d_C.getArrayOf(), [len]);
    this.scm_StringBuilder__f_underlying.getChars__I__I__AC__I__V(0, len, arr, 0);
    return arr
  };
  append__T__scm_StringBuilder(s) {
    const this$1 = this.scm_StringBuilder__f_underlying;
    this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s);
    return this
  };
  appendAll__sc_IterableOnce__scm_StringBuilder(xs) {
    if ((xs instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(xs);
      const this$3 = this.scm_StringBuilder__f_underlying;
      $m_sci_WrappedString$();
      const str = x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
      this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str)
    } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
      const x3 = $as_scm_ArraySeq$ofChar(xs);
      this.scm_StringBuilder__f_underlying.append__AC__jl_StringBuilder(x3.array__AC())
    } else if ((xs instanceof $c_scm_StringBuilder)) {
      const x4 = $as_scm_StringBuilder(xs);
      const this$4 = this.scm_StringBuilder__f_underlying;
      const s = x4.scm_StringBuilder__f_underlying;
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s)
    } else {
      const ks = xs.knownSize__I();
      if ((ks !== 0)) {
        const b = this.scm_StringBuilder__f_underlying;
        if ((ks > 0)) {
          b.length__I()
        };
        const it = xs.iterator__sc_Iterator();
        while (it.hasNext__Z()) {
          const c = $uC(it.next__O());
          const str$1 = $as_T(String.fromCharCode(c));
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1)
        }
      }
    };
    return this
  };
  append__C__scm_StringBuilder(x) {
    const this$1 = this.scm_StringBuilder__f_underlying;
    const str = $as_T(String.fromCharCode(x));
    this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
    return this
  };
  subSequence__I__I__jl_CharSequence(start, end) {
    return this.scm_StringBuilder__f_underlying.substring__I__I__T(start, end)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_IndexedSeq$()
  };
  result__O() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__C__scm_StringBuilder($uC(elem))
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).appendAll__sc_IterableOnce__scm_StringBuilder(coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).appendAll__sc_IterableOnce__scm_StringBuilder(coll)
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
  };
  apply__I__O(i) {
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
  };
}
function $as_scm_StringBuilder(obj) {
  return (((obj instanceof $c_scm_StringBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.StringBuilder"))
}
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_StringBuilder)))
}
function $asArrayOf_scm_StringBuilder(obj, depth) {
  return (($isArrayOf_scm_StringBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.StringBuilder;", depth))
}
const $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
const $p_scm_ListBuffer__copyElems__V = (function($thiz) {
  const this$2 = new $c_scm_ListBuffer();
  const buf = this$2.addAll__sc_IterableOnce__scm_ListBuffer($thiz);
  $thiz.scm_ListBuffer__f_first = buf.scm_ListBuffer__f_first;
  $thiz.scm_ListBuffer__f_last0 = buf.scm_ListBuffer__f_last0;
  $thiz.scm_ListBuffer__f_aliased = false
});
const $p_scm_ListBuffer__ensureUnaliased__V = (function($thiz) {
  if ($thiz.scm_ListBuffer__f_aliased) {
    $p_scm_ListBuffer__copyElems__V($thiz)
  }
});
class $c_scm_ListBuffer extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ListBuffer__f_first = null;
    this.scm_ListBuffer__f_last0 = null;
    this.scm_ListBuffer__f_aliased = false;
    this.scm_ListBuffer__f_len = 0;
    this.scm_ListBuffer__f_first = $m_sci_Nil$();
    this.scm_ListBuffer__f_last0 = null;
    this.scm_ListBuffer__f_aliased = false;
    this.scm_ListBuffer__f_len = 0
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  filterNot__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, true)
  };
  iterator__sc_Iterator() {
    return this.scm_ListBuffer__f_first.iterator__sc_Iterator()
  };
  iterableFactory__sc_SeqFactory() {
    return $m_scm_ListBuffer$()
  };
  apply__I__O(i) {
    const this$1 = this.scm_ListBuffer__f_first;
    return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
  };
  length__I() {
    return this.scm_ListBuffer__f_len
  };
  knownSize__I() {
    return this.scm_ListBuffer__f_len
  };
  isEmpty__Z() {
    return (this.scm_ListBuffer__f_len === 0)
  };
  toList__sci_List() {
    this.scm_ListBuffer__f_aliased = (!this.isEmpty__Z());
    return this.scm_ListBuffer__f_first
  };
  addOne__O__scm_ListBuffer(elem) {
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    const last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
    if ((this.scm_ListBuffer__f_len === 0)) {
      this.scm_ListBuffer__f_first = last1
    } else {
      this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1
    };
    this.scm_ListBuffer__f_last0 = last1;
    this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
    return this
  };
  addAll__sc_IterableOnce__scm_ListBuffer(xs) {
    const it = xs.iterator__sc_Iterator();
    if (it.hasNext__Z()) {
      $p_scm_ListBuffer__ensureUnaliased__V(this);
      const last1 = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
      if ((this.scm_ListBuffer__f_len === 0)) {
        this.scm_ListBuffer__f_first = last1
      } else {
        this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1
      };
      this.scm_ListBuffer__f_last0 = last1;
      this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
      while (it.hasNext__Z()) {
        const last1$2 = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
        this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1$2;
        this.scm_ListBuffer__f_last0 = last1$2;
        this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0)
      }
    };
    return this
  };
  stringPrefix__T() {
    return "ListBuffer"
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_ListBuffer(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_ListBuffer(elem)
  };
  result__O() {
    return this.toList__sci_List()
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    const this$1 = this.scm_ListBuffer__f_first;
    return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_ListBuffer$()
  };
}
function $as_scm_ListBuffer(obj) {
  return (((obj instanceof $c_scm_ListBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"))
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth))
}
const $d_scm_ListBuffer = new $TypeData().initClass({
  scm_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", {
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer.prototype.$classData = $d_scm_ListBuffer;
const $ct_scm_ArrayBuffer__AO__I__ = (function($thiz, initialElements, initialSize) {
  $thiz.scm_ArrayBuffer__f_array = initialElements;
  $thiz.scm_ArrayBuffer__f_size0 = initialSize;
  return $thiz
});
const $ct_scm_ArrayBuffer__ = (function($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, $newArrayObject($d_O.getArrayOf(), [16]), 0);
  return $thiz
});
class $c_scm_ArrayBuffer extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ArrayBuffer__f_array = null;
    this.scm_ArrayBuffer__f_size0 = 0
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  filterNot__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, true)
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_scm_ArrayBufferView(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = this.scm_ArrayBuffer__f_size0;
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.scm_ArrayBuffer__f_size0
  };
  ensureSize__I__V(n) {
    this.scm_ArrayBuffer__f_array = $m_scm_ArrayBuffer$().scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, n)
  };
  apply__I__O(n) {
    const hi = ((1 + n) | 0);
    if ((n < 0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((n + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    if ((hi > this.scm_ArrayBuffer__f_size0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((hi + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    return this.scm_ArrayBuffer__f_array.get(n)
  };
  update__I__O__V(index, elem) {
    const hi = ((1 + index) | 0);
    if ((index < 0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    if ((hi > this.scm_ArrayBuffer__f_size0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((hi + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    this.scm_ArrayBuffer__f_array.set(index, elem)
  };
  length__I() {
    return this.scm_ArrayBuffer__f_size0
  };
  iterableFactory__sc_SeqFactory() {
    return $m_scm_ArrayBuffer$()
  };
  addOne__O__scm_ArrayBuffer(elem) {
    const i = this.scm_ArrayBuffer__f_size0;
    this.ensureSize__I__V(((1 + this.scm_ArrayBuffer__f_size0) | 0));
    this.scm_ArrayBuffer__f_size0 = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
    this.update__I__O__V(i, elem);
    return this
  };
  addAll__sc_IterableOnce__scm_ArrayBuffer(elems) {
    if ((elems instanceof $c_scm_ArrayBuffer)) {
      const x2 = $as_scm_ArrayBuffer(elems);
      this.ensureSize__I__V(((this.scm_ArrayBuffer__f_size0 + x2.scm_ArrayBuffer__f_size0) | 0));
      $m_s_Array$().copy__O__I__O__I__I__V(x2.scm_ArrayBuffer__f_array, 0, this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, x2.scm_ArrayBuffer__f_size0);
      this.scm_ArrayBuffer__f_size0 = ((this.scm_ArrayBuffer__f_size0 + x2.scm_ArrayBuffer__f_size0) | 0)
    } else {
      $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems)
    };
    return this
  };
  stringPrefix__T() {
    return "ArrayBuffer"
  };
  copyToArray__O__I__I(xs, start) {
    return this.copyToArray__O__I__I__I(xs, start, this.scm_ArrayBuffer__f_size0)
  };
  copyToArray__O__I__I__I(xs, start, len) {
    const srcLen = this.scm_ArrayBuffer__f_size0;
    const destLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
    const x = ((len < srcLen) ? len : srcLen);
    const y = ((destLen - start) | 0);
    const x$1 = ((x < y) ? x : y);
    const copied = ((x$1 > 0) ? x$1 : 0);
    if ((copied > 0)) {
      $m_s_Array$().copy__O__I__O__I__I__V(this.scm_ArrayBuffer__f_array, 0, xs, start, copied)
    };
    return copied
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_ArrayBuffer(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_ArrayBuffer(elem)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_ArrayBuffer$()
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
}
function $as_scm_ArrayBuffer(obj) {
  return (((obj instanceof $c_scm_ArrayBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayBuffer"))
}
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuffer)))
}
function $asArrayOf_scm_ArrayBuffer(obj, depth) {
  return (($isArrayOf_scm_ArrayBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuffer;", depth))
}
const $d_scm_ArrayBuffer = new $TypeData().initClass({
  scm_ArrayBuffer: 0
}, false, "scala.collection.mutable.ArrayBuffer", {
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  scm_IndexedBuffer: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer.prototype.$classData = $d_scm_ArrayBuffer;
const $ct_sjs_js_WrappedArray__sjs_js_Array__ = (function($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
});
const $ct_sjs_js_WrappedArray__ = (function($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
});
class $c_sjs_js_WrappedArray extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  filterNot__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, true)
  };
  iterableFactory__sc_SeqFactory() {
    return $m_sjs_js_WrappedArray$()
  };
  apply__I__O(index) {
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
  length__I() {
    return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
  };
  knownSize__I() {
    return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
  };
  className__T() {
    return "WrappedArray"
  };
  result__O() {
    return this
  };
  addOne__O__scm_Growable(elem) {
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    return this
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sjs_js_WrappedArray$()
  };
}
function $as_sjs_js_WrappedArray(obj) {
  return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"))
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)))
}
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth))
}
const $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
const $p_scm_ArrayDeque__reset__AO__I__I__V = (function($thiz, array, start, end) {
  const assertion = ((array.u.length & (((-1) + array.u.length) | 0)) === 0);
  if ((!assertion)) {
    throw new $c_jl_AssertionError("assertion failed: Array.length must be power of 2")
  };
  const until = array.u.length;
  if (((start < 0) || (start >= until))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((start + " is out of bounds (min 0, max ") + (((-1) + until) | 0)) + ")"))
  };
  const until$1 = array.u.length;
  if (((end < 0) || (end >= until$1))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((end + " is out of bounds (min 0, max ") + (((-1) + until$1) | 0)) + ")"))
  };
  $thiz.scm_ArrayDeque__f_array = array;
  $thiz.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start = start;
  $thiz.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end = end
});
const $ct_scm_ArrayDeque__AO__I__I__ = (function($thiz, array, start, end) {
  $thiz.scm_ArrayDeque__f_array = array;
  $thiz.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start = start;
  $thiz.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end = end;
  $p_scm_ArrayDeque__reset__AO__I__I__V($thiz, $thiz.scm_ArrayDeque__f_array, $thiz.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start, $thiz.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end);
  return $thiz
});
const $ct_scm_ArrayDeque__I__ = (function($thiz, initialSize) {
  $ct_scm_ArrayDeque__AO__I__I__($thiz, $m_scm_ArrayDeque$().alloc__I__AO(initialSize), 0, 0);
  return $thiz
});
class $c_scm_ArrayDeque extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ArrayDeque__f_array = null;
    this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start = 0;
    this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end = 0
  };
  filter__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false)
  };
  filterNot__F1__O(pred) {
    return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, true)
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const idx = this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
    const x = (((this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0));
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    const idx = this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
    return (((this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0))
  };
  apply__I__O(idx) {
    const idx$1 = this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
    const until = (((this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx$1) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0));
    if (((idx < 0) || (idx >= until))) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((idx + " is out of bounds (min 0, max ") + (((-1) + until) | 0)) + ")"))
    };
    return this.scm_ArrayDeque__f_array.get((((this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start + idx) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0)))
  };
  addOne__O__scm_ArrayDeque(elem) {
    const idx = this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
    const hint = ((1 + (((this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0))) | 0);
    const idx$1 = this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
    if (((hint > (((this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx$1) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0))) && (hint >= this.scm_ArrayDeque__f_array.u.length))) {
      this.scala$collection$mutable$ArrayDeque$$resize__I__V(hint)
    };
    this.scm_ArrayDeque__f_array.set(this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end, elem);
    this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end = (((1 + this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0));
    return this
  };
  addAll__sc_IterableOnce__scm_ArrayDeque(elems) {
    const x1 = elems.knownSize__I();
    if ((x1 > 0)) {
      const idx = this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
      const hint = ((x1 + (((this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0))) | 0);
      const idx$1 = this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
      if (((hint > (((this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx$1) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0))) && (hint >= this.scm_ArrayDeque__f_array.u.length))) {
        this.scala$collection$mutable$ArrayDeque$$resize__I__V(hint)
      };
      const this$1 = elems.iterator__sc_Iterator();
      while (this$1.hasNext__Z()) {
        const arg1 = this$1.next__O();
        this.scm_ArrayDeque__f_array.set(this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end, arg1);
        this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end = (((1 + this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0))
      }
    } else {
      const this$2 = elems.iterator__sc_Iterator();
      while (this$2.hasNext__Z()) {
        const arg1$1 = this$2.next__O();
        this.addOne__O__scm_ArrayDeque(arg1$1)
      }
    };
    return this
  };
  removeHead__Z__O(resizeInternalRepr) {
    if (this.isEmpty__Z()) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "empty collection")
    } else {
      const elem = this.scm_ArrayDeque__f_array.get(this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start);
      this.scm_ArrayDeque__f_array.set(this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start, null);
      this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start = (((1 + this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0));
      if (resizeInternalRepr) {
        const idx = this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
        this.scala$collection$mutable$ArrayDeque$$resize__I__V((((this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0)))
      };
      return elem
    }
  };
  length__I() {
    const idx = this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
    return (((this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0))
  };
  isEmpty__Z() {
    return (this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start === this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end)
  };
  iterableFactory__sc_SeqFactory() {
    return $m_scm_ArrayDeque$()
  };
  toArray__s_reflect_ClassTag__O(evidence$1) {
    const idx = this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
    const dest = evidence$1.newArray__I__O((((this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0)));
    const idx$1 = this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
    const maxItems = (((this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx$1) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0));
    return $f_scm_ArrayDequeOps__copySliceToArray__I__O__I__I__O(this, 0, dest, 0, maxItems)
  };
  scala$collection$mutable$ArrayDeque$$resize__I__V(len) {
    if (((len >= this.scm_ArrayDeque__f_array.u.length) || ((this.scm_ArrayDeque__f_array.u.length > 16) && (((this.scm_ArrayDeque__f_array.u.length - len) | 0) > len)))) {
      const idx = this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$start;
      const n = (((this.scm_ArrayDeque__f_scala$collection$mutable$ArrayDeque$$end - idx) | 0) & (((-1) + this.scm_ArrayDeque__f_array.u.length) | 0));
      const dest = $m_scm_ArrayDeque$().alloc__I__AO(len);
      const array2 = $asArrayOf_O($f_scm_ArrayDequeOps__copySliceToArray__I__O__I__I__O(this, 0, dest, 0, n), 1);
      $p_scm_ArrayDeque__reset__AO__I__I__V(this, array2, 0, n)
    }
  };
  stringPrefix__T() {
    return "ArrayDeque"
  };
  iterableFactory__sc_IterableFactory() {
    return this.iterableFactory__sc_SeqFactory()
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_ArrayDeque(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_ArrayDeque(elem)
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
}
function $as_scm_ArrayDeque(obj) {
  return (((obj instanceof $c_scm_ArrayDeque) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayDeque"))
}
function $isArrayOf_scm_ArrayDeque(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayDeque)))
}
function $asArrayOf_scm_ArrayDeque(obj, depth) {
  return (($isArrayOf_scm_ArrayDeque(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayDeque;", depth))
}
const $d_scm_ArrayDeque = new $TypeData().initClass({
  scm_ArrayDeque: 0
}, false, "scala.collection.mutable.ArrayDeque", {
  scm_ArrayDeque: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  scm_IndexedBuffer: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_ArrayDequeOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayDeque.prototype.$classData = $d_scm_ArrayDeque;
class $c_scm_Queue extends $c_scm_ArrayDeque {
  constructor(initialSize) {
    super();
    const array = $m_scm_ArrayDeque$().alloc__I__AO(initialSize);
    $ct_scm_ArrayDeque__AO__I__I__(this, array, 0, 0)
  };
  iterableFactory__sc_SeqFactory() {
    return $m_scm_Queue$()
  };
  stringPrefix__T() {
    return "Queue"
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_Queue$()
  };
}
function $as_scm_Queue(obj) {
  return (((obj instanceof $c_scm_Queue) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Queue"))
}
function $isArrayOf_scm_Queue(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Queue)))
}
function $asArrayOf_scm_Queue(obj, depth) {
  return (($isArrayOf_scm_Queue(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Queue;", depth))
}
const $d_scm_Queue = new $TypeData().initClass({
  scm_Queue: 0
}, false, "scala.collection.mutable.Queue", {
  scm_Queue: 1,
  scm_ArrayDeque: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  scm_IndexedBuffer: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_ArrayDequeOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_Queue.prototype.$classData = $d_scm_Queue;
$L0 = new $c_RTLong(0, 0);
TokenPlayLoad = $m_Lbon_jo_app_TokenPlayLoad$();
$s_Lbon_jo_phy_Test__main__AT__V($makeNativeArrayWrapper($d_T.getArrayOf(), []));
}).call(this);
//# sourceMappingURL=phy-js-fastopt.js.map
