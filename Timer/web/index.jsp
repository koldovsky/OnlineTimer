<%--
  Created by IntelliJ IDEA.
  User: Oles Onyshchak
  Date: 4/22/2015
  Time: 7:54 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<style>
  #output {
    width: 100px;
    height: 20px;
    background-color: #CCC;
    border: 1px solid #100;
  }
</style>
<head>
<body>
<script src="Timer.js"></script>
<p id="output"></p>
<button id="startPause" onclick="startPause()">Start</button>
<button onclick="reset()">Reset</button>
<button onclick="save()">save</button>
<h1 id ="text"></h1>
<button onclick="get()">get</button>
</body>
</head>
</html>