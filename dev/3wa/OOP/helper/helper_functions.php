<?php

function sanitizePost($post) {
    return filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
}

function sanitizeGet($get) {
    return filter_input_array(INPUT_GET, FILTER_SANITIZE_STRING);
}