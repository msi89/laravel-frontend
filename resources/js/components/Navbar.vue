<template>
    <div class="navbar">
        <router-link to="/">Logo</router-link>
        <nav>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </nav>
    </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
    display: flex;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.9);
}
.navbar a {
    color: #ddd;
    text-decoration: none;
    padding: 10px;
}
.navbar li {
    list-style: none;
}
.navbar nav {
    display: flex;
}
.navbar nav a {
    display: flex;
}
</style>
