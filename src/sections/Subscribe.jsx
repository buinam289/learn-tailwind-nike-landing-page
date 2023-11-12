import SubscribeForm from "../components/SubscribeForm"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center gap-10 max-lg:flex-col">
      <h3 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h3>
      <SubscribeForm />
    </section>
  )
}

export default Subscribe
