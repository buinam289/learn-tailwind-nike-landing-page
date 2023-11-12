import Button from "./Button"

const SubscribeForm = () => {
  return (
    <div className="w-full lg:max-w-lg min-w-md border-2 rounded-[50px] flex justify-between gap-2 items-center p-2">
      <input type="text" className="input" placeholder="subscribe@nike.com" />
      <Button label="Sign Up" isPrimary />
    </div>
  )
}

export default SubscribeForm
