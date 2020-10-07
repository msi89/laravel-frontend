<template>
    <div class="fragment"><slot /></div>
</template>

<script>
export default {};
</script>

<style>
.fragment {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    color: #999;
    font-size: 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
