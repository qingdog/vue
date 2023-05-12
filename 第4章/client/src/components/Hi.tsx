export default {
  props: {
    msg: String
  },
  setup(props: { msg: string }) {
    return () => <h5>{props.msg}</h5>
  }
}