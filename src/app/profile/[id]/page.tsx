

const UserProfile = ({params}: any) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className='text-2xl'>Profile</h1>
        <hr />
        <p className="text-4xl">Profile Page 
        <span className="text-red-400 text-center">{params.id}</span>
        </p>
    </div>
  )
}

export default UserProfile