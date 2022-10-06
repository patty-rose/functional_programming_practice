// combining two JSON methods like this:

const objectCopy = JSON.parse(JSON.stringify(originalObject));

// In the example above, we serialize the object into a JSON string. Then we deserialize it back into an object. This breaks the reference to the original object.

