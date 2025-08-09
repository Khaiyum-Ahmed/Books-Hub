import errorimg from '../../assets/error-page-not-found-vector.jpg'
const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <img className='w-full object-cover' src={errorimg} alt="" />
        </div>
    );
};

export default ErrorPage;