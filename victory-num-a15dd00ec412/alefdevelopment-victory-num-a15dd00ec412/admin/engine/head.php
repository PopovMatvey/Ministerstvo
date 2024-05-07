<?php

    class HeadManager
    {
        private static $lines = [];
        public static function add($html)
        {
            HeadManager::$lines[] = $html;
        }

        public static function get()
        {
            return implode("\n", HeadManager::$lines);
        }
    }
