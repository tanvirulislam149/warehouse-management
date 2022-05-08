import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center'>Question & Answers</h2>
            <p>(1)Que: Difference between JavaScript and NodeJs</p>
            <p>Ans: JavaScript is a Scripting Language but NodeJs is a JavaScript runtime environment. By nodejs, JavaScript can be run outside the browser. Javascript is used for frontend development but nodejs is for server side. Html can be added in Javascript but nodejs don't have the capabilities to add html tags. Javascript can be run on the browser wherease nodejs have v8 to run JavaScript. </p>
            <p>(2)Que: When should I use nodejs and when should I use mongoDB?</p>
            <p>Ans: Nodejs is a JavaScript runtime environment that helps to run JavaScript outside the browser. It builds the connection between browser and server. MongoDB is a database. When we need to store data and do some work like query,update, read, delete data from the database we should use mongoDB.</p>
            <p>(3)Que: Differnce between SQL and noSQL.</p>
            <p>Ans: SQL means Structured Query Language and noSQL mean non-structured query language. In SQL, there is a predefined structure of data which shuld be followed but in noSQL, there is no such structure and so Developer has the flexibility to add document. SQL databases are table based but noSQL database can be key-value pairs, graph databases or wide-column stores, document-based. </p>
        </div>
    );
};

export default Blogs;