#version 330 core
out vec4 FragColor;

in vec3 Pos;
in vec3 Normal;

uniform vec3 lightPos;
uniform vec3 viewPos;
void main()
{   
	
	vec3 color = vec3(0.1,0.4,1);
    vec3 normal = normalize(Normal);
    vec3 lightColor = vec3(1.0);
    // ambient
    float ambi = 0.2;
    // diffuse
    vec3 lightDir = normalize(lightPos - Pos);
    float diff = max(dot(lightDir, normal), 0.0);
    // specular
    vec3 viewDir = normalize(viewPos -Pos); 
    float spec = pow(max(dot(normal,viewDir), 0.0), 16.0);    
                         
    vec3 result = (ambi + diff + spec) * color; 	
	FragColor=vec4(result,1);
}