<template>
    <div class="welcome-wrapper">
        <h3>Welcome to Event Tracking Builder</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="footer-section">
            <router-link to="/settings"><a-button>Start Building!</a-button></router-link>
        </div>
    </div>
    
</template>
<script>
import { Button } from 'ant-design-vue';
const ButtonGroup = Button.Group;

export default {
    name: 'Welcome',
    components: {
      AButton: Button,
      AButtonGroup: ButtonGroup,
    },
}
</script>