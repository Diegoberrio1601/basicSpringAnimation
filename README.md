# Animated Spring 

Este proyecto es una demostración interactiva de animaciones usando React Native y la API `Animated.spring`. Permite a los usuarios ajustar parámetros como `toValue`, `friction` y `tension` mediante controles deslizantes para observar cómo afectan a la animación de una caja escalable. Ideal para aprender los fundamentos de las animaciones en React Native.

## Características

- **Animación interactiva**: Ajusta los parámetros de la animación en tiempo real.
- **Controles deslizantes intuitivos**: Configura valores de `toValue`, `friction` y `tension` con sliders.
- **Recarga de animación**: Un botón permite reiniciar la animación para ver los cambios aplicados.
- **Diseño responsivo**: Interfaz adaptada para diferentes tamaños de pantalla.


## Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1. Clona este repositorio:
   ```bash
   git clone git@github.com:Diegoberrio1601/basicSpringAnimation.git
   ```
   o 
   ```bash
   git clone https://github.com/Diegoberrio1601/basicSpringAnimation.git
   ```
2. Ve al directorio del proyecto:
   ```bash
   cd basicSpringAnimation
   ```
3. Instala las dependencias:
   ```bash
   yarn
   ```
4. Inicia el proyecto:
   ```bash
   expo start
   ```

## Uso

1. Ajusta los valores en los controles deslizantes:
   - `toValue`: Valor final del escalado.
   - `friction`: Controla la resistencia al movimiento.
   - `tension`: Determina la velocidad inicial de la animación.
2. Presiona el botón **Recargar animación** para aplicar los cambios.
3. Observa cómo la caja animada reacciona a los nuevos parámetros.

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- **React Native**: Framework para construir aplicaciones móviles nativas.
- **@react-native-community/slider**: Componente de slider para ajustes interactivos.
- **Expo**: Plataforma para desarrollo y compilación de aplicaciones React Native.

## Créditos

Creado por [Diego Berrio](https://github.com/diegoberrio1601).