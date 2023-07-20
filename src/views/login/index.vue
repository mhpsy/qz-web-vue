<script setup lang="ts">
import request from "@/utils/request";
import {ref} from "vue";

const form = ref({
    username: '',
    password: ''
})

const login = () => {
    request({
        url: '/login/account',
        method: 'post',
        data: form.value
    }).then(res => {
        console.log(res)
    })
}

/**
 * number int
 *
 * "100"
 *
 * any
 *
 */

</script>

<template>
    <div class="box">

        <el-form label-width="100">
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="login" type="primary">登录</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<style scoped>

.box {
    padding: 20px;
    width: 400px;
    margin: 0 auto;
}
</style>