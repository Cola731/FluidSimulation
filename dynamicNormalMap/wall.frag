#version 330 core
out vec4 FragColor;

in vec3 TexCoords;

uniform samplerCube wallTex;

void main()
{    
    FragColor = texture(wallTex, TexCoords);
}

