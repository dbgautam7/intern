import axios from 'axios';

const Login = () => {

    //post request using async await promise
    const postData = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login',
                {
                    name: "DB Gautam",
                    phone: 9864403077
                });
            const data=response.json()
            if(data && data.status===200){
                console.log("data posted successfully")
            }
        } catch (error) {
            console.error(error);
        }
    }
    postData()

//get request using async await promise
    const getData = async () => {
        try {
            const request = await axios.get("http://localhost:3000/login");
            console.log(request);
        }
        catch (error) {
            console.log(error);
        }
    }
    getData()

//delete request using .then promise
    const deleteData=()=>{
    axios.delete('http://your-backend-api.com/data/123')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
    }
    deleteData()

    return (
        <div>
            This is login page
        </div>
    )
}

export default Login