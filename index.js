/*

Asyc Javascript - In simple word start something now and finish later

Javascript is synchronous/single thread, non blocking language - It execute the code one statement at a time

Javascript run time V8 for chrome
  it consists of heap (memory allocation) and callstack (execution context)
  one thread === one call stack === one thing at a time

Webapi 
  DOM, ajax, settimeout 

Browser consists of 
  javascript runtime eg v8 for chrome -> single thread callstack
  webapi -> runs aync call like DOM, ajax, xhr, settimeout  
  callback queue -> 
  event loop -> it look for call stack and callback queue, if the stack is empty then is pushes the first callback queue

*/