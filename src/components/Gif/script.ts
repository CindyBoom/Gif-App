import { Component, Vue, Prop } from "vue-property-decorator";
import { IGif } from "../../interfaces/gif";

@Component
class Gif extends Vue {
  @Prop(IGif) data: IGif;

  showModal() {
    this.$bvModal.show(this.data.id);
  }
}

export default Gif;
