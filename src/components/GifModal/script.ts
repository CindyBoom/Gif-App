import { Component, Vue, Prop } from "vue-property-decorator";
import { IGif } from "../../interfaces/gif";

@Component
class GifModal extends Vue {
  @Prop(IGif) data: IGif;

  copyToClipboard() {
    const copyText = document.getElementById(`${this.data.id}_input`);

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");
  }
}

export default GifModal;
