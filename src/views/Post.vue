<template>
  <div>
    <div class="border bg-white title">
      <h1 class="border bg-white">張貼動態</h1>
    </div>
    <div class="border bg-white post">
      <h2>貼文內容</h2>
      <label for="content" class="border content-wrapper">
        <textarea
          name="content"
          placeholder="輸入您的貼文內容"
          id="content"
          class="content"
        ></textarea>
      </label>
      <button type="button" class="btn upload">上傳圖片</button>

      <img src="../assets/img/image.png" alt="" class="preview" />
      <div class="submit-wrapper">
        <button type="button" class="btn border submit">送出貼文</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostView',
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 1rem;

  transform: translate(-5px, 5px);
  h1 {
    padding: 1rem 0;

    text-align: center;
    font-size: 1.25rem;

    transform: translate(5px, -5px);
  }
}

h2 {
  font-weight: Normal;
  font-size: 1rem;
}

.post {
  padding: 2rem;

  border-radius: 0.5rem;
}

.content-wrapper {
  display: block;
  margin-top: 0.25rem;
  padding: 0.75rem 1rem;
}

.content {
  width: 100%;
  height: 10rem;

  outline: none;
  border: 0;

  resize: none;
}

.upload {
  margin-top: 1rem;
  padding: 0.25rem 2rem;

  border-radius: 0.25rem;
  background: $black;
  line-height: 1.5em;

  color: $white;
}

.preview {
  margin-top: 1rem;

  border-radius: 0.5rem;
}

.submit-wrapper {
  margin-top: 2rem;
  padding: 0 4.5rem;
}

.submit {
  padding: 1rem 0;
  width: 100%;

  border-radius: 0.5rem;
  background: $grey;
}
</style>