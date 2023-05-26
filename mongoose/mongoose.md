require mongoose
connect db
create schema
create model
create docs
save docs using create or save method
use find method to see all the docs

important query methods

find(): Retrieves documents that match the specified query criteria. It returns an array of documents.

findOne(): Retrieves the first document that matches the specified query criteria. It returns a single document or null if no matching document is found.

findById(): Retrieves a document by its unique _id field. It returns a single document or null if no matching document is found.

findByIdAndUpdate(): Finds a document by its _id field and updates it. It returns the updated document.

findByIdAndDelete(): Finds a document by its _id field and deletes it. It returns the deleted document.

updateOne(): Updates a single document that matches the specified query criteria. It returns a promise with information about the update operation.

updateMany(): Updates multiple documents that match the specified query criteria. It returns a promise with information about the update operation.

deleteOne(): Deletes a single document that matches the specified query criteria. It returns a promise with information about the delete operation.

deleteMany(): Deletes multiple documents that match the specified query criteria. It returns a promise with information about the delete operation.

countDocuments(): Returns the count of documents that match the specified query criteria.

sort(): Specifies the sort order for the returned documents. It takes an object with fields to sort by and their sort order.

limit(): Limits the number of documents to be returned.

skip(): Skips a specified number of documents and returns the rest.